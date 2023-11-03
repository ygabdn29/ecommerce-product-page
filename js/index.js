"use strict";

const mobileNavOpen = document.querySelector(".header__menu-toggle");
const mobileNavClose = document.querySelector(".header__menu-close");
const mobileMenu = document.querySelector(".header__navigation");
const pageOverlay = document.querySelector(".overlay");
const cartOpen = document.querySelector(".header__cart-icon");
const cartDetail = document.querySelector(".header__cart-detail");

mobileNavOpen.addEventListener("click", function () {
  mobileMenu.classList.toggle("header__navigation--active");
  pageOverlay.classList.toggle("overlay--active");
  mobileNavClose.classList.remove("header__menu-close--hidden");
});

mobileNavClose.addEventListener("click", function () {
  mobileMenu.classList.toggle("header__navigation--active");
  pageOverlay.classList.toggle("overlay--active");
  mobileNavClose.classList.add("header__menu-close--hidden");
});

cartOpen.addEventListener("click", function () {
  cartDetail.classList.toggle("header__cart-detail--hidden");
});
