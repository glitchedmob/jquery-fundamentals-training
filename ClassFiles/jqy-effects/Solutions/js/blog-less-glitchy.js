$(document).ready(function() {
	
	// should really do the following step in a stylesheet	
	// hidden elements have size; this allows jQuery to calculate it
	$('#blog p.excerpt')
		.css( { visibility: "hidden", display: "block" } );
	
	var time = 500;
	var $blogTitles = $('#blog>ul>li>h3:first-child');
	$blogTitles.each(function() {
		var $this = $(this);
		var $excerpt = $(this).next('p.excerpt');
		var h = $excerpt.height();
		var w = $excerpt.width();
		$excerpt
			.css({
				height: h + "px",
				width: w + "px",
				display: "none",
				visibility: "visible"
			});
		$this.click(function(e) {
			e.preventDefault();
			$excerpt.slideToggle(time, 'linear');
			$(this).parent()
				.siblings()
				.find('p.excerpt:visible')
				.slideUp(time, 'linear');
		});
	});
});
