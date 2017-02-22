var masonry = {
  init: function(){
    var elem = document.querySelector('.masonry-grid');
    if(elem){
      imagesLoaded( document.querySelector('.masonry-grid'), function( instance ) {
        var msnry = new Masonry( elem, {
          itemSelector: '.masonry-grid .card'
        });
      });
    }
  }
};
