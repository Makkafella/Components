var navPlacing = {
  init: function(){
    // var defaultPlacement = 20;
    $( 'nav a' ).each(function() {
      var left = 'calc(' + navPlacing.getRandomArbitrary(10,90) +'vw - '+$(this).width()+'px)';
      var top = 'calc(' + navPlacing.getRandomArbitrary(10,80) +'vh - 28px)';
      // var tempPlacement = $(this).width() + defaultPlacement;
      // defaultPlacement = tempPlacement + 10;
      $(this).css({
        'top': top,
        'position': 'absolute',
        'left' : left
      });
    });
  },
  getRandomArbitrary: function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  },
  handleScroll: function(){
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    $( '.float-nav a' ).each(function() {
      if(!$(this).hasClass('is-inplace')){
        bounds.top = $(this).offset().top;
        bounds.bottom = bounds.top + $(this).outerHeight();
        var setInPlace = ((bounds.top <= viewport.bottom) && (bounds.top >= viewport.top));
        if( !setInPlace ){
          $(this).addClass('in-place');
          $(this).css({
            'top': 10,
            'left': 'auto',
            'right': 10,
            'position': 'fixed'
          });
        }
      }
    });
  }
};

$(window).on('DOMContentLoaded load resize scroll', navPlacing.handleScroll);
