let phoneWidth = window.matchMedia("(max-width:37.5em)");
let tabletWidth = window.matchMedia("(max-width:56.25em)");
let tabletLandscapeWidth = window.matchMedia("(max-width:75em)");
let bigDesktop = window.matchMedia("(max-width:112.5em)");

function mediaQuery() {
  if (phoneWidth.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 5,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (tabletWidth.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 3,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (tabletLandscapeWidth.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 4,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (bigDesktop.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 5,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 5,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

mediaQuery();

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerMenu() {
  let navLinks = document.querySelector("#myLinks");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}
