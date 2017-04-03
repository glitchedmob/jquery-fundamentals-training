$(document).ready(
	function() {

		// Select all of the div elements that have a class of 'module'
		// Add the 'showMe' class to them. 
		$('div.module').addClass('showMe');

		// Three selectors to get the third item in the #myList
		$('#myListItem').addClass('showMe2'); 			
		// above is best -- IDs are always the fastest selector
		// but, would it always be the third item?
		
		$('#myList>li:eq(2)').addClass('showMe2');
		$('#myList>li').eq(2).addClass('showMe2');
		// either would be best if the list item didn't have an ID
		
		$('#myList li:eq(2)').addClass('showMe2');
		$('#myList li').eq(2).addClass('showMe2');
		// not quite as good, since it would allow items from inner lists
		
		// Select the label for the search input using an attribute
		// selector. Add the 'showMe2' class to it. 
		$('label[for=q]').addClass('showMe2');
		
		// Figure out how many elements on the page are hidden
		console.log($(':hidden').length + " hidden");
		// That includes head elements - below shows only elements in body,
		// and also omits script tags in body
		console.log($('body :hidden').not('script').length + " hidden");

		// How many image elements on the page have an alt attribute?
		console.log($('img[alt]').length + " images with alt");
		
		// Select all of the odd table rows in the table body.
		// Add the 'oddRow' class to them.
		$('#fruits>tbody>tr:odd').addClass('oddRow');
		// if you don't specify tbody, you'll get the tr in the thead too
	}
);
