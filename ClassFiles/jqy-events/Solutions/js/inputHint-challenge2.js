$(document).ready(function() {
	var $search = $('#search');
	var $input = $search.find('input.input_text');
	
	$input.each(function() {
		var hint = $search.find('label[for=' + this.name + ']')
			.remove()
			.text();
		var $this = $(this);
		
		$this
			.val(hint)
			.addClass('hint')
			.focus(function() {
				var entry = $this.val();
				$this.removeClass('hint');
				if (entry == hint) $this.val('');
			})
			.blur(function() {
				if (!$.trim($this.val())) $this.val(hint);
				if ($this.val() == hint) $this.addClass('hint');
			});		
	});
});
