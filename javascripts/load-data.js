define(function(require){
  var firebase = require("firebase");

  var myFirebaseRef = new Firebase("https://caitlin-trippin.firebaseio.com");

    myFirebaseRef.child("trips").on("value", function(snapshot) {
      trips = snapshot.val();
      
      console.log("trips", trips);
      
    });


})