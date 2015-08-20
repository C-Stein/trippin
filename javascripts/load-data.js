define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");
  var getLocation = ("get-location");
    
  var myFirebaseRef = new Firebase("https://caitlin-trippin.firebaseio.com");

    myFirebaseRef.child("locationTypes").on("value", function(snapshot) {
      location_types = snapshot.val();
      console.log("location_types", location_types);
    var populatedLocTemplate = templates.locTypeTpl(location_types);
    $("#locationTypes").html(populatedLocTemplate);
    });


    myFirebaseRef.child("trips").on("value", function(snapshot) {
      trips = snapshot.val();
      
      console.log("trips", trips);

      var populatedTemplate = templates.tripTpl(trips);

      $("#list-of-trips").html(populatedTemplate);
      
    });


});