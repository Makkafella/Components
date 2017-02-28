var gradient = {
  init: function(){
    var elem = document.querySelector('.gradient-wrap');
    if(elem){
      imagesLoaded( document.querySelector('.gradient-wrap'), function( instance ) {
        Grade(document.querySelectorAll('.gradient-wrap'));
      });
    }
  }
};
