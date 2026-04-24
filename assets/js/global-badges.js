(function () {
    const STORAGE_KEY = 'solar_explorer_global_progress_v1';

    const PAGE_LABELS = {
        mercury: 'Mercury',
        venus: 'Venus',
        earth: 'Earth',
        luna: 'Luna',
        mars: 'Mars',
        phobos: 'Phobos',
        deimos: 'Deimos',
        jupiter: 'Jupiter',
        io: 'Io',
        europa: 'Europa',
        ganymede: 'Ganymede',
        callisto: 'Callisto',
        saturn: 'Saturn',
        titan: 'Titan',
        enceladus: 'Enceladus',
        iapetus: 'Iapetus',
        mimas: 'Mimas',
        rhea: 'Rhea',
        uranus: 'Uranus',
        miranda: 'Miranda',
        ariel: 'Ariel',
        umbriel: 'Umbriel',
        titania: 'Titania',
        oberon: 'Oberon',
        neptune: 'Neptune',
        triton: 'Triton',
        proteus: 'Proteus',
        nereid: 'Nereid',
        larissa: 'Larissa',
        'asteroid-belt': 'Asteroid Belt',
        ceres: 'Ceres',
        vesta: 'Vesta',
        pallas: 'Pallas',
        hygiea: 'Hygiea',
        'kuiper-belt': 'Kuiper Belt',
        arrokoth: 'Arrokoth',
        quaoar: 'Quaoar',
        orcus: 'Orcus',
        salacia: 'Salacia',
        'dwarf-planets': 'Dwarf Planets',
        pluto: 'Pluto',
        eris: 'Eris',
        haumea: 'Haumea',
        makemake: 'Makemake',
        'astronomical-terms': 'Astronomical Terms'
    };

    const MASTERY_GROUPS = [
        { key: 'mercury-master', label: 'Mercury Master', members: ['mercury'] },
        { key: 'venus-master', label: 'Venus Master', members: ['venus'] },
        { key: 'earth-master', label: 'Earth & Luna Master', members: ['earth', 'luna'] },
        { key: 'mars-master', label: 'Mars System Master', members: ['mars', 'phobos', 'deimos'] },
        { key: 'jupiter-master', label: 'Jupiter System Master', members: ['jupiter', 'io', 'europa', 'ganymede', 'callisto'] },
        { key: 'saturn-master', label: 'Saturn System Master', members: ['saturn', 'mimas', 'enceladus', 'rhea', 'titan', 'iapetus'] },
        { key: 'uranus-master', label: 'Uranus System Master', members: ['uranus', 'miranda', 'ariel', 'umbriel', 'titania', 'oberon'] },
        { key: 'neptune-master', label: 'Neptune System Master', members: ['neptune', 'triton', 'proteus', 'nereid', 'larissa'] },
        { key: 'asteroid-master', label: 'Asteroid Belt Master', members: ['asteroid-belt', 'ceres', 'vesta', 'pallas', 'hygiea'] },
        { key: 'kuiper-master', label: 'Kuiper Belt Master', members: ['kuiper-belt', 'arrokoth', 'quaoar', 'orcus', 'salacia'] },
        { key: 'dwarf-master', label: 'Dwarf Planets Master', members: ['dwarf-planets', 'pluto', 'eris', 'haumea', 'makemake'] },
        { key: 'astronomical-terms-master', label: 'Astronomical Terms Master', members: ['astronomical-terms'] }
    ];
    const WORLD_BADGE_KEYS = [...new Set(MASTERY_GROUPS.flatMap((group) => group.members))];
    const BADGE_ART = {
        'mercury-master': 'assets/badges/mercury-master.svg',
        'venus-master': 'assets/badges/venus-master.svg',
        'earth-master': 'assets/badges/earth-master.svg',
        'mars-master': 'assets/badges/mars-master.svg',
        'jupiter-master': 'assets/badges/jupiter-master.svg',
        'saturn-master': 'assets/badges/saturn-master.svg',
        'uranus-master': 'assets/badges/uranus-master.svg',
        'neptune-master': 'assets/badges/neptune-master.svg',
        'asteroid-master': 'assets/badges/asteroid-master.svg',
        'kuiper-master': 'assets/badges/kuiper-master.svg',
        'dwarf-master': 'assets/badges/dwarf-master.svg',
        'astronomical-terms-master': 'assets/badges/astronomical-terms-master.svg',
        grand: 'assets/badges/solar-system-grand-master.svg'
    };

    const DEFAULT_STATE = {
        pages: {},
        groupBadges: {},
        appBadgeUnlocked: false,
        appBadgeUnlockedAt: null
    };

    function cloneDefaultState() {
        return JSON.parse(JSON.stringify(DEFAULT_STATE));
    }

    function loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return cloneDefaultState();
            const parsed = JSON.parse(raw);
            return {
                ...cloneDefaultState(),
                ...parsed,
                pages: parsed.pages || {},
                groupBadges: parsed.groupBadges || {}
            };
        } catch (error) {
            console.warn('Could not load global badge progress.', error);
            return cloneDefaultState();
        }
    }

    function saveState(state) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function getCurrentWorldKey() {
        const path = window.location.pathname || '';
        const fileName = path.split('/').filter(Boolean).pop() || 'index.html';
        if (!fileName.endsWith('.html') || fileName === 'index.html') return null;
        return fileName.replace(/\.html$/i, '').toLowerCase();
    }

    function countCompletedTasks(achievements) {
        return Object.values(achievements || {}).filter(Boolean).length;
    }

    function countTotalTasks(achievements) {
        return Object.values(achievements || {}).filter((value) => typeof value === 'boolean').length;
    }

    function getPageSnapshot(worldKey) {
        const pageAchievements = typeof achievements === 'object' && achievements
            ? { ...achievements }
            : {};
        const flippedCards = typeof cardsFlipped !== 'undefined' && cardsFlipped instanceof Set
            ? Array.from(cardsFlipped)
            : [];
        const totalCards = document.querySelectorAll('.flip-card').length;
        const totalTasks = countTotalTasks(pageAchievements);
        const completedTasks = countCompletedTasks(pageAchievements);

        return {
            key: worldKey,
            label: PAGE_LABELS[worldKey] || worldKey,
            visited: true,
            xp: typeof xp === 'number' ? xp : 0,
            cardsFlipped: flippedCards,
            cardsReadCount: flippedCards.length,
            totalCards,
            achievements: pageAchievements,
            completedTasks,
            totalTasks,
            badge: totalTasks > 0 && completedTasks >= totalTasks,
            updatedAt: Date.now()
        };
    }

    function restorePageState() {
        const worldKey = getCurrentWorldKey();
        if (!worldKey) return loadState();

        const state = loadState();
        const saved = state.pages[worldKey];
        if (!saved) return state;

        if (typeof xp !== 'undefined' && typeof saved.xp === 'number') {
            xp = saved.xp;
        }

        if (typeof cardsFlipped !== 'undefined' && Array.isArray(saved.cardsFlipped)) {
            cardsFlipped = new Set(saved.cardsFlipped);
        }

        if (typeof achievements === 'object' && achievements && saved.achievements) {
            Object.keys(achievements).forEach((key) => {
                if (Object.prototype.hasOwnProperty.call(saved.achievements, key)) {
                    achievements[key] = !!saved.achievements[key];
                }
            });
        }

        syncPageUI(saved);
        return state;
    }

    function syncPageUI(saved) {
        if (saved.badge) {
            [
                'planetCompleteAlerted',
                'moonCompleteAlerted',
                'astroCompleteAlerted',
                'beltCompleteAlerted',
                'dwarfCompleteAlerted',
                'kuiperCompleteAlerted',
                'sunCompleteAlerted',
                `${saved.key}CompleteAlerted`
            ].forEach((flag) => {
                window[flag] = true;
            });
        }

        const xpCounter = document.getElementById('xpCounter');
        if (xpCounter && typeof saved.xp === 'number') {
            xpCounter.innerText = `${saved.xp} XP`;
        }

        if (typeof updateProgress === 'function') {
            updateProgress();
        }
    }

    function recomputeMasteryBadges(state) {
        const newGroupKeys = [];

        MASTERY_GROUPS.forEach((group) => {
            const unlocked = group.members.every((member) => state.pages[member] && state.pages[member].badge);

            if (unlocked && !state.groupBadges[group.key]) {
                state.groupBadges[group.key] = {
                    label: group.label,
                    unlockedAt: Date.now()
                };
                newGroupKeys.push(group.key);
            }

            if (!unlocked && state.groupBadges[group.key]) {
                delete state.groupBadges[group.key];
            }
        });

        const appBadgeUnlocked = MASTERY_GROUPS.every((group) => !!state.groupBadges[group.key]);
        const newlyUnlockedAppBadge = appBadgeUnlocked && !state.appBadgeUnlocked;

        state.appBadgeUnlocked = appBadgeUnlocked;
        if (newlyUnlockedAppBadge) {
            state.appBadgeUnlockedAt = Date.now();
        }
        if (!appBadgeUnlocked) {
            state.appBadgeUnlockedAt = null;
        }

        return { newGroupKeys, newlyUnlockedAppBadge };
    }

    function maybeCelebrateUnlocks(state, unlocks, worldKey) {
        if (typeof showMsgBox !== 'function') return;

        const relatedGroups = unlocks.newGroupKeys
            .map((groupKey) => MASTERY_GROUPS.find((group) => group.key === groupKey))
            .filter((group) => group && group.members.includes(worldKey));

        if (unlocks.newlyUnlockedAppBadge) {
            showMsgBox(
                'Solar System Grand Master!',
                'You mastered every tracked planet system, special region, and the astronomical terms course. The global app badge is now yours.',
                '🏅'
            );
            return;
        }

        if (relatedGroups.length > 0) {
            const latestGroup = relatedGroups[relatedGroups.length - 1];
            showMsgBox(
                `${latestGroup.label} Unlocked!`,
                `That mastery badge now counts toward the global Solar System Grand Master award.`,
                '🌟'
            );
        }
    }

    function syncCurrentPageState(options = {}) {
        const worldKey = getCurrentWorldKey();
        const state = loadState();

        if (!worldKey) {
            const unlocks = recomputeMasteryBadges(state);
            saveState(state);
            if (options.dispatch !== false) {
                window.dispatchEvent(new CustomEvent('global-badges:updated', { detail: { state, unlocks } }));
            }
            return state;
        }

        const snapshot = getPageSnapshot(worldKey);
        state.pages[worldKey] = {
            ...(state.pages[worldKey] || {}),
            ...snapshot
        };

        const unlocks = recomputeMasteryBadges(state);
        saveState(state);

        if (options.refreshUI !== false) {
            syncPageUI(snapshot);
        }

        if (options.celebrate !== false) {
            maybeCelebrateUnlocks(state, unlocks, worldKey);
        }

        if (options.dispatch !== false) {
            window.dispatchEvent(new CustomEvent('global-badges:updated', { detail: { state, unlocks } }));
        }

        return state;
    }

    function getGroupProgress() {
        const state = loadState();
        const groups = MASTERY_GROUPS.map((group) => {
            const completedMembers = group.members.filter((member) => state.pages[member] && state.pages[member].badge).length;
            return {
                ...group,
                unlocked: !!state.groupBadges[group.key],
                completedMembers,
                totalMembers: group.members.length
            };
        });

        const completedGroups = groups.filter((group) => group.unlocked).length;

        return {
            state,
            groups,
            completedGroups,
            totalGroups: groups.length,
            appBadgeUnlocked: !!state.appBadgeUnlocked
        };
    }

    function getBadgeArtPath(key) {
        return BADGE_ART[key] || BADGE_ART.grand;
    }

    function getWorldBadgeCatalog(state = loadState()) {
        return WORLD_BADGE_KEYS.map((key) => {
            const page = state.pages[key];
            const label = PAGE_LABELS[key] || key;
            const earned = !!(page && page.badge);
            const totalTasks = page && page.totalTasks ? page.totalTasks : null;
            const completedTasks = page ? page.completedTasks || 0 : 0;

            return {
                key,
                label,
                earned,
                completedTasks,
                totalTasks,
                description: `Complete every activity on ${label}: read the cards, finish the interactive challenge, and pass the quiz.`,
                progressText: earned
                    ? 'Earned'
                    : totalTasks
                        ? `${completedTasks}/${totalTasks} tasks done`
                        : 'Not started'
            };
        });
    }

    function getMasteryCatalog(state = loadState()) {
        return MASTERY_GROUPS.map((group) => {
            const completedMembers = group.members.filter((member) => state.pages[member] && state.pages[member].badge).length;
            const earned = !!state.groupBadges[group.key];
            return {
                ...group,
                earned,
                completedMembers,
                totalMembers: group.members.length,
                description: `Earn every badge in the ${group.label.replace(/ Master$/, '')} collection.`,
                progressText: earned ? 'Earned' : `${completedMembers}/${group.members.length} badges earned`
            };
        });
    }

    function renderLandingPageStatus() {
        const summary = getGroupProgress();
        const trigger = document.getElementById('global-badge-trigger');
        const triggerIcon = document.getElementById('global-badge-trigger-icon');
        const triggerCount = document.getElementById('global-badge-trigger-count');
        const triggerLabel = document.getElementById('global-badge-trigger-label');
        const modalTitle = document.getElementById('global-badge-modal-title');
        const modalSubtitle = document.getElementById('global-badge-modal-subtitle');
        const progress = document.getElementById('global-badge-progress');
        const progressBar = document.getElementById('global-badge-progress-bar');
        const worldList = document.getElementById('badge-world-list');
        const masteryList = document.getElementById('badge-mastery-list');
        const finalCard = document.getElementById('badge-final-card');
        const percent = Math.round((summary.completedGroups / summary.totalGroups) * 100);

        if (trigger) {
            trigger.classList.toggle('border-star-gold', summary.appBadgeUnlocked);
            trigger.classList.toggle('border-white/10', !summary.appBadgeUnlocked);
            trigger.classList.toggle('shadow-[0_0_18px_rgba(255,209,102,0.18)]', summary.appBadgeUnlocked);
        }
        if (triggerIcon) {
            triggerIcon.innerHTML = `<img src="${getBadgeArtPath('grand')}" alt="" class="h-7 w-7 rounded-full object-cover ${summary.appBadgeUnlocked ? '' : 'opacity-75 saturate-75'}">`;
        }
        if (triggerCount) {
            triggerCount.textContent = `${summary.completedGroups}/${summary.totalGroups}`;
        }
        if (triggerLabel) {
            triggerLabel.textContent = summary.appBadgeUnlocked ? 'All badges earned' : 'Badge guide';
        }
        if (modalTitle) {
            modalTitle.textContent = summary.appBadgeUnlocked ? 'Badge Collection Complete' : 'Badge Collection';
        }
        if (modalSubtitle) {
            modalSubtitle.textContent = summary.appBadgeUnlocked
                ? 'Solar System Grand Master earned by mastering every tracked world cluster.'
                : 'Track every badge, see what is earned already, and find the next collection to finish.';
        }
        if (progress) {
            progress.textContent = `${summary.completedGroups}/${summary.totalGroups} mastery badges`;
        }
        if (progressBar) {
            progressBar.style.width = `${percent}%`;
        }
        if (worldList) {
            worldList.innerHTML = getWorldBadgeCatalog(summary.state).map((badge) => `
                <article class="rounded-2xl border px-4 py-3 ${badge.earned ? 'border-star-green/50 bg-star-green/10' : 'border-white/10 bg-black/25'}">
                    <div class="flex items-center justify-between gap-3">
                        <h3 class="font-display text-base ${badge.earned ? 'text-star-green' : 'text-white'}">${badge.label}</h3>
                        <span class="font-mono text-[11px] uppercase tracking-[0.2em] ${badge.earned ? 'text-star-green' : 'text-gray-400'}">${badge.progressText}</span>
                    </div>
                    <p class="mt-2 text-sm text-gray-300 leading-snug">${badge.description}</p>
                </article>
            `).join('');
        }
        if (masteryList) {
            masteryList.innerHTML = getMasteryCatalog(summary.state).map((group) => `
                <article class="rounded-2xl border px-4 py-3 ${group.earned ? 'border-star-gold/60 bg-star-gold/10' : 'border-white/10 bg-black/25'}">
                    <div class="flex items-center justify-between gap-3">
                        <div class="flex items-center gap-3 min-w-0">
                            <img src="${getBadgeArtPath(group.key)}" alt="${group.label} badge" class="h-14 w-14 shrink-0 rounded-2xl border ${group.earned ? 'border-star-gold/50' : 'border-white/10'} bg-black/20 object-cover">
                            <h3 class="font-display text-base ${group.earned ? 'text-star-gold' : 'text-white'}">${group.label}</h3>
                        </div>
                        <span class="font-mono text-[11px] uppercase tracking-[0.2em] ${group.earned ? 'text-star-gold' : 'text-gray-400'}">${group.progressText}</span>
                    </div>
                    <p class="mt-2 text-sm text-gray-300 leading-snug">${group.description}</p>
                </article>
            `).join('');
        }
        if (finalCard) {
            finalCard.className = `rounded-2xl border px-5 py-4 ${summary.appBadgeUnlocked ? 'border-star-gold bg-star-gold/10 shadow-[0_0_24px_rgba(255,209,102,0.14)]' : 'border-white/10 bg-black/25'}`;
            finalCard.innerHTML = `
                <div class="flex items-start gap-4">
                    <img src="${getBadgeArtPath('grand')}" alt="Solar System Grand Master badge" class="h-16 w-16 shrink-0 rounded-[1.25rem] border ${summary.appBadgeUnlocked ? 'border-star-gold/60' : 'border-white/10'} bg-black/20 object-cover ${summary.appBadgeUnlocked ? '' : 'opacity-80 saturate-75'}">
                    <div>
                        <h3 class="font-display text-lg ${summary.appBadgeUnlocked ? 'text-star-gold' : 'text-white'}">Solar System Grand Master</h3>
                        <p class="mt-1 text-sm text-gray-300 leading-snug">
                            ${summary.appBadgeUnlocked
                                ? 'Every mastery badge is complete. You earned the app-wide badge.'
                                : 'Unlock all 12 mastery badges to earn the final app-wide award.'}
                        </p>
                        <p class="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] ${summary.appBadgeUnlocked ? 'text-star-gold' : 'text-gray-400'}">
                            ${summary.completedGroups}/${summary.totalGroups} mastery badges earned
                        </p>
                    </div>
                </div>
            `;
        }

        return summary;
    }

    function hasWorldVisited(worldKey) {
        const state = loadState();
        return !!(state.pages[worldKey] && state.pages[worldKey].visited);
    }

    function hasWorldBadge(worldKey) {
        const state = loadState();
        return !!(state.pages[worldKey] && state.pages[worldKey].badge);
    }

    function resetAllProgress() {
        localStorage.removeItem(STORAGE_KEY);
    }

    window.GlobalBadges = {
        STORAGE_KEY,
        PAGE_LABELS,
        MASTERY_GROUPS,
        BADGE_ART,
        loadState,
        saveState,
        restorePageState,
        syncCurrentPageState,
        renderLandingPageStatus,
        getGroupProgress,
        getWorldBadgeCatalog,
        getMasteryCatalog,
        getBadgeArtPath,
        hasWorldVisited,
        hasWorldBadge,
        resetAllProgress
    };

    window.addEventListener('beforeunload', () => {
        if (getCurrentWorldKey()) {
            syncCurrentPageState({ celebrate: false, dispatch: false });
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        restorePageState();

        if (getCurrentWorldKey()) {
            syncCurrentPageState({ celebrate: false });
            setInterval(() => syncCurrentPageState({ celebrate: false }), 1500);
        } else {
            renderLandingPageStatus();
        }
    });
})();
