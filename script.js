var xhr = new XMLHttpRequest();
xhr.addEventListener( "load", function(){
    console.log( this.responseText )
});
xhr.open("GET", "http://reqr.es/api/users/50", true);
xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText )
// });
// xhr.open("POST", "http://reqr.es/api/register", true);
// xhr.send("email=foo");


$ = {
  ajax: function(arg){
    var options = { async: ,
                    complete: function(){},
                    data: {},
                    error: function(){},
                    headers: {},
                    method: "",               // (string) Note: type is an alias for this
                    success: function(){},
                    url: ""
                  };
  }

  var xhr = XMLHttpRequest();

  xhr.onload = function ( e ) {
   if ( xhr.readyState === 4 ) {
     if ( xhr.status === 200 ) {
        console.log( xhr.responseText );
      } else {
       console.error( xhr.statusText );
      }
    }
  };
  xhr.open(options.method,options.url,options.async)
  xhr.send();
}