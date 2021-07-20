
const swiper = new Swiper('.autors-slider',{
    loop: false,
    speed: 2400,
    slidesPerView: 1,
    spaceBetween: 30,
    watchOverflow: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
       // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    860: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    // when window width is >= 1140px
    1140: {
      slidesPerView: 4,
      spaceBetween: 30,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
    }
  }
});