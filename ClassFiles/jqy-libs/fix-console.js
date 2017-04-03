if (!window.console) {
	window.console = {
		log: function(msg) { window.alert(msg) }
	};
}