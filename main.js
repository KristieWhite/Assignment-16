var StarWarsObject = function () {};

    function ajaxCallPath (path, id, callback) {
    var url = "http://www.swapi.co/api/";
    url = url + path + "/" + id;
        /*if (path) {
            url = url + path + "/";
        }
        
        if (id) {
            url = url + id;
        }*/
            

    $.ajax({
         url: url,
        method:'get',
        dataType: 'JSON'
    }).then(function(response){
        callback(response);
    });
    console.log(url);
    };
  
ajaxCallPath("people", 1, function(people){
    console.log(people);
})


//ajaxCall.person (function(person){
  //  console.log(person);
//});
   
//this.getPerson = function() {
  //$.ajax(person);  

//this.getPeople = function () {
//};

/*var person = new StarWarsObject();
    StarWarsObject.getPerson(1, function(person) {
    callback(person);
   console.log(person); 
});*/
