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
		/* Write the body of the function to:
		*   fade the current item in for a few seconds
		*   (the current item is the element of $slides
		*   at the current value of index)		
		*   hold it in place for a second
		*   fade it out
		*   invoke this function again when the fade out is done
		*/
		if (++index >= $slides.length) index = 0;
	}
});