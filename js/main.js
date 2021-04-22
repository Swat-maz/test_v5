$(document).ready(function () {
  $('.slide').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.header__burgbody').click(function () { 
    $('.menu').toggleClass('active');
  });
  $('.menu_link').click(function () {
    $('.menu').removeClass('active');
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 80) {
    $('.navbar').css('background','#15141a');
    } else {
    $('.navbar').css('background','transparent');
    }
    });
});