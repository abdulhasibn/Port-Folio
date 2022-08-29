const parallax = document.getElementById("welcome-section");
const frontend = document.getElementById("frontend");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.5 + "px";
  frontend.style.PositionX = offset * 0.5 + "px";
});
