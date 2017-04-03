$(document).ready(function() {
	$('#blog>ul>li>h3:first-child')
		.click(function(e) {
			e.preventDefault();
	
			var $h3 = $(this);
			var $p = $h3.next('p.excerpt');
			
			$p.slideToggle();
			
			$h3.parent().siblings()
				.find('.excerpt:visible').slideUp();
		});
});
