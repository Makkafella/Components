var toggle = {
  init: function(){
    $('body').on('click','[data-toggle]',function(){
      var toggleElm = $(this).data('toggle');
      $(this).toggleClass('is-open');
      $(toggleElm).toggleClass('is-open');
    });
  }
};
