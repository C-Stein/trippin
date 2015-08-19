define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  var $ = require("jquery");
    
  var myFirebaseRef = new Firebase("https://caitlin-trippin.firebaseio.com");

    myFirebaseRef.child("trips").on("value", function(snapshot) {
      trips = snapshot.val();
      
      console.log("trips", trips);

      var populatedTemplate = templates.tripTpl(trips);

      $("#list-of-trips").html(populatedTemplate);
      
    });


})