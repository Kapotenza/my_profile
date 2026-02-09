<<<<<<< HEAD

  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   
     
  });
=======
$(function () {
  'use strict';

  // MENU - Fecha o menu mobile ao clicar em um link
  $('.navbar .nav-link').on('click', function() {
    $(".navbar-collapse").collapse('hide');
  });

  // SCROLL - Adiciona classe ao navbar quando rolar a página
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    
    if (scrollTop > 72) {
      $(".navbar").addClass("scroll");
    } else {
      $(".navbar").removeClass("scroll");
    }
  });

  // SMOOTH SCROLL - Rolagem suave ao clicar nos links do menu
  $('.navbar .nav-link').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 49
    }, 1000);
    event.preventDefault();
  });
});
>>>>>>> 15e3d965366a211b6e42748eb8cff88a4518f7ac
