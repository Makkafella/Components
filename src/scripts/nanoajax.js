var request = {
  init: function(){
    nanoajax.ajax({url:'https://httpbin.org/get'}, function (code, responseText) {
      if(code !== 200){
        console.log('error');
      }else{
        console.log(responseText);
      }
    });
  }
};
