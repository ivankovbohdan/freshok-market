$(function () {

  $(".header__catalog-btn").on("click", function () {

    $('.header__catalog-btn').toggleClass('header__catalog-btn--active');
    $('.header__catalog-list').toggleClass('header__catalog-list--active');

  });

  $(".catalog-menu__link").on("click", function () {

    $('.header__catalog-link').toggleClass('header__catalog-link--active');
    $('.header__catalog-item').toggleClass('header__catalog-item--active');

  });

})