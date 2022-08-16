// Product swiper
var swiper = new Swiper(".products-swipper", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Burger menu

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".nav-sites");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("active");
});

document.querySelectorAll(".nav-sites").forEach((link) =>
  link.addEventListener("click", () => {
    menuBtn.classList.toggle("remove");
    navbar.classList.toggle("remove");
  })
);
