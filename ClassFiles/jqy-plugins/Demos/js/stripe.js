
var Globals = { };
(function($){
	Globals.stripe = function(query, oddColor, evenColor) {
		
		// start with empty set
		var $tables = $()
			// add any tables that are direct entries in current collection
			.add($(query).filter('table').get())
			// add tables that are descendants of entries in current collection
			.add($(query).find('table').get());
		// now find any tables that are descendants of the tables we found
		var $omit = $tables.find('table');
		// and omit them from the collection
		$tables = $tables.not($omit);
		
		$tables.each(function() {
				// this finds only grandchildren (table -> table section -> tr)
				$sections = $(this).children();
				if (oddColor) $sections.children('tr:odd')
					.css('backgroundColor', oddColor);
				if (evenColor) $sections.children('tr:even')
					.css('backgroundColor', evenColor);

				// this would find all descendants, including in inner tables
				//$(this).find('tr:odd').css('backgroundColor', color);
		});		
	};
}(jQuery));

