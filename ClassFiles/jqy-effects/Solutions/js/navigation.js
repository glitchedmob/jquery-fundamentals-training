$(document).ready(function() {
	// when a nav item is hovered,
	// add a class to it and show
	// any child ULs (dropdowns)
	$('#nav li').hover(function() {
		$(this).toggleClass('hover')
			.children('ul').stop(true, false).slideToggle();
	});
});
