/********************************
 * Selecting                    *
 ********************************/
$(document).ready(
	function() {

		// Select all of the div elements that have a class of 'module'. 
		// Add the 'showMe' class to them. 
		$('div.module').addClass('showMe');


		// Come up with three selectors that you could use to get the
		// third item in the #myList unordered list. Try each of them
		// using the 'showMe2' class. Which is the best to use? Why?
		
		$('#myListItem').addClass('showMe2'); 			
		// this one is best -- IDs are *always* the fastest selector
		
		$('#myList li:eq(2)').addClass('showMe2');		
		$('#myList li').eq(2).addClass('showMe2');		
		// this one would be best if the list item didn't have an ID
		
		$('#myList #myListItem').addClass('showMe2');
		// this one is redundant		
		
		
		// Select the label for the search input using an attribute
		// selector. Add the 'showMe2' class to it. 
		$('label[for=q]').addClass('showMe2');
		
		// Figure out how many elements on the page are hidden 
		// (hint: .length). Display in the console.
		console.log($(':hidden').length + " hidden");
		// That includes head elements - below shows only elements in body,
		// and also omits script tags in body
		console.log($('body :hidden').not('script').length + " hidden");


		// Figure out how many image elements on the page have an
		// alt attribute.  Display in the console.
		console.log($('img[alt]').length + " images with alt");

		
		// Select all of the odd table rows in the table body.
		// Add the 'oddRow' class to them.
		$('#fruits tbody tr:odd').addClass('oddRow');	
		// be sure to specify tbody, otherwise you'll get the tr in the
		// thead too. Note that we used the ID for the table to quickly
		// localize the search
		
	}
);
		
/********************************
 * Traversing                   *
 ********************************/
$(document).ready(
	function() {

		// Get all the image elements on the page; log each image's
		// alt attribute.
		$('img').each(function(i) {
			
			console.log(this.alt + "!");
			
			//var $img = $(this);
			//console.log($img.attr('alt'));
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
		// 'current'ù to it, and then add a class of 'disabled' to its
		// sibling elements.
		$('#slideshow li:first')
			.addClass('current')
			.siblings()
				.addClass('disabled');
	}
);

/********************************
 * Manipulating                 *
 ********************************/
$(document).ready(

	// Add five new list items to the end of the unordered list #myList.
	function() {
		for (var i = 0; i < 5; i++) {
			
			// won't work
			/*
			$('#myList')
				.append('<li/>', { html: 'new item ' + i, 'class': 'current' });			
			*/
			
			// will work
			$('<li/>', { html: 'new item ' + i, 'class': 'current' })
				.appendTo('#myList');
		}
		
		// Remove the odd list items from #myList.
		$('#myList>li:odd').remove();
		
		// Add another h2 and another paragraph to the last div.module.
		$('div.module:last')
			.append('<h2>New Heading</h2>').append('<p>New Paragraph</p>');
		
		// Add another option to the select element;
		// give the option the value "wednesday",
		// and inner HTML of "Wednesday".
		$('#specials select[name=day]')
			.append('<option value="wednesday">Wednesday</option>');

		// Add a new div.module to the page after the last one;
		// put a copy of one of the existing images inside of it.
		// Note that the images have ids, which should be removed frome the copy.
		$('<div class="module">')
			.append($('#slideshow img:first').clone().removeAttr('id'))
			.insertAfter('div.module:last');
	}
);