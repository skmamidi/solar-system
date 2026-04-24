(function () {
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }

    function resetPageTop() {
        window.requestAnimationFrame(function () {
            window.scrollTo(0, 0);
        });
    }

    window.addEventListener('pageshow', resetPageTop);
    window.addEventListener('load', resetPageTop);
})();
