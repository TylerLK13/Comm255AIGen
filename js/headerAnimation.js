document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    document.addEventListener("mousemove", function (e) {
        const xOffset = (e.clientX / window.innerWidth) * 100;
        const yOffset = (e.clientY / window.innerHeight) * 100;
        header.style.backgroundPosition = `${xOffset}% ${yOffset}%`;
    });
});