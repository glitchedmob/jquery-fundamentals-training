(function($) {

	// define plugin and add to $.fn
	$.fn.hilight = function(options) {

		// demonstrates use of private function
		debug(this);

		// build main options before element iteration
		// extending built-in defaults with passed in options
		var opts = $.extend({}, $.fn.hilight.defaults, options);

		// iterate and reformat each matched element
		return this.each(function() {
			$this = $(this);

			// build element specific options from data stored for 
			// this element, extending current options local options
			var o = $.extend({}, opts, $this.data());

			// update element styles
			$this.css({
				backgroundColor: o.background,
				color: o.foreground
			});

			var markup = $this.html();

			// call our format function
			markup = $.fn.hilight.format(markup);
			$this.html(markup);
		});
	};

	// private function for debugging
	function debug($obj) {
		if (window.console && window.console.log)
		window.console.log('hilight selection count: ' + $obj.size());
	};

	// define and expose format function by adding it to $.fn.hilight
	$.fn.hilight.format = function(txt) {
		return '<strong>' + txt + '</strong>';
	};

	// built-in defaults, also added to  $.fn.hilight
	$.fn.hilight.defaults = {
		foreground: 'red',
		background: 'yellow'
	};

})(jQuery);
