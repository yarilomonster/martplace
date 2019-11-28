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

/* start mixitup */ 
  var mixer = mixitup('.template__inner-box');
/* end mixitup */ 

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    readOnly: true
  });

});