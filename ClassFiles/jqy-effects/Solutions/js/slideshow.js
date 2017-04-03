$(document).ready(function() {
	var $slideshow = $('#slideshow');
	$slideshow
		.prependTo('#main')
		.addClass('cycler');
	var $slides = $slideshow.find('li');
	$slides.css( { 'display': 'none' } );
	var index = 0;
	fadeIn();
	
	function fadeIn() {
		$slides.eq(index).fadeIn(3000).delay(1000).fadeOut(500, fadeIn);
		if (++index >= $slides.length) index = 0;
	}
});
