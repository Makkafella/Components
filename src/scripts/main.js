var components = {
	init: function() {
		masonry.init();
		gradient.init();
		// nanoajax.init();
		wishlist.init();
	},
};

window.addEventListener('load', function(){
	components.init();
});
