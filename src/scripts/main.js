var components = {
	init: function() {
		masonry.init();
		gradient.init();
		// nanoajax.init();
		wishlist.init();
		portfolioSlider.init();
		navPlacing.init();
	},
};

window.addEventListener('load', function(){
	components.init();
});
