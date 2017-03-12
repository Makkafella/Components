var portfolioSlider = {
  init: function(){
    var slides = [];
    $('.card-portfolio .card-image').each(function( index) {
      slides[index] = $(this).find('ul').lightSlider({
        controls: false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        gallery: false,
        item: 1,
        loop: false,
        slideEndAnimation: false,
        slideMargin:0,
        onSliderLoad: function(el) {
          var parentId = el.data('parent-id');
          $(parentId).addClass('is-loaded');
        }
      });
    });

    $('body').on('click','.zoom-toggle', function() {
      var itemIndex = $('.zoom-toggle').index(this);
      var zoomId = $(this).data('zoom-id');

      if($(zoomId).hasClass('is-zoomed') ){
        $('.card-portfolio .card').removeClass('is-zoomed');
      }else{
        $('.card-portfolio .card').removeClass('is-zoomed');
        $(zoomId).addClass('is-zoomed');
      }
      $(slides).each(function( index) {
        slides[index].refresh();
      });
      $('html, body').animate({
        scrollTop: $(zoomId).offset().top
      }, 250);
    });
  }
};
