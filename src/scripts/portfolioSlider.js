var portfolioSlider = {
  init: function(){
    var slider = $('.card-image ul').lightSlider({
      controls: false,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      gallery: false,
      item: 1,
      loop: false,
      slideEndAnimation: false,
      slideMargin:0
    });
  }
};
