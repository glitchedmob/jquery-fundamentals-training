$(document).ready(
	function() {

		// Get all the image elements on the page; log each image's
		// alt attribute.
		$('img').each(function(i) {
			console.log($(this).attr('alt'));
			//console.log(this.alt);
		});
		
		// Get the search input text box, then traverse up to the form
		// and add a class to the form that contains it.
		$('input[name="q"]').closest('form').addClass('showMe');
		
		// Get the list item inside #myList that has a class of 'current'
		// and remove that class from it; add a class of 'current'
		// to the next list item.
		$('#myList li.current')
			.removeClass('current')
			.next()
				.addClass('current');
		
		// Get the select element inside #specials; traverse your way to
		// the submit button.  Set its disabled attribute to true.
		$('#specials select')
			.parent()  // Could also use closest('form')
			.next()    // instead of these two lines
			.find('input.input_submit')
				.attr('disabled', true);
		
		// Get the first list item in the #slideshow element; add the class
		// 'current' to it, and then add a class of 'disabled' to its
		// sibling elements.
		$('#slideshow li:first')
			.addClass('current')
			.siblings()
				.addClass('disabled');
	}
);
