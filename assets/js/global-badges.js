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

    function renderLandingPageStatus() {
        const summary = getGroupProgress();
        const card = document.getElementById('global-badge-card');
        if (!card) return summary;

        const title = document.getElementById('global-badge-title');
        const subtitle = document.getElementById('global-badge-subtitle');
        const icon = document.getElementById('global-badge-icon');
        const progress = document.getElementById('global-badge-progress');
        const progressBar = document.getElementById('global-badge-progress-bar');
        const checklist = document.getElementById('global-badge-checklist');

        const percent = Math.round((summary.completedGroups / summary.totalGroups) * 100);
        card.classList.toggle('ring-2', summary.appBadgeUnlocked);
        card.classList.toggle('ring-star-gold', summary.appBadgeUnlocked);
        card.classList.toggle('shadow-[0_0_40px_rgba(255,209,102,0.25)]', summary.appBadgeUnlocked);

        if (title) {
            title.textContent = summary.appBadgeUnlocked ? 'Global Badge Unlocked' : 'Global Badge In Progress';
        }
        if (subtitle) {
            subtitle.textContent = summary.appBadgeUnlocked
                ? 'Solar System Grand Master earned by mastering every tracked world cluster.'
                : 'Master every planet system, belt region, and the astronomy course to earn the app-wide badge.';
        }
        if (icon) {
            icon.textContent = summary.appBadgeUnlocked ? '🏅' : '🌠';
        }
        if (progress) {
            progress.textContent = `${summary.completedGroups}/${summary.totalGroups} mastery badges`;
        }
        if (progressBar) {
            progressBar.style.width = `${percent}%`;
        }
        if (checklist) {
            checklist.innerHTML = summary.groups.map((group) => `
                <div class="flex items-center justify-between gap-3 rounded-xl border px-3 py-2 ${group.unlocked ? 'border-star-gold bg-star-gold/10 text-white' : 'border-white/10 bg-black/20 text-gray-300'}">
                    <span class="font-mono text-xs uppercase tracking-wide">${group.label}</span>
                    <span class="font-mono text-xs">${group.completedMembers}/${group.totalMembers}</span>
                </div>
            `).join('');
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
        loadState,
        saveState,
        restorePageState,
        syncCurrentPageState,
        renderLandingPageStatus,
        getGroupProgress,
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
