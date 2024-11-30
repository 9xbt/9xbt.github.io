const navbar = document.querySelector(".navbar");
const urlParams = new URLSearchParams(window.location.search);

run_animation();

function run_animation() {
    if (!urlParams.has('disable_animations')) {
        navbar.classList.add("navbar_with_animation");
    }
}