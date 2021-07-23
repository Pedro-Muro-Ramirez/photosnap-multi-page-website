const hamburger = document.querySelector(".navbar-toggle");
const navMenu = document.querySelector(".navbar-menu");
const navLink = document.querySelectorAll(".navbar-links");
const toggler = document.querySelector(".toggle-btn");
const basicPrice = document.querySelector(".basic-cost");
const proPrice = document.querySelector(".pro-cost");
const businessPrice = document.querySelector(".business-cost");
const frequency1 = document.querySelector(".cost-frequency1");
const frequency2 = document.querySelector(".cost-frequency2");
const frequency3 = document.querySelector(".cost-frequency3");

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

toggler.addEventListener("click", () => {
  if (toggler.checked) {
    basicPrice.innerHTML = "$190.00";
    proPrice.innerHTML = "$390.00";
    businessPrice.innerHTML = "$990.00";
    frequency1.innerHTML = "per year";
    frequency2.innerHTML = "per year";
    frequency3.innerHTML = "per year";
  } else {
    basicPrice.innerHTML = "$19.00";
    proPrice.innerHTML = "$39.00";
    businessPrice.innerHTML = "$99.00";
    frequency1.innerHTML = "per month";
    frequency2.innerHTML = "per month";
    frequency3.innerHTML = "per month";
  }
});
