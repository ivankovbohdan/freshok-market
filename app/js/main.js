$(function () {

  $(".header__catalog-btn").on("click", function () {

    $('.header__catalog-btn').toggleClass('header__catalog-btn--active');
    $('.header__catalog-list').toggleClass('header__catalog-list--active');

  });

  $(".catalog-menu__link").on("click", function () {

    $('.header__catalog-link').toggleClass('header__catalog-link--active');
    $('.header__catalog-item').toggleClass('header__catalog-item--active');

  });

  $('.top__inner').slick({
    prevArrow: '<button class="top__inner-slick-prev" type="button"><img class="slick-prev-img" src="images/icons/arrow-left.svg" alt="Іконка стрілочки вліво"</button>',
    nextArrow: '<button class="top__inner-slick-next" type="button"><img class="slick-next-img" src="images/icons/arrow-right.svg" alt="Іконка стрілочки вправо"</button>'
  })

})