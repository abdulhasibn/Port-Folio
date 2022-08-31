const parallax = document.getElementById("welcome-section");
const burger = document.getElementById("burger");
const nav = document.getElementById("navlinks");
const navlinks = document.querySelectorAll(".navlinks li");

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  // navlinks.forEach((link, index) => {
  //   if (link.style.animation) {
  //     link.style.animation = "";
  //   } else {
  //     link.style.animation = `navFadeIn .5s ease forwards ${index / 5 + 2}s`;
  //     console.log(index / 5 + 0.5);
  //   }
  // });
});
