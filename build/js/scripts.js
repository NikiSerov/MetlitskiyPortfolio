"use strict";var scrolledYInPX=500;function initPresentaionsSlider(e,n){new Swiper(e,{autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:n},slidesPerView:"auto",spaceBetween:40,loop:!0,speed:5e3,centeredSlides:!0,grabCursor:!0})}function blurMainHeadingOnHover(){$(".presentations-slider--2").hover((function(){$(".main__text").fadeOut(500),$(".presentations-slider--1").addClass("blur")}),(function(){$(".main__text").fadeIn(500),$(".presentations-slider--1").removeClass("blur")}))}function showToTopBtn(){window.scrollY>=scrolledYInPX?$(".scroll-top-button").classList.add("show"):$(".scroll-top-button").classList.remove("show")}function initHeaderHoverAnimation(){setTimeout((function(){$(".header").addClass("hoverAnimation")}),1250)}$(".scroll-top-button").click((function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),initPresentaionsSlider(".presentations-slider--1",!1),initPresentaionsSlider(".presentations-slider--2",!0),initHeaderHoverAnimation(),blurMainHeadingOnHover(),showToTopBtn();