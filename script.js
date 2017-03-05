$(document).ready(function() {
// wyswietla przycisk do przewijania strony w gore
  $(window).on('scroll', function() {
    var pozycjaScrolla = $(window).scrollTop();
    if (pozycjaScrolla > 100) {
      $('#scrolltop').css('display', 'block');
    }
    else {
      $('#scrolltop').css('display', 'none');
    }
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
});
