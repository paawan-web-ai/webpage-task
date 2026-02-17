const menuBtn = document.querySelector(".menu");
const mobileMenu = document.querySelector(".nav-options-nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("opened");
  mobileMenu.classList.toggle("show");
});
