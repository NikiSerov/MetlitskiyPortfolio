"use strict";function initPresentaionsSlider(e,n){new Swiper(e,{autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:n},slidesPerView:"auto",spaceBetween:40,loop:!0,speed:5e3,centeredSlides:!0,grabCursor:!0})}function blurMainHeadingOnHover(){$(".presentations-slider--2").hover((function(){$(".main__text").fadeOut(700)}),(function(){$(".main__text").fadeIn(700)}))}initPresentaionsSlider(".presentations-slider--1",!1),initPresentaionsSlider(".presentations-slider--2",!0),blurMainHeadingOnHover();