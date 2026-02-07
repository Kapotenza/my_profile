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
