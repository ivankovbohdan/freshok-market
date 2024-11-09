/*======================JQuery======================*/
$(function () {
  const body = $("body"),
    overlay = $(".overlay");

  const counterBtnMinus = $(".counter__btn--minus"),
    counterBtnPlus = $(".counter__btn--plus");

  const catalogBtn = $(".catalog__btn"),
    catalogBtnSide = $(".catalog__btn--side"),
    catalogList = $(".catalog__list"),
    catalogItem = $(".catalog__item"),
    catalogLinks = $(".catalog__link");

  const favBtn = $(".fav-btn--open"),
    fav = $(".favorites"),
    favCloseBtn = $(".favorites__close-btn"),
    favButtons = document.querySelectorAll(".fav-btn");

  const basketBtn = $(".basket-btn--open"),
    basket = $(".basket"),
    basketCloseBtn = $(".basket__close-btn"),
    productButton = $(".product__button");
  basketButtons = document.querySelectorAll(".basket-btn");

  const headerBurger = $(".header__burger"),
    sideMenu = $(".side-menu"),
    sideMenuCloseBtn = $(".side-menu__close-btn");

  const searchBtn = $(".search-btn"),
    headerForm = $(".header__form");

  const filterBtn = $(".filter-btn"),
    catalogFiltersSide = $(".catalog__filters"),
    catalogCloseBtn = $(".catalog__filter-close");

  const contentFilterBtn = $(".content-filter__btn"),
    contentFilterBtnFilters = $(".content-filter__btn--filters"),
    contentFilterBtnGrid = $(".content-filter__btn--grid"),
    contentFilterBtnList = $(".content-filter__btn--list"),
    catalogProdListList = $(".catalog__prod-list--list"),
    catalogProdListGrid = $(".catalog__prod-list--grid");

  const productBtn = $(".product__btn"),
    productBtnDesc = $(".product__btn--desc"),
    productBtnChar = $(".product__btn--char"),
    productBtnReviews = $(".product__btn--reviews"),
    productDesc = $(".product__desc"),
    productChar = $(".product__char"),
    productReviews = $(".product__reviews");

  const heroInner = $(".hero__inner"),
    brandsList = $(".brands__list"),
    productImages = $(".product__images");

  const catalogFilterPrice = $(".catalog-filter__price");

  const ratingStar = $(".rating__star"),
    productRating = $(".product__rating"),
    userRating = $(".user__rating");

  /*OVERLAY*/

  overlay.on("click", function () {
    overlay.hide();
    catalogList.removeClass("catalog__list--active");
    catalogFiltersSide.removeClass("catalog__filters--active");
    catalogBtn.removeClass("catalog__btn--active");
    catalogCloseBtn.removeClass("close-btn");
    fav.removeClass("favorites--active");
    basket.removeClass("basket--active");
    sideMenu.removeClass("side-menu--active");
    body.removeClass("body--fixed");
  });

  /*COUNTER*/

  counterBtnMinus.on("click", function (e) {
    e.preventDefault();
    let $this = $(this);
    let $input = $this.closest("div").find("input");
    let value = parseInt($input.val());

    if (value > 1) {
      value--;
    }

    $input.val(value);
  });

  counterBtnPlus.on("click", function (e) {
    e.preventDefault();
    let $this = $(this);
    let $input = $this.closest("div").find("input");
    let value = parseInt($input.val());
    // let total = $('.product-card__sum').html();

    if (value <= 98) {
      value++;
    }

    $input.val(value);
  });

  /*CATALOG*/

  catalogBtn.on("click", function () {
    catalogBtn.toggleClass("catalog__btn--active");
    catalogList.toggleClass("catalog__list--active");
    body.toggleClass("body--fixed");
    overlay.show();
  });

  catalogBtnSide.on("click", function () {
    catalogBtn.toggleClass("catalog__btn--active");
    catalogList.removeClass("catalog__list--active");
    catalogList.toggleClass("catalog__list--active-side");
    body.toggleClass("body--fixed");
    overlay.show();
  });

  catalogLinks.on("click", function (e) {
    e.preventDefault();
    catalogBtn.removeClass("catalog__btn--active");
    catalogList.removeClass("catalog__list--active");
    catalogLinks.removeClass("catalog__link--active");
    $(this).addClass("catalog__link--active");
  });

  /*$(".catalog__link").on("click", function () {

    $('.catalog__link').removeClass('catalog__link--active');
    $('.catalog__item').removeClass('catalog__item--active');

    $(this).parent().find('.catalog__link').toggleClass('catalog__link--active');
    $(this).parent('.catalog__item').toggleClass('catalog__item--active');

  });*/

  /*FAVORITES*/

  favBtn.on("click", function () {
    fav.addClass("favorites--active");
    body.toggleClass("body--fixed");
    overlay.show();
  });

  favCloseBtn.on("click", function () {
    fav.removeClass("favorites--active");
    body.toggleClass("body--fixed");
    overlay.hide();
  });

  favButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("fav-btn--open")) {
        button.classList.toggle("fav-btn--added");
      }
    });
  });

  /*BASKET*/

  basketBtn.on("click", function () {
    basket.addClass("basket--active");
    body.toggleClass("body--fixed");
    overlay.show();
  });

  basketCloseBtn.on("click", function () {
    basket.removeClass("basket--active");
    body.toggleClass("body--fixed");
    overlay.hide();
  });

  basketButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("basket-btn--open")) {
        button.classList.toggle("basket-btn--added");
      }
    });
  });

  if (productButton.length) {
    productButton.on("click", function () {
      $(this).toggleClass("product__button--added");
    });
  }

  /*SIDE-MENU*/

  headerBurger.on("click", function () {
    sideMenu.addClass("side-menu--active");
    body.toggleClass("body--fixed");
    overlay.show();
  });

  sideMenuCloseBtn.on("click", function () {
    sideMenu.removeClass("side-menu--active");
    body.toggleClass("body--fixed");
    overlay.hide();
  });

  $(".side-menu__link, .catalog__link").on("click", function () {
    sideMenu.removeClass("side-menu--active");
    overlay.hide();
    body.removeClass("body--fixed");
  });

  // /*SEARCH*/

  searchBtn.on("click", function () {
    headerForm.toggleClass("header__form--active");
  });

  /*CATALOG-FILTERS*/

  filterBtn.on("click", function () {
    $(this)
      .parent()
      .find(".catalog-filter__form")
      .toggleClass("catalog-filter__form--active");
    $(this)
      .parent()
      .find(".catalog-filter__list")
      .toggleClass("catalog-filter__list--active");
  });

  /*CATALOG-FILTERS--SIDE*/

  contentFilterBtnFilters.on("click", function () {
    catalogFiltersSide.toggleClass("catalog__filters--active");
    catalogCloseBtn.addClass("close-btn");
    body.toggleClass("body--fixed");
    overlay.show();
  });

  catalogCloseBtn.on("click", function () {
    catalogFiltersSide.removeClass("catalog__filters--active");
    catalogCloseBtn.removeClass("close-btn");
    body.toggleClass("body--fixed");
    overlay.hide();
  });

  /*CONTENT-FILTER-BTNS*/

  contentFilterBtnGrid.on("click", function () {
    contentFilterBtnGrid.addClass("content-filter__btn--active");
    contentFilterBtnList.removeClass("content-filter__btn--active");
    catalogProdListList.removeClass("catalog__prod-list--active");
    catalogProdListGrid.addClass("catalog__prod-list--active");
  });

  contentFilterBtnList.on("click", function () {
    contentFilterBtnList.addClass("content-filter__btn--active");
    contentFilterBtnGrid.removeClass("content-filter__btn--active");
    catalogProdListGrid.removeClass("catalog__prod-list--active");
    catalogProdListList.addClass("catalog__prod-list--active");
  });

  /*PRODUCT-BTNS*/

  productBtn.on("click", function () {
    productBtn.removeClass("product__btn--active");
    $(this).parent().find(".product__btn").toggleClass("product__btn--active");

    productDesc.removeClass("product__desc--active");
    productChar.removeClass("product__char--active");
    productReviews.removeClass("product__reviews--active");
  });

  productBtnDesc.on("click", function () {
    productDesc.addClass("product__desc--active");
  });

  productBtnChar.on("click", function () {
    productChar.addClass("product__char--active");
  });

  productBtnReviews.on("click", function () {
    productReviews.addClass("product__reviews--active");
  });

  /*HERO-INNER*/

  heroInner.slick({
    prevArrow:
      '<button class="hero__inner-slick-prev" type="button"><svg class="slick-prev-img" width="60" height="60" viewBox="0 0 60 60" fill="none">< rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8" /><path d="M21.0382 31.0149L37.0515 45.6079C37.577 46.1307 38.4292 46.1307 38.9546 45.6079C39.4801 45.0851 39.4801 44.2369 38.9546 43.7141L23.9069 30L38.9533 16.2859C39.4788 15.7631 39.4788 14.9148 38.9533 14.3921C38.4278 13.8693 37.5756 13.8693 37.0502 14.3921L21.0369 28.9851C20.7568 29.2638 20.6367 29.6332 20.6554 29.9986C20.638 30.3654 20.7581 30.7348 21.0382 31.0149Z" fill="#505050" /></svg ></button>',
    nextArrow:
      '<button class="hero__inner-slick-next" type="button"><svg class="slick-next-img" width="60" height="60" viewBox="0 0 60 60" fill="none">< rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8" /><path d="M38.9641 28.9851L22.9508 14.3921C22.4254 13.8693 21.5731 13.8693 21.0477 14.3921C20.5222 14.9149 20.5222 15.7631 21.0477 16.2859L36.0954 30L21.049 43.7141C20.5235 44.2369 20.5235 45.0852 21.049 45.6079C21.5745 46.1307 22.4267 46.1307 22.9521 45.6079L38.9654 31.0149C39.2455 30.7362 39.3656 30.3668 39.3469 30.0014C39.3643 29.6346 39.2443 29.2652 38.9641 28.9851Z" fill="#505050"/></svg ></button>',
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  /*BRANDS-LIST*/

  brandsList.slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  /*PRODUCT-IMAGES*/

  productImages.slick({
    prevArrow:
      '<button class="hero__inner-slick-prev" type="button"><svg class="slick-prev-img" width="60" height="60" viewBox="0 0 60 60" fill="none">< rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8" /><path d="M21.0382 31.0149L37.0515 45.6079C37.577 46.1307 38.4292 46.1307 38.9546 45.6079C39.4801 45.0851 39.4801 44.2369 38.9546 43.7141L23.9069 30L38.9533 16.2859C39.4788 15.7631 39.4788 14.9148 38.9533 14.3921C38.4278 13.8693 37.5756 13.8693 37.0502 14.3921L21.0369 28.9851C20.7568 29.2638 20.6367 29.6332 20.6554 29.9986C20.638 30.3654 20.7581 30.7348 21.0382 31.0149Z" fill="#505050" /></svg ></button>',
    nextArrow:
      '<button class="hero__inner-slick-next" type="button"><svg class="slick-next-img" width="60" height="60" viewBox="0 0 60 60" fill="none">< rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8" /><path d="M38.9641 28.9851L22.9508 14.3921C22.4254 13.8693 21.5731 13.8693 21.0477 14.3921C20.5222 14.9149 20.5222 15.7631 21.0477 16.2859L36.0954 30L21.049 43.7141C20.5235 44.2369 20.5235 45.0852 21.049 45.6079C21.5745 46.1307 22.4267 46.1307 22.9521 45.6079L38.9654 31.0149C39.2455 30.7362 39.3656 30.3668 39.3469 30.0014C39.3643 29.6346 39.2443 29.2652 38.9641 28.9851Z" fill="#505050"/></svg ></button>',
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  /*CATALOG-FILTER-PRICE*/

  catalogFilterPrice.ionRangeSlider({
    type: "double",
    postfix: "₽",
    onStart: function (data) {
      $(".catalog-filter__from").text(data.from);
      $(".catalog-filter__to").text(data.to);
    },
    onChange: function (data) {
      $(".catalog-filter__from").text(data.from);
      $(".catalog-filter__to").text(data.to);
    },
  });

  /*MIXERS-CONFIG*/

  var config = {
    controls: {
      scope: "local",
    },
  };

  /*BEST-PRODUCTS-MIXER*/

  let mixer = mixitup(".best-products", config);

  /*DISCOUNTS-MIXER*/

  let mixer2 = mixitup(".discounts", config);

  /*RATING-STAR*/

  ratingStar.rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    numStars: 1,
  });

  /*PRODUCT-RATING*/

  productRating.rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    numStars: 5,
  });

  /*USER-RATING*/

  userRating.rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    numStars: 5,
  });
});

