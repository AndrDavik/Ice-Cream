$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.png" alt="next"></button>',
        speed: 1200
    });
  });


  const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });