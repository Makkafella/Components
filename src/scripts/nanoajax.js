// var Promise = require('promise');

var request = {
  init: function(){
    nanoajax.ajax({url:'https://httpbin.org/get'}, function (code, responseText) {
      console.log(code);
      console.log(responseText);
    });
  }
};
