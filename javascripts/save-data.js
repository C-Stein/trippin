define(function(require){
  var $ = require("jquery");
  var visited = false;

  $("#visited").click(function(){
    visited = true;
  })

  $("#wishList").click(function(){
    visited = false;
  })


  $("#addLocation").click(function(){

    var newLocation = {
      location: $("#locationName"),
      location_type: $("#locationType"),
      visited: visited,
    }

    console.log("newLocation", newLocation);

    $.ajax({
      url: "https://caitlin-trippin.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    })
    .done(function(newData){
      console.log("ajax success", newData)
    })
    .fail(function(xhr, status, error){
      console.log("ajaax error", error)
    });
  })



});