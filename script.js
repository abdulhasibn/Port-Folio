const parallax = document.getElementById("welcome-section");
const frontend = document.getElementById("frontend");
const burger = document.getElementById("burger");
const navlinks = document.getElementById("navlinks");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.5 + "px";
  frontend.style.PositionX = offset * 0.5 + "px";
});

burger.addEventListener("click", () => {
  navlinks.classList.toggle("nav-active");
});