/*======================JS======================*/
/*=================some solutions===========================*/

// const body = document.querySelector('body'),
//       overlay = document.querySelector('.overlay');

// const catalogBtn = document.querySelector('.catalog__btn'),
//       catalogList = document.querySelector('.catalog__list'),
//       catalogLinks = document.querySelectorAll('.catalog__link');

// const catalogBtnSide = document.querySelector('.catalog__btn--side'),
//       catalogListSide = document.querySelector('.catalog__list--side');

// const basket = document.querySelector('.basket'),
//       basketBtn = document.querySelector('.basket-btn'),
//       basketCloseBtn = document.querySelector('.basket__close-btn');

// const headerBurger = document.querySelector('.header__burger'),
//       sideMenu = document.querySelector('.side-menu'),
//       sideMenuCloseBtn = document.querySelector('.side-menu__close-btn');

// const searchBtn = document.querySelector('.search-btn'),
//       headerForm = document.querySelector('.header__form');

// const counterBtnIcon = document.querySelectorAll('.counter__btn-icon');

// /*OVERLAY*/

// function overlayShow() {
//   overlay.style.display = "block";
// }

// function overlayHide() {
//   overlay.style.display = "none";
// }

// overlay.addEventListener('click', function () {
//   body.classList.remove('body--fixed');
//   catalogBtn.classList.remove('catalog__btn--active');
//   catalogList.classList.remove('catalog__list--active');
//   basket.classList.remove('basket--active');
//   sideMenu.classList.remove('side-menu--active');
//   catalogBtnSide.classList.remove('catalog__btn--active');
//   catalogListSide.classList.remove('catalog__list--active');
//   overlayHide();
// });

