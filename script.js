const parallax = document.getElementById("welcome-section");
const burger = document.getElementById("burger");
const navlinks = document.getElementById("navlinks");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

burger.addEventListener("click", () => {
  navlinks.classList.toggle("nav-active");
});
