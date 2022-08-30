const header = document.querySelector(".header");
const header__btn = document.querySelector(".header__btn");

header__btn.addEventListener("click", function () {
    header.classList.toggle("site-nav-on");
})