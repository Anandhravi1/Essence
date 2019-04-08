$(document).ready(function(){
    $('header input').click(function(event){
        $(this).addClass('in-wid');
        event.stopPropagation();
    })
    $(window).click(function(){        
        $('header input').removeClass('in-wid');
    })
})
$(document).ready(function(){
    $('.product-slider').slick({        
        arrows: false,
        speed: 500,        
        cssEase: 'linear',
        autoplay: true,   
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed:2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true                
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 567,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });          
})
$(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.scroll-to-top').fadeIn('slow');
        } else {
            $('.scroll-to-top').fadeOut('slow');
        }
    });
    $('.scroll-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    $('.ham-menu').click(function(){
        $('.navbar-nav').addClass('side-bar');
        $('body').addClass('bg-col');
    })
    $('.sidebar-close').click(function(){
        $('.navbar-nav').removeClass('side-bar');
        $('body').removeClass('bg-col');
    })
});