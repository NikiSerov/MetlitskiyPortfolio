const scrolledYInPX = 500;

function initPresentaionsSlider(className, reverseDirectionState) {
  new Swiper(className, {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: reverseDirectionState,
    },
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    speed: 5000,
    centeredSlides: true,
    grabCursor: true,
  });
}

function blurMainHeadingOnHover() {
  $('.presentations-slider--2').hover(() => {
    $('.main__text').fadeOut(500);
    $('.presentations-slider--1').addClass('blur');
  }, () => {
    $('.main__text').fadeIn(500);
    $('.presentations-slider--1').removeClass('blur');
  })
}

function showToTopBtn() {
  if (window.scrollY >= scrolledYInPX) {
    $('.scroll-top-button').classList.add('show');
  } else {
    $('.scroll-top-button').classList.remove('show');
  }
}

function initHeaderHoverAnimation() {
  setTimeout(() => {
    $('.header').addClass('hoverAnimation');
  }, 1250)
}

$('.scroll-top-button').click((e) => { 
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

initPresentaionsSlider('.presentations-slider--1', false);
initPresentaionsSlider('.presentations-slider--2', true);
initHeaderHoverAnimation();
blurMainHeadingOnHover();
showToTopBtn();
