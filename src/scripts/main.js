var components = {
	init: function() {
		masonry.init();
		gradient.init();
		$('#wishlist-select').dropdown();
	},
};

window.addEventListener('load', function(){
	components.init();
});
