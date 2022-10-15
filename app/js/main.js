$(function () {

  

  $(".catalog__filter-btn").on("click", function () {
    $('.catalog__filters-side').toggleClass('catalog__filters-side--active');
    body.classList.toggle('body--fixed');
    overlayShow();
  });


  $(".catalog__close-btn").on("click", function () {
    $('.catalog__filters-side').removeClass('catalog__filters-side--active');
    body.classList.toggle('body--fixed');
    overlayHide();
  });

  

  $(".product__btn").on("click", function () {

    $('.product__btn').removeClass('product__btn--active');
    $(this).parent().find('.product__btn').toggleClass('product__btn--active');

    $('.product__desc').removeClass('product__desc--active');
    $('.product__char').removeClass('product__char--active');
    $('.product__reviews').removeClass('product__reviews--active');

  });

  $(".product__btn--desc").on("click", function () {

    $('.product__desc').addClass('product__desc--active');

  });

  $(".product__btn--char").on("click", function () {

    $('.product__char').addClass('product__char--active');

  });

  $(".product__btn--reviews").on("click", function () {

    $('.product__reviews').addClass('product__reviews--active');

  });


  $(".content-filter__btn--grid").on("click", function () {

    $('.catalog__prod-list--list').removeClass('catalog__prod-list--active');
    $('.catalog__prod-list--grid').addClass('catalog__prod-list--active');

  });

  $(".content-filter__btn--list").on("click", function () {

    $('.catalog__prod-list--grid').removeClass('catalog__prod-list--active');
    $('.catalog__prod-list--list').addClass('catalog__prod-list--active');

  });

  $(".filter__btn").on("click", function () {

    $(this).parent().find('.filter__form').toggleClass('filter__form--active');
    $(this).parent().find('.filter__list').toggleClass('filter__list--active');

  });

  /*$(".catalog__btn").on("click", function () {

    $('.catalog__btn').toggleClass('catalog__btn--active');
    $('.catalog__list').toggleClass('catalog__list--active');

  });*/

  // $(".catalog__link").on("click", function () {

  //   $('.catalog__link').removeClass('catalog__link--active');
  //   $('.catalog__item').removeClass('catalog__item--active');

  //   $(this).parent().find('.catalog__link').toggleClass('catalog__link--active');
  //   $(this).parent('.catalog__item').toggleClass('catalog__item--active');

  // });

  $('.hero__inner').slick({
    prevArrow: '<button class="hero__inner-slick-prev" type="button"><svg class="slick-prev-img" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">< rect width="60" height="60" rx="6" fill="white" fill- opacity="0.8" /><path d="M21.0382 31.0149L37.0515 45.6079C37.577 46.1307 38.4292 46.1307 38.9546 45.6079C39.4801 45.0851 39.4801 44.2369 38.9546 43.7141L23.9069 30L38.9533 16.2859C39.4788 15.7631 39.4788 14.9148 38.9533 14.3921C38.4278 13.8693 37.5756 13.8693 37.0502 14.3921L21.0369 28.9851C20.7568 29.2638 20.6367 29.6332 20.6554 29.9986C20.638 30.3654 20.7581 30.7348 21.0382 31.0149Z" fill="#505050" /></svg ></button>',
    nextArrow: '<button class="hero__inner-slick-next" type="button"><svg class="slick-next-img" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">< rect width="60" height="60" rx="6" fill="white" fill- opacity="0.8" /><path d="M38.9641 28.9851L22.9508 14.3921C22.4254 13.8693 21.5731 13.8693 21.0477 14.3921C20.5222 14.9149 20.5222 15.7631 21.0477 16.2859L36.0954 30L21.049 43.7141C20.5235 44.2369 20.5235 45.0852 21.049 45.6079C21.5745 46.1307 22.4267 46.1307 22.9521 45.6079L38.9654 31.0149C39.2455 30.7362 39.3656 30.3668 39.3469 30.0014C39.3643 29.6346 39.2443 29.2652 38.9641 28.9851Z" fill="#505050"/></svg ></button>',
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.brands__list').slick({
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
        }
      }
    ]
  })


  $('.product__images').slick({
    prevArrow: '<button class="product__images-slick-prev" type="button"><svg class="product-prev-img" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">< rect width="60" height="60" rx="6" fill="white" fill- opacity="0.8" /></svg ></button>',
    nextArrow: '<button class="product__images-slick-next" type="button"><svg class="product-next-img width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8"/></svg> </button>',
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  })

  

  var config = {
    controls: {
      scope: 'local'
    }
  };

  let mixer = mixitup('.best-products', config);
  let mixer2 = mixitup('.discounts', config);

  $('.counter__btn--minus').on('click', function (e) {
    e.preventDefault();
    let $this = $(this);
    let $input = $this.closest('div').find('input');
    let value = parseInt($input.val());

    if (value > 1) {
      value--;
    }

    $input.val(value);
  });

  $('.counter__btn--plus').on('click', function (e) {
    e.preventDefault();
    let $this = $(this);
    let $input = $this.closest('div').find('input');
    let value = parseInt($input.val());
    // let total = $('.product-card__sum').html();
    
    if (value <= 98) {
      value++;
    }

    $input.val(value);
  });

  $(".filter__form-price").ionRangeSlider({
    type: "double",
    postfix: "₽",
    onStart: function (data) {
      $('.filter__form-from').text(data.from);
      $('.filter__form-to').text(data.to);
    },
    onChange: function (data) {
      $('.filter__form-from').text(data.from);
      $('.filter__form-to').text(data.to);
    },
  });

  $('.rating__star').rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    numStars: 1
  });

  $('.product__rating').rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    numStars: 5
  });

  $('.user__rating').rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#FFB800",
    numStars: 5
  });

});

