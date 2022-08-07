let screenWidth = window.matchMedia("(max-width:700px)");

function mediaQuery(screenWidth) {
  if (screenWidth.matches) {
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

mediaQuery(screenWidth);
// screenWidth.addEventListener("change");
