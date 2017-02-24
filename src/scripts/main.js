var components = {
	init: function() {
		masonry.init();
		request.init();
	},
};

jQuery(document).ready(function($) {
	components.init();
});
