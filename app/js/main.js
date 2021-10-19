$(function() {

  $('.burger__button, .burger-close').on('click', function() {
    $('.menu-aside__bg').toggleClass('menu--active');
  });

  const swiper = new Swiper('.team__inner', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    },

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    }
  });

  const swiper1 = new Swiper('.reviews__inner', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },
  
    // If we need pagination
    pagination: {
      el: '.reviews__pagination',
      type: 'fraction',
    }
  });

  
});
