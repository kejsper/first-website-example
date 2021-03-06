$(document).ready(function () {
  $(window).on('scroll', function () {
    var pozycjaScrolla = $(window).scrollTop();
    strzalkaGora(pozycjaScrolla);
    przewijaneMenu(pozycjaScrolla);
  });
  // scroll top button animation
  $('#scrolltop').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 700);
  });
  // inside links animation
  $('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if ( target.length ) {
      event.preventDefault();
      $('html, body').animate({scrollTop: target.offset().top}, 700);
    }
  });
  // shows scroll top button
  function strzalkaGora(pozycjaScrolla) {
    if (pozycjaScrolla > 100) {
      $('#scrolltop').fadeIn(350);
    }
    else {
      $('#scrolltop').fadeOut(350);
    }
  }
  // navigation bar sizes animations
  function przewijaneMenu(pozycjaScrolla) {
    var wielkoscEkranu = $(window).width();
    if (pozycjaScrolla > 40 && wielkoscEkranu > 768) {
      $('.duze-logo').toggleClass('duze-logo male-logo');
      $('.duze-linki').toggleClass('duze-linki male-linki');
    }
    else {
      $('.male-logo').toggleClass('male-logo duze-logo');
      $('.male-linki').toggleClass('male-linki duze-linki');
    }
  }
});
