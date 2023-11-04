"use strict";

const mobileNavOpen = document.querySelector(".header__menu-toggle");
const mobileNavClose = document.querySelector(".header__menu-close");
const mobileMenu = document.querySelector(".header__navigation");
const pageOverlay = document.querySelector(".overlay");
const cartOpen = document.querySelector(".header__cart-icon");
const cartDetail = document.querySelector(".header__cart-detail");
const bigImage = document.querySelector(".product-page__product-image");
const imageGallery = document.querySelector(".product-page__image-gallery");
const galleryImages = document.querySelectorAll(".product-page__gallery-image");
const galleryImagesContainer = document.querySelectorAll(
  ".product-page__image"
);
const lightbox = document.querySelector(".product-page__lightbox");
const lightboxBigImage = document.querySelector(
  ".product-page__lightbox-product-image"
);

const lightboxImageGallery = document.querySelector(
  ".product-page__lightbox-image-gallery"
);
const lightboxImagesContainer = document.querySelectorAll(
  ".product-page__lightbox-image"
);
const lightboxImages = document.querySelectorAll(
  ".product-page__lightbox-gallery-image"
);
const mobileNextBtn = document.querySelector(".product-page__next");

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

imageGallery.addEventListener("click", function (e) {
  bigImage.src = `./images/image-product-${e.target.getAttribute(
    "data-number"
  )}.jpg`;

  galleryImages.forEach((i) =>
    i.classList.remove("product-page__gallery-image--active")
  );

  galleryImagesContainer.forEach((imageContainer) =>
    imageContainer.classList.remove("product-page__image--active")
  );

  e.target.parentElement.classList.add("product-page__image--active");
  e.target.classList.toggle("product-page__gallery-image--active");
});

bigImage.addEventListener("click", function () {
  lightbox.classList.add("product-page__lightbox--active");
  pageOverlay.classList.toggle("overlay--active");
});

lightboxImageGallery.addEventListener("click", function (e) {
  lightboxBigImage.src = `./images/image-product-${e.target.getAttribute(
    "data-number"
  )}.jpg`;

  lightboxImages.forEach((i) =>
    i.classList.remove("product-page__lightbox-gallery-image--active")
  );
  lightboxImagesContainer.forEach((imageContainer) =>
    imageContainer.classList.remove("product-page__lightbox-image--active")
  );

  e.target.parentElement.classList.add("product-page__lightbox-image--active");
  e.target.classList.toggle("product-page__lightbox-gallery-image--active");
});

mobileNextBtn.addEventListener("click", function () {
  lightbox.classList.add("product-page__lightbox--active");
});
