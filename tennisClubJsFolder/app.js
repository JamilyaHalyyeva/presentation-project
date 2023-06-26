$(document).ready(function(){
    //Slider
    $('#heroslider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        items:1,
        dots:false,
        smartSpeed:1000,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                
            },
            600:{
                
            },
            1000:{
                
            }
        }
    })
})

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 700);
    });
  });