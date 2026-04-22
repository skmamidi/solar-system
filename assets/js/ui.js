/* =========================================================================
   ui.js — Shared UI layer
   Injects the HUD, starfield, hyperspace, confetti, and toast DOM on every
   page. Exposes navigate(url), showToast, shakeElement, fireConfetti.
   Depends on progress.js being loaded first.
   ========================================================================= */

const IS_SUB_PAGE = !!window.__IS_SUB_PAGE__;
const HOME_URL = IS_SUB_PAGE ? '../index.html' : 'index.html';

/* --------- Boot --------- */
document.addEventListener('DOMContentLoaded', () => {
    injectGlobalDOM();
    initStarfield();
    loadProgress();
    updateHUD();
    updateXPBar();

    // Fade out any incoming hyperspace overlay (from the page we just left)
    requestAnimationFrame(() => {
        const hyper = document.getElementById('hyperspace');
        if (hyper) hyper.classList.remove('active');
    });

    // One-time onboarding nudge
    if (state.xp === 0 && !IS_SUB_PAGE) {
        setTimeout(() => showToast('Welcome Stargazer! Pick a world to explore.', '🚀'), 900);
    }

    // Page-level hook
    if (typeof onPageReady === 'function') onPageReady();
});

/* --------- DOM Injection --------- */
function injectGlobalDOM() {
    // Starfield canvas
    if (!document.getElementById('starfield')) {
        const c = document.createElement('canvas');
        c.id = 'starfield';
        document.body.prepend(c);
    }

    // Hyperspace overlay
    if (!document.getElementById('hyperspace')) {
        const h = document.createElement('div');
        h.id = 'hyperspace';
        h.innerHTML = '<div class="warp-lines"></div>';
        document.body.appendChild(h);
    }

    // HUD
    if (!document.getElementById('hud-root')) {
        const hud = document.createElement('header');
        hud.id = 'hud-root';
        hud.className = 'fixed top-0 w-full z-50 glass-panel border-t-0 border-l-0 border-r-0 rounded-none px-4 py-3 flex justify-between items-center';
        hud.innerHTML = `
            <div class="flex items-center gap-4">
                ${IS_SUB_PAGE ? `
                <button class="btn-press p-2 bg-space-700 rounded-lg hover:bg-space-500 text-star-cyan"
                        onclick="navigate('${HOME_URL}')" title="Mission Control">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                </button>` : ''}
                <div class="hidden sm:block">
                    <h1 class="font-display font-bold text-xl text-star-cyan tracking-wide">ORBI'S EXPLORER</h1>
                </div>
            </div>

            <div class="flex-1 max-w-md mx-4">
                <div class="flex justify-between text-sm mb-1 font-mono">
                    <span id="hud-rank" class="text-star-gold font-bold uppercase">Stargazer</span>
                    <span class="text-star-cyan"><span id="hud-xp">0</span> XP</span>
                </div>
                <div class="w-full bg-space-900 rounded-full h-3 border border-space-500 overflow-hidden relative">
                    <div id="hud-xp-bar" class="bg-star-gold h-3 rounded-full transition-all duration-500" style="width: 0%"></div>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <div class="flex items-center gap-1 bg-space-900 px-3 py-1 rounded-full border border-space-500" title="Badges">
                    <span class="text-star-gold">★</span>
                    <span id="hud-badges" class="font-mono text-sm">0</span>
                </div>
                <button class="btn-press p-2 text-star-red hover:text-white" onclick="resetProgress()" title="Reset Progress">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                </button>
            </div>
        `;
        document.body.insertBefore(hud, document.body.firstChild);
    }

    // Toast
    if (!document.getElementById('toast')) {
        const t = document.createElement('div');
        t.id = 'toast';
        t.className = 'toast glass-panel bg-space-900 px-6 py-3 font-display border-star-green flex items-center gap-3 shadow-2xl';
        t.innerHTML = '<span id="toast-icon">✨</span><span id="toast-msg" class="font-bold"></span>';
        document.body.appendChild(t);
    }

    // Confetti canvas
    if (!document.getElementById('confetti')) {
        const c = document.createElement('canvas');
        c.id = 'confetti';
        c.className = 'fixed inset-0 pointer-events-none z-[100]';
        document.body.appendChild(c);
    }
}

/* --------- HUD --------- */
function updateHUD() {
    const xpEl = document.getElementById('hud-xp');
    const rankEl = document.getElementById('hud-rank');
    const badgesEl = document.getElementById('hud-badges');
    if (xpEl)     xpEl.textContent = state.xp;
    if (rankEl)   rankEl.textContent = state.rank;
    if (badgesEl) badgesEl.textContent = state.badges.length;
}

/* --------- Navigation --------- */
function navigate(url) {
    const hyper = document.getElementById('hyperspace');
    if (hyper) hyper.classList.add('active');
    setTimeout(() => {
        window.location.href = url;
    }, 350);
}

/* --------- Toast --------- */
function showToast(msg, icon = '✨', colorClass = 'text-star-green') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    document.getElementById('toast-msg').textContent = msg;
    document.getElementById('toast-icon').textContent = icon;
    toast.className = `toast glass-panel bg-space-900 px-6 py-3 font-display flex items-center gap-3 shadow-2xl ${colorClass} border-current border`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function shakeElement(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('shake');
    void el.offsetWidth;
    el.classList.add('shake');
}

/* --------- Starfield --------- */
function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, stars;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        stars = Array.from({ length: 300 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.5,
            opacity: Math.random(),
            speed: Math.random() * 0.05 + 0.01
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = '#ffffff';
        stars.forEach(s => {
            s.opacity += s.speed;
            if (s.opacity > 1 || s.opacity < 0) s.speed = -s.speed;
            ctx.globalAlpha = Math.abs(s.opacity);
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
}

/* --------- Confetti --------- */
function fireConfetti() {
    const canvas = document.getElementById('confetti');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 100 }, () => ({
        x: canvas.width / 2,
        y: canvas.height / 2 + 100,
        vx: (Math.random() - 0.5) * 20,
        vy: (Math.random() - 1) * 20 - 5,
        color: ['#6ef0ff', '#ffd166', '#ff5ac6', '#4ef0a8', '#ffffff'][Math.floor(Math.random() * 5)],
        size: Math.random() * 8 + 4,
        rot: Math.random() * Math.PI * 2,
        rs: (Math.random() - 0.5) * 0.2
    }));

    let alpha = 1;
    function render() {
        if (alpha <= 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.5;
            p.rot += p.rs;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.globalAlpha = alpha;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });
        alpha -= 0.01;
        requestAnimationFrame(render);
    }
    render();
}
