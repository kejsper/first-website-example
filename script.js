$(document).ready(function() {
  $(window).on('scroll', function() {
    var pozycjaScrolla = $(window).scrollTop();
    var rozmiarPrzed = $('.navbar').height();
    strzalkaGora(pozycjaScrolla);
    przewijaneMenu(pozycjaScrolla);
  });
// animuje przewijanie po nacisnieciu strzalki
  $('#scrolltop').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 700);
  });
// animuje linki na stronie
  $('a[href^="#"]').on('click', function(event) {
		var target = $($(this).attr('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({scrollTop: target.offset().top}, 700);
    }
	});
// pokazuje strzalke do przewijania strony
  function strzalkaGora(pozycjaScrolla) {
    if (pozycjaScrolla > 100) {
      $('#scrolltop').css('display', 'block');
    }
    else {
      $('#scrolltop').css('display', 'none');
    }
  }
// zweza menu, zmienia rozmiar trzcionek
  function przewijaneMenu(pozycjaScrolla) {
    var rozmiarPo;
    if (pozycjaScrolla > 40) {
      $('.duze-logo').toggleClass('duze-logo male-logo');
      $('.duze-linki').toggleClass('duze-linki male-linki');
      $('.navbar').animate({height: '40px'}, 200);
    }
    else {
      $('.male-logo').toggleClass('male-logo duze-logo');
      $('.male-linki').toggleClass('male-linki duze-linki');
      $('.navbar').animate({height: '57px'}, 200);
    }
  }
});
