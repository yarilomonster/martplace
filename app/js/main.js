$(function () {

  $('.work__slider-inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev lnr-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-next lnr-chevron-right"></button>'
  });

  $('.followers-slider__inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev lnr-chevron-left"></button>',
    nextArrow: '<button class="slick-arrow slick-next lnr-chevron-right"></button>',
    infinite: true,
    variableWidth: true,
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
    readOnly: true,
    ratedFill: "#ffc000",
    "starSvg": "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/><path d='M0 0h24v24H0z' fill='none'/></svg>"
  });

    $(".lnr-list").on('click', function() {
    $(".template__item").addClass('list');
    $(".lnr-list").addClass('active');
    $(".lnr-line-spacing").removeClass('active');
  });

  $(".lnr-line-spacing").on('click', function() {
    $(".template__item").removeClass('list');
    $(".lnr-line-spacing").addClass('active');
    $(".lnr-list").removeClass('active');
  });

  $('input, select').styler();

  var mixer = mixitup('.template__inner-box');

});