// /*CATALOG*/

// catalogBtn.addEventListener('click', function () {
//   catalogBtn.classList.toggle('catalog__btn--active');
//   catalogList.classList.toggle('catalog__list--active');
//   body.classList.toggle('body--fixed');
//   overlayShow();
// });

// catalogList.addEventListener('click', function (event) {

//   let current = document.getElementsByClassName('catalog__link--active');

//   if (current.length > 0) {
//     for (const catalogLink of catalogLinks) {
//       catalogLink.classList.remove('catalog__link--active');
//     }
//   }

//   if (event.target.closest('.catalog__link')) {
//     event.target.classList.toggle('catalog__link--active');
//   }

// });

// /*BASKET*/

// basketBtn.addEventListener('click', function () {
//   basket.classList.add('basket--active');
//   body.classList.toggle('body--fixed');
//   overlayShow();
// });

// basketCloseBtn.addEventListener('click', function () {
//   basket.classList.remove('basket--active');
//   body.classList.toggle('body--fixed');
//   overlayHide();
// });

// /*SIDE-MENU*/

// headerBurger.addEventListener('click', function () {
//   sideMenu.classList.add('side-menu--active');
//   body.classList.toggle('body--fixed');
//   overlayShow();
// });

// sideMenuCloseBtn.addEventListener('click', function () {
//   sideMenu.classList.remove('side-menu--active');
//   body.classList.toggle('body--fixed');
//   overlayHide();
// });

