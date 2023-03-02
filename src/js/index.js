const scrollTopBtnInitYInPX = 300;
let zSpacing = -2000,
    lastPos = zSpacing / 5,
    zValues = [];


$(window).scroll(() => {
  console.log($(window).scrollTop());
  let top = $(document).scrollTop();
  let delta = lastPos - top;
  lastPos = top;
  $('.frame').each((i, frame) => {
    zValues.push((i * zSpacing) + zSpacing);
    zValues[i] += delta * (-5);
    let transform = `translateZ(${zValues[i]}px)`;
    let opacity = (zValues[i] < (Math.abs(zSpacing) / 7) ? 1 : 0); 
    $(frame).css({'transform': transform, 'opacity': opacity});
  });
});

// var currentScroll = 0;
// var previousScroll = 0;

// $(window).bind('scroll', function(){
//     currentScroll = $(window).scrollTop();
//     if (($(window).scrollTop() > 60) && ($(window).scrollTop() < 390) && currentScroll > previousScroll) {
//         window.scrollTo(0, 390);
//     }
//     previousScroll = $(window).scrollTop();
// });

window.scrollTo(0, 1);

$('.transition-link').each((i, a) => {
  const linkLocation = $(a).attr('href');;
  $(a).click((e) => {
    e.preventDefault();
    $('body').fadeOut(300);
    setTimeout(() => {
      window.location = linkLocation;
    }, 300)
  })
});

const initPresentaionsSlider = (className, reverseDirectionState) => {
  new Swiper(className, {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: reverseDirectionState,
    },
    slidesPerView: 'auto',
    spaceBetween: 45,
    loop: true,
    speed: 3500,
    centeredSlides: true,
    allowTouchMove: false,
  });
};

const blurMainHeadingOnHover = () => {
  $('.presentations-slider--reverse').hover(() => {
    $('.main-section__text').fadeOut(400);
    $('.presentations-slider--forward').addClass('blur');
  }, () => {
    $('.main-section__text').fadeIn(400);
    $('.presentations-slider--forward').removeClass('blur');
  })
};

const initHeaderHoverAnimation = () => {
  setTimeout(() => {
    $('.header').addClass('hoverAnimation');
  }, 1750)
};

$('.contact-form__input').focusin((e) => {
  $(e.target).parent().addClass('focus');
});

$('.contact-form__input').focusout((e) => {
  $(e.target).parent().removeClass('focus');
});

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