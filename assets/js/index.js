"use strict";

// Modal Window
const modalTrigger = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal-section");
console.log(modalTrigger);

function closeModal() {
  modal.classList.toggle("show");
  document.body.style.overflow = "";
}

function openModal() {
  modal.classList.toggle("show");
  document.body.style.overflow = "hidden";
  clearInterval(modalTimer);
}

modalTrigger.forEach((item) => {
  item.addEventListener("click", openModal);
});

modal.addEventListener("click", (e) => {
  if (e.target == modal || e.target.getAttribute("data-close") == "") {
    closeModal();
  }
});

const modalTimer = setTimeout(openModal, 5000);

// for Scroll

function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

// Portfolio navbar
