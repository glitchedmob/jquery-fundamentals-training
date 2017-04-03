$(document).ready(function() {
		//create empty "titles" array
	var titles = [];
		/*
		** iterate over all h2s on the page;
		** for each h2, add an object to the "titles" array (hash --> object, and quotes)
		** with fields for "label" (the h2's html) and (title --> label)
		** "url" (the h2's id) (quotes)
		*/
	$('h2').each(function() {
		titles.push({
			label: $(this).html(),
			url: $(this).attr('id')
			})
		});

		//use the "titles" array as the datasource for
		//autocomplete for the #q input field; when the user
		//selects a suggested option, redirect them to the
		//appropriate anchor, jumping down the page to the
		//correct id
		$('#q').autocomplete({
	source: titles,
		select: function( event, ui ) {
			window.location.hash = ui.item.url; 
		}
	});

	//animate table row background/foreground color (table id: #fruits)
	//as the user hovers over each row; the first
	//function is the mouse-in event and the second
	//is the mouse-out event
	$('#fruits>tbody>tr').hover(
		function() {
			$(this).animate({
				backgroundColor: "#600",
				color: "#fff"
			});
	},
		function() {
			$(this).animate({
				backgroundColor: "#fff",
				color: "#000"
			});
		}
	)
});
