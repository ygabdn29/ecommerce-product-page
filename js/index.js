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
const lightboxClose = document.querySelector(".product-page__lightbox-close");
const mobileNextBtn = document.querySelector(".product-page__next");
const qtyInput = document.querySelector(".product-page__product-qty");
const numberForm = document.querySelector(".product-page__qty-input");
const minusBtn = document.querySelector(".product-page__qty-count--min");
const addBtn = document.querySelector(".product-page__qty-count--add");
const min = parseInt(qtyInput.getAttribute("min"));
const qtyForm = document.querySelector(".product-page__form");
const cartContent = document.querySelector(".header__cart-content");
const emptyCartText = document.querySelector(".header__text-cart-empty");
const productQtyText = document.querySelector(".header__cart-item-quantity");
const productTotalPrice = document.querySelector(
  ".header__cart-item-total-price"
);
const productItemContainer = document.querySelector(".header__cart-item");
const totalQtyContainer = document.querySelector(".header__cart-total-item");
const totalQtyText = document.querySelector(".header__cart-total-item-text");
const deleteItemBtn = document.querySelector(".header__cart-item-delete-btn");

function changeActiveImages(lightbox = false, e) {
  if (lightbox) {
    lightboxImages.forEach((i) =>
      i.classList.remove("product-page__lightbox-gallery-image--active")
    );
    lightboxImagesContainer.forEach((imageContainer) =>
      imageContainer.classList.remove("product-page__lightbox-image--active")
    );

    e.target.parentElement.classList.add(
      "product-page__lightbox-image--active"
    );
    e.target.classList.toggle("product-page__lightbox-gallery-image--active");
  } else {
    galleryImages.forEach((i) =>
      i.classList.remove("product-page__gallery-image--active")
    );

    galleryImagesContainer.forEach((imageContainer) =>
      imageContainer.classList.remove("product-page__image--active")
    );

    e.target.parentElement.classList.add("product-page__image--active");
    e.target.classList.toggle("product-page__gallery-image--active");
  }
}

function toggleMobileNav() {
  mobileMenu.classList.toggle("header__navigation--active");
  pageOverlay.classList.toggle("overlay--active");
}

mobileNavOpen.addEventListener("click", function () {
  toggleMobileNav();
  mobileNavClose.classList.remove("header__menu-close--hidden");
});

mobileNavClose.addEventListener("click", function () {
  toggleMobileNav();
  mobileNavClose.classList.add("header__menu-close--hidden");
});

cartOpen.addEventListener("click", function () {
  cartDetail.classList.toggle("header__cart-detail--hidden");
});

imageGallery.addEventListener("click", function (e) {
  bigImage.src = `./images/image-product-${e.target.getAttribute(
    "data-number"
  )}.jpg`;

  changeActiveImages(false, e);
});

bigImage.addEventListener("click", function () {
  lightbox.classList.add("product-page__lightbox--active");
  pageOverlay.classList.toggle("overlay--active");
});

lightboxClose.addEventListener("click", function () {
  lightbox.classList.remove("product-page__lightbox--active");
  pageOverlay.classList.toggle("overlay--active");
});

lightboxImageGallery.addEventListener("click", function (e) {
  lightboxBigImage.src = `./images/image-product-${e.target.getAttribute(
    "data-number"
  )}.jpg`;

  changeActiveImages(true, e);
});

mobileNextBtn.addEventListener("click", function () {
  lightbox.classList.add("product-page__lightbox--active");
});

qtyInput.addEventListener("change", function () {});

numberForm.addEventListener("click", function (e) {
  if (!e.target.classList.contains("product-page__qty-count")) return;
  const operator = e.target.getAttribute("data-action");
  let inputQty = parseInt(qtyInput.value);

  if (operator === "add") {
    inputQty += 1;
  }

  if (operator === "min") {
    inputQty = inputQty <= min ? min : (inputQty -= 1);

    if (inputQty == min) {
      minusBtn.disabled = true;
    }
  }

  qtyInput.value = inputQty;
});

qtyForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const productQty = Object.fromEntries(new FormData(e.target));

  emptyCartText.classList.add("header__text-cart-empty--hidden");
  productItemContainer.classList.remove("header__cart-item--hidden");
  productQtyText.innerHTML = productQty["product-qty"];
  productTotalPrice.innerHTML = `$${productQty["product-qty"] * 125}.00`;

  totalQtyText.innerHTML = productQty["product-qty"];
  totalQtyContainer.classList.remove("header__cart-total-item--hidden");
});

deleteItemBtn.addEventListener("click", function () {
  emptyCartText.classList.remove("header__text-cart-empty--hidden");
  productItemContainer.classList.add("header__cart-item--hidden");
  productQtyText.innerHTML = "";
  productTotalPrice.innerHTML = "";

  totalQtyText.innerHTML = "";
  totalQtyContainer.classList.add("header__cart-total-item--hidden");
});
