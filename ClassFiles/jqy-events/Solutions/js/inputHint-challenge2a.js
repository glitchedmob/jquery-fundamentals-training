// Uses one event handler and data to remember associated hint text
//  as opposed to an individual event with a closure for each item
$(document).ready(function() {
	var $search = $('#search');
	var $input = $search.find('input.input_text');
	$input.each(function() {
		var $label = $search.find('label[for=' + this.name + ']');
		var hint = $label.text();
		$label.remove();
		$.data(this, 'hint', hint);
		this.value = hint;
	});

	$input
		.addClass('hint')
		.focus(function(e) {
			$this = $(this);
			var entry = $this.val();
			$this.removeClass('hint');
			if (entry == $.data(this, 'hint')) $this.val('');
		})
		.blur(function(e) {
			$this = $(this);
			if (!$.trim($this.val())) $this.val($.data(this, 'hint'));
			if ($this.val() == $.data(this, 'hint')) $input.addClass('hint');
		});
	}
);
