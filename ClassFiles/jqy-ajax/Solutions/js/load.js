$(document).ready(function() {
	$('#blog>ul>li>h3:first-child').each(function() {
		
		// create the div
		var $target = $("<div/>")
			.insertAfter(this);
			
		// now that the $target div exists, we can write the click handler
		// that will load it - the $target variable is the closure
		$(this).click(function(e) {
				e.preventDefault();
				$target.load(e.target.href.replace('#', ' #'));
			})

	});
});
