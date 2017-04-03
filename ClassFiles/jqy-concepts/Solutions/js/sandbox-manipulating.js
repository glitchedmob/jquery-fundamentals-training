$(document).ready(

	function() {
		// Add five new list items to the end of #myList.
		for (var i = 0; i < 5; i++) {
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
		// another way
		$('<option>Thursday</option>')
			.val('thursday')
			.appendTo('#specials select[name=day]');

		// Add a new div.module to the page after the last one;
		// put a copy of one of the existing images inside of it.
		// Note that the images have ids, which should be removed.
		$('<div class="module">')
			.append($('#slideshow img:first').clone().removeAttr('id'))
			.insertAfter('div.module:last');
	}
);
