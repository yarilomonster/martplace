$(function () {

  $('.work__slider-inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../img/icons/left.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="../img/icons/right.png" alt=""></button>'
  });

  $('.followers-slider__inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../img/icons/left.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="../img/icons/right.png" alt=""></button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  $('.js-range-slider').ionRangeSlider({
    type: "double",
    min: 0,
    max: 400,
    from: 30,
    to: 300,
    prefix: '$'
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true
  });

  $(".icon-list").on('click', function() {
    $(".template__item").addClass('list');
    $(".icon-list").addClass('active');
    $(".icon-th-large ").removeClass('active');
  });

  $(".icon-th-large").on('click', function() {
    $(".template__item").removeClass('list');
    $(".icon-th-large").addClass('active');
    $(".icon-list").removeClass('active');
  });

/* start mixitup */ 
  var mixer = mixitup('.template__inner-box');
/* end mixitup */ 


});