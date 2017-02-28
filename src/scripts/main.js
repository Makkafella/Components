var components = {
	init: function() {
		masonry.init();
		gradient.init();
		// request.init();
	},
};

window.addEventListener('load', function(){
	components.init();
});
