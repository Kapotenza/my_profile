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
    var href = $(this).attr('href');
    
    // Só aplica smooth scroll se for link interno (começa com #)
    if (href && href.charAt(0) === '#') {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $(href).offset().top - 70
      }, 1000);
    }
    // Se não for link interno (ex: Download CV), deixa funcionar normalmente
  });
  
  // TESTIMONIALS CAROUSEL (se você tiver owl carousel)
  if (typeof $.fn.owlCarousel !== 'undefined') {
    $('#testimonials-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        900: {
          items: 2,
        },
        1200: {
          items: 3,
          loop: false
        }
      }
    });
  }
  
});
