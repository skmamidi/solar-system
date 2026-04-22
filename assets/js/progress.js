/* =========================================================================
   progress.js — Shared gamification engine
   Persists one state blob in localStorage, keyed per-planet.
   Loaded first on every page (before ui.js).
   ========================================================================= */

const APP_KEY = 'sse_v1';

const RANKS = [
    { name: 'Stargazer',           xp: 0    },
    { name: 'Space Cadet',         xp: 100  },
    { name: 'Rocket Pilot',        xp: 300  },
    { name: 'Mission Commander',   xp: 700  },
    { name: 'Solar Captain',       xp: 1200 },
    { name: 'Galactic Explorer',   xp: 2000 }
];

// Default state shape. Per-planet progress lives under objects keyed by world id.
const DEFAULT_STATE = {
    xp: 0,
    rank: 'Stargazer',
    visited: [],            // ['earth', 'mars', ...]
    badges: [],             // ['earth', ...]
    cardsRead: {},          // { earth: [1,2,...], mercury: [...] }
    quizPassed: {},         // { earth: true }
    gamePassed: {},         // { earth: true }
    cards: []               // collected cosmic cards
};

let state = JSON.parse(JSON.stringify(DEFAULT_STATE));

function loadProgress() {
    const saved = localStorage.getItem(APP_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state = { ...DEFAULT_STATE, ...parsed };
            // Guard against older saves that used primitive fields
            state.cardsRead  = state.cardsRead  || {};
            state.quizPassed = state.quizPassed || {};
            state.gamePassed = state.gamePassed || {};
        } catch (e) {
            console.warn('Corrupt save, resetting.', e);
            state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        }
    }
}

function saveProgress() {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
    if (typeof updateHUD === 'function') updateHUD();
}

function resetProgress() {
    if (!confirm('Are you sure you want to erase all your progress and badges?')) return;
    localStorage.removeItem(APP_KEY);
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    if (typeof updateHUD === 'function') updateHUD();
    if (typeof showToast === 'function') showToast('Progress Reset', '🗑️', 'text-star-red');
    // Navigate home so stale page state doesn't confuse the user
    setTimeout(() => {
        window.location.href = window.__IS_SUB_PAGE__ ? '../index.html' : 'index.html';
    }, 400);
}

function addXP(amount, reason = '') {
    state.xp += amount;

    // Determine new rank
    let newRank = state.rank;
    for (let i = 0; i < RANKS.length; i++) {
        if (state.xp >= RANKS[i].xp) newRank = RANKS[i].name;
    }

    const rankedUp = newRank !== state.rank;
    state.rank = newRank;

    if (rankedUp) {
        if (typeof fireConfetti === 'function') fireConfetti();
        if (typeof showToast === 'function') {
            showToast(`Rank Up! You are now a ${state.rank}`, '🏆', 'text-star-gold');
        }
    } else if (typeof showToast === 'function') {
        showToast(`+${amount} XP ${reason}`, '⭐', 'text-star-gold');
    }

    saveProgress();
    updateXPBar();
}

function updateXPBar() {
    const bar = document.getElementById('hud-xp-bar');
    if (!bar) return;
    const i = RANKS.findIndex(r => r.name === state.rank);
    const currentRankXP = RANKS[i].xp;
    const nextRankXP = RANKS[i + 1] ? RANKS[i + 1].xp : currentRankXP + 1000;
    const progress = ((state.xp - currentRankXP) / (nextRankXP - currentRankXP)) * 100;
    bar.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
}

/* --------- World tracking helpers --------- */

function markVisited(worldKey, xpReward = 20) {
    if (!state.visited.includes(worldKey)) {
        state.visited.push(worldKey);
        saveProgress();
        addXP(xpReward, 'First Visit!');
    }
}

function markCardRead(worldKey, cardId, totalCards) {
    if (!state.cardsRead[worldKey]) state.cardsRead[worldKey] = [];
    if (!state.cardsRead[worldKey].includes(cardId)) {
        state.cardsRead[worldKey].push(cardId);
        saveProgress();
        if (state.cardsRead[worldKey].length === totalCards) {
            setTimeout(() => addXP(20, 'All Cards Read!'), 500);
            checkBadgeStatus(worldKey, totalCards);
        }
    }
}

function markQuizPassed(worldKey, totalCards) {
    if (!state.quizPassed[worldKey]) {
        state.quizPassed[worldKey] = true;
        saveProgress();
        setTimeout(() => addXP(30, 'Perfect Quiz!'), 500);
        checkBadgeStatus(worldKey, totalCards);
    }
}

function markGamePassed(worldKey, totalCards) {
    if (!state.gamePassed[worldKey]) {
        state.gamePassed[worldKey] = true;
        saveProgress();
        setTimeout(() => addXP(50, 'Game Complete!'), 500);
        checkBadgeStatus(worldKey, totalCards);
    }
}

function checkBadgeStatus(worldKey, totalCards) {
    if (state.badges.includes(worldKey)) return;
    const cardsCount = (state.cardsRead[worldKey] || []).length;
    const quizDone   = !!state.quizPassed[worldKey];
    const gameDone   = !!state.gamePassed[worldKey];

    if (cardsCount >= totalCards && quizDone && gameDone) {
        state.badges.push(worldKey);
        saveProgress();
        if (typeof fireConfetti === 'function') {
            fireConfetti();
            setTimeout(fireConfetti, 400);
        }
        if (typeof showToast === 'function') {
            showToast(`${worldKey.toUpperCase()} BADGE UNLOCKED!`, '🏅', 'text-star-gold');
        }
    }
}

/* --------- Convenience read-only getters for pages --------- */
function getState() { return state; }
function hasBadge(k) { return state.badges.includes(k); }
function hasVisited(k) { return state.visited.includes(k); }
