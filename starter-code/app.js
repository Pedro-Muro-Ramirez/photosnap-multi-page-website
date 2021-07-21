const hamburger = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".navbar-menu");
const navLink = document.querySelectorAll(".navbar-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
