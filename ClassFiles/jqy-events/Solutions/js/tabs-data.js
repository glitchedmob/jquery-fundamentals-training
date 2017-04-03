// data version
$(document).ready(function() {

	var $mods = $('div.module').addClass('tabContent').hide();
	var $tabBar = $('<ul class="tabBar" />')
		.insertBefore($mods.eq(0));
	var handler = function(e) {
		var $tab = $(e.target);
		$.data(e.target, 'content')
			.show()
			.siblings('div.module')
			.hide();
		$tab.addClass('current').siblings().removeClass('current');
	};
	$mods.each(function() {
		var $mod = $(this);
		$('<li>' + $mod.children('h2:first').text() + '</li>')
			.addClass('tabs')
			.appendTo($tabBar)
			.data('content', $mod);
		$tabBar.click(handler);		
	});
	$tabBar.children().eq(0).click();
});
	
});
