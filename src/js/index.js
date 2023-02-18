function initPresentaionsSlider(className, reverseDirectionState) {
  new Swiper(className, {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: reverseDirectionState,
    },
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    speed: 5000,
    centeredSlides: true,
    grabCursor: true,
  });
}

function blurMainHeadingOnHover() {
  $('.presentations-slider--2').hover(() => {
    $('.main__text').fadeOut(700);
  }, () => {
    $('.main__text').fadeIn(700);
  })
}

initPresentaionsSlider(".presentations-slider--1", false);
initPresentaionsSlider(".presentations-slider--2", true);
blurMainHeadingOnHover();