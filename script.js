// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText )
// });
// xhr.open("GET", "http://reqr.es/api/users/50", true);
// xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText )
// });
// xhr.open("POST", "http://reqr.es/api/users", true);
// xhr.send("name=Marta&job=Nurse");


$ = {
  ajax : function(arg){
    var options = { async: arg.async || false,
                    complete: arg.complete,
                    data: arg.data || "Default",
                    error: arg.error,
                    headers: arg.headers,
                    method: arg.method || "GET",               // (string) Note: type is an alias for this
                    success: arg.success,
                    url: arg.url,
                  };
    
    var xhr = new XMLHttpRequest();

    xhr.onload = function ( e ) {
     if ( xhr.readyState === 4 ) {
       if ( xhr.status >= 200 && xhr.status < 300 ) {
          console.log("responseText:" + xhr.responseText );
  
        } else {
         console.error( xhr.statusText );
        
        }
      }

    };
    xhr.open(options.method,options.url,options.async);

    if (options.method === "POST"){
      console.log(options.data);
      xhr.send(options.data);
    } else {
      xhr.send();
    }
     
  },

  get : function(params){
    var xhr = $.ajax({method: "GET", url: params.url, async: true});
      params.fn(xhr);
    //How to get anything from ajax itself?
  },

  post: function(params){
    $.ajax({method: "POST", 
            url: params.url, 
            async: true, 
            data: params.data});
      params.fn("Sent request");
  }
}

$.ajax({method: "GET", url: "http://reqr.es/api/users", async: true})

$.get({url: "http://reqr.es/api/users/", fn: function(data){
    alert( data )
  }
})

$.post({url: "http://reqr.es/api/users",
       fn: function(data){alert( data )},
      data: "name=Marta&job=Nurse"}
)