// /*CATALOG-SIDE*/

// catalogBtnSide.addEventListener('click', function () {
//   catalogBtnSide.classList.toggle('catalog__btn--active');
//   catalogListSide.classList.toggle('catalog__list--active-side');
//   body.classList.toggle('body--fixed');
//   overlayShow();
// });

// catalogListSide.addEventListener('click', function (event) {

//   let current = document.getElementsByClassName('catalog__link--active');

//   if (current.length > 0) {
//     for (const catalogLink of catalogLinks) {
//       catalogLink.classList.remove('catalog__link--active');
//     }
//   }

//   if (event.target.closest('.catalog__link')) {
//     event.target.classList.toggle('catalog__link--active');
//   }

// });

// /*SEARCH*/

// searchBtn.addEventListener('click', function () {
//   headerForm.classList.toggle('header__form--active');
// });

// /*COUNTER*/

// window.addEventListener('click', function(event) {

//   if (event.target.classList.contains('counter__btn--plus')) {

//     let counter = event.target.closest('.counter'),
//           counterValue = counter.querySelector('.counter__value').value,
//           value = parseInt(counterValue);

//     if (value <= 98) {
//      value++;
//     }

//     counter.querySelector('.counter__value').value = value;
//   }

//   if (event.target.classList.contains('counter__btn--minus')) {

//       let counter = event.target.closest('.counter'),
//           counterValue = counter.querySelector('.counter__value').value,
//           value = parseInt(counterValue);

//       if (value > 1) {
//         value--;
//       }

//       counter.querySelector('.counter__value').value = value;
//   }
// })

// //Make the icon inactive

// counterBtnIcon.forEach(counterBtnIcon => {
//   counterBtnIcon.style.pointerEvents = 'none';
// });

// /*COUNTER FOR ONE*/

// /*const counterBtnPlus = document.querySelector(".counter__btn--plus"),
//       counterBtnMinus = document.querySelector(".counter__btn--minus"),
//       counterValue = document.querySelector(".counter__value"),
//       total = document.querySelector(".product-card__sum");

// let price = document.querySelector(".prices__item").textContent,
//     currencу = document.querySelector(".currency");

// counterBtnPlus.addEventListener('click', function (e) {

//   e.preventDefault();
//   let $this = $(this);

//   let counterValue = $this.closest('div').find('input');
//   let value = parseInt(counterValue.val());

//   if (value <= 98) {
//     value++;
//     total.textContent = value * parseInt(price) + currencу.textContent;
//   }

//   counterValue.val(value);
// });

// counterBtnMinus.addEventListener('click', function (e) {

//   e.preventDefault();

//   let $this = $(this);
//   let counterValue = $this.closest('div').find('input');
//   let value = parseInt(counterValue.val());

//   if (value > 1) {
//     value--;
//     total.innerHTML = value * parseInt(price) + currencу.textContent;
//   }

//   counterValue.val(value);
// });*/
