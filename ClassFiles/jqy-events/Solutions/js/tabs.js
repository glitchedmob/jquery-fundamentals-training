$(document).ready(function() {
	// Find all the modules, add the tabContent class, and hide
	var $modules = $('div.module')
		.addClass('tabContent')
		.hide();

	// Create a ul before the first module; add the tabBar class
	var $nav = $('<ul/>')
		.addClass('tabBar')
		.insertBefore($modules.eq(0));

	// Iterate over the modules
	$modules.each(function() {
		var $module = $(this);
		// get the text of the first h2 for the text of an li
		var $title = $module.find('h2:first');
		var $tab = $('<li>' + $title.text() + '</li>');

		// Add the tabs class, then bind a click handler
		//   that adds current class and removes it from siblings
		//   then shows current module and hides siblings
		$tab.addClass('tabs')
			.appendTo($nav)
			.click(function() {
				$tab.addClass('current').siblings().removeClass('current');
				$module.show().siblings('.module').hide();
			});
	});
	// Triggering click handler can replace selecting first tab manually
	$nav.find('li:first').click();
	// Instead of:
	//$modules.eq(0).show();
	//$nav.find('li:first').addClass('current');
});