/* JS */

overlay = document.querySelector('.overlay');

function overlayShow() {
  document.querySelector('.overlay').style.display = "block";
}

function overlayHide() {
  document.querySelector('.overlay').style.display = "none";
}

/*SEARCH*/

const searchBtn = document.querySelector('.search-btn'),
  headerForm = document.querySelector('.header__form');


searchBtn.addEventListener('click', function () {
  headerForm.classList.toggle('header__form--active');
});


/*CATALOG*/

const catalogBtn = document.querySelector('.catalog__btn'),
  catalogList = document.querySelector('.catalog__list'),
  catalogLinks = document.querySelectorAll('.catalog__link');

catalogBtn.addEventListener('click', function () {
  catalogBtn.classList.toggle('catalog__btn--active');
  catalogList.classList.toggle('catalog__list--active');
  body.classList.toggle('body--fixed');
  overlayShow();
});

catalogList.addEventListener('click', function (event) {

  let current = document.getElementsByClassName('catalog__link--active');
  if (current.length > 0) {
    for (const catalogLink of catalogLinks) {
      catalogLink.classList.remove('catalog__link--active');
    }
  }

  if (event.target.closest('.catalog__link')) {
    event.target.classList.toggle('catalog__link--active');
  }

});

/*SIDE-MENU*/

const headerBurger = document.querySelector('.header__burger'),
  sideMenu = document.querySelector('.side-menu'),
  sideMenuCloseBtn = document.querySelector('.side-menu__close-btn ');

headerBurger.addEventListener('click', function () {
  sideMenu.classList.add('side-menu--active');
  body.classList.toggle('body--fixed');
  overlayShow();
});

sideMenuCloseBtn.addEventListener('click', function () {
  sideMenu.classList.remove('side-menu--active');
  body.classList.toggle('body--fixed');
  overlayHide();
});

/*CATALOG-SIDE*/

const catalogBtnSide = document.querySelector('.catalog__btn--side'),
  catalogListSide = document.querySelector('.catalog__list--side');
  // catalogLinks = document.querySelectorAll('.catalog__link');

catalogBtnSide.addEventListener('click', function () {
  catalogBtnSide.classList.toggle('catalog__btn--active');
  catalogListSide.classList.toggle('catalog__list--active-side');
  body.classList.toggle('body--fixed');
  overlayShow();
});

catalogList.addEventListener('click', function (event) {

  let current = document.getElementsByClassName('catalog__link--active');
  if (current.length > 0) {
    for (const catalogLink of catalogLinks) {
      catalogLink.classList.remove('catalog__link--active');
    }
  }

  if (event.target.closest('.catalog__link')) {
    event.target.classList.toggle('catalog__link--active');
  }

});

/*BASKET*/

const basketBtn = document.querySelector('.basket-btn'),
  basket = document.querySelector('.basket'),
  basketCloseBtn = document.querySelector('.basket__close-btn'),
  catalogFiltersSide = document.querySelector('.catalog__filters-side'),
  body = document.querySelector('body');


basketBtn.addEventListener('click', function () {
  basket.classList.add('basket--active');
  body.classList.toggle('body--fixed');
  overlayShow();
});

basketCloseBtn.addEventListener('click', function () {
  basket.classList.remove('basket--active');
  body.classList.toggle('body--fixed');
  overlayHide();
});

overlay.addEventListener('click', function () {
  basket.classList.remove('basket--active');
  body.classList.remove('body--fixed');
  catalogBtn.classList.remove('catalog__btn--active');
  catalogList.classList.remove('catalog__list--active');
  sideMenu.classList.remove('side-menu--active');
  catalogBtnSide.classList.remove('catalog__btn--active');
  catalogListSide.classList.remove('catalog__list--active');
  catalogFiltersSide.classList.remove('catalog__filters-side--active');
  overlayHide();
});

/*COUNTER*/

// let counterBtnsPlus = document.querySelectorAll(".counter__btn-plus");
// let counterBtnMinus = document.querySelectorAll(".counter__btn-minus");
// let counterValue = document.querySelector(".counter__value");
// let total = document.querySelector(".product-card__sum");
  
// let price = document.querySelector(".prices__item").textContent;
// let currencуRub = document.querySelector(".currency--rub");

// // let counterBtnPlus;

// // for (const item of counterBtnsPlus) {
// //   counterBtnsPlus[i] = counterBtnPlus;
// // }

// counterBtnPlus.addEventListener('click', function (e) {
//   e.preventDefault();
//   let $this = $(this);
//   let counterValue = $this.closest('div').find('input');
//   let value = parseInt(counterValue.val());

//   console.log(counterValue);

//   if (value <= 98) {
//     value++;
//     // total.textContent = number * parseInt(price) + currencуRub.textContent;
//   }

//   counterValue.val(value);
// });

// counterBtnMinus.addEventListener('click', function (e) {
//   e.preventDefault();
//   let $this = $(this);
//   let counterValue = $this.closest('div').find('input');
//   let value = parseInt(counterValue.val());

//   console.log(counterBtnMinus);

//   if (value >= 1) {
//     value--;
//     // total.innerHTML = number * parseInt(price) + currencуRub.textContent;
//   }

//   counterValue.val(value);
// });