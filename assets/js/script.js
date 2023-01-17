"use strict";

// Modal Window
const modalTrigger = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal-section");

function closeModal() {
  modal.classList.toggle("show");
  document.body.style.overflow = "";
}

function openModal() {
  modal.classList.toggle("show");
  document.body.style.overflow = "hidden";
}

modalTrigger.forEach((item) => {
  item.addEventListener("click", openModal);
});

modal.addEventListener("click", (e) => {
  if (e.target == modal || e.target.getAttribute("data-close") == "") {
    closeModal();
  }
});

// Portfolio navbar

const navParent = document.querySelector(".portfolio__items"),
  navItem = document.querySelectorAll(".portfolio__item"),
  navContent = document.querySelectorAll(".portfolio-cards_parent");
console.log(navContent);
function hideNavContent() {
  navContent.forEach((item) => {
    item.classList.add("hide");
    item.classList.remove("show");
  });
  navItem.forEach((item) => {
    item.classList.remove("portfolio__active");
  });
}

function showNavContent(i = 0) {
  navContent[i].classList.add("show", "fade");
  navContent[i].classList.remove("hide");
  navItem[i].classList.add("portfolio__active");
}

hideNavContent();
showNavContent();

navParent.addEventListener("click", () => {
  const target = event.target;
  if (target && target.classList.contains("portfolio__item")) {
    navItem.forEach((item, idx) => {
      if (target === item) {
        hideNavContent();
        showNavContent(idx);
      }
    });
  }
});

// Carousel
var splide = new Splide( '.splide', {
  perPage: 1,
  rewind : true,
} );

splide.mount(); 
