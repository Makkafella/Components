var ftvintra = {
	init: function() {

		//ftvintra.startPage();
	},
	startPage: function() {
		if ($('.page-startpage').length) {
			startPage.init();
		}
	}
};

jQuery(document).ready(function($) {
	ftvintra.init();
});
