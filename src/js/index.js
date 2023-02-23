const scrollTopBtnInitYInPX = 300;

const initPresentaionsSlider = (className, reverseDirectionState) => {
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
    allowTouchMove: false,
  });
};

const blurMainHeadingOnHover = () => {
  $('.presentations-slider--reverse').hover(() => {
    $('.main__text').fadeOut(400);
    $('.presentations-slider--forward').addClass('blur');
  }, () => {
    $('.main__text').fadeIn(400);
    $('.presentations-slider--forward').removeClass('blur');
  })
};

const initHeaderHoverAnimation = () => {
  setTimeout(() => {
    $('.header').addClass('hoverAnimation');
  }, 1250)
};

$(window).scroll(() => {
  if (window.scrollY > 100) {
    $('header').addClass('flatten');
  } else {
    $('header').removeClass('flatten');
  }
});

$(window).scroll(() => {
  if (window.scrollY >= scrollTopBtnInitYInPX) {
    $('.scroll-top-button').addClass('show');
  } else {
    $('.scroll-top-button').removeClass('show');
  }
});

$('.scroll-top-button').click((e) => { 
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

initPresentaionsSlider('.presentations-slider--forward', false);
initPresentaionsSlider('.presentations-slider--reverse', true);
initHeaderHoverAnimation();
blurMainHeadingOnHover();