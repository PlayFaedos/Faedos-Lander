(function () {
    // must match measurements #page-wrapper
    const BASE_WIDTH = 1000;
    const BASE_HEIGHT = 1000;

    const wrapper = document.getElementById('page-wrapper');

    function scalePage() {
        const windowWidth  = window.innerWidth;
        const windowHeight = window.innerHeight;

        const scaleX = windowWidth  / BASE_WIDTH;
        const scaleY = windowHeight / BASE_HEIGHT;
        const scale  = Math.min(scaleX, scaleY);

        wrapper.style.transform = `scale(${scale})`;

        const scaledWidth  = BASE_WIDTH  * scale;
        const scaledHeight = BASE_HEIGHT * scale;

        wrapper.style.left = `${(windowWidth  - scaledWidth)  / 2}px`;
        wrapper.style.top  = `${(windowHeight - scaledHeight) / 2}px`;
        wrapper.style.position = 'absolute';
    }

    scalePage();

    window.addEventListener('resize', scalePage);
})();