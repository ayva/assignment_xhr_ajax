// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText )
// });
// xhr.open("GET", "http://reqr.es/api/users/50", true);
// xhr.send();

var xhr = new XMLHttpRequest();
xhr.addEventListener( "load", function(){
    console.log( this.responseText )
});
xhr.open("POST", "http://reqr.es/api/register", true);
xhr.send("email=foo");