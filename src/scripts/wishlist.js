var wishlist = {
	init: function() {
		var elem = document.querySelector('#wishlist-select');
		if (elem) {
			$('#wishlist-select').dropdown({
				fullTextSearch: true,
				allowAdditions: true,
				hideAdditions: false,
				message: {
					noResults: 'Could not find a matching list.',
					addResult: 'Create new list <b>{term}</b>: '
				},
				onChange: function(value, text, $choice) {
          var testVal = value.replace(/\D/g,'');
          if(/^[0-9.]+$/.test(testVal)){
            $('.whishlist').data('wishlist-value', value);
          }else{
            $('button.whishlist').data('wishlist-value', '000-000-000-000');
          }
					$('button.whishlist').data('whishlist-name', text);
				}
			});
			$('.whishlist').click(function() {
				if ($('#wishlist-select input[type="hidden"]').val().length > 0) {

				}
			});
		}
	}
};
