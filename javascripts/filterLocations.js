define(function(require){
  var $ = require("jquery");
  var _ = require("lodash");
  var firebase = require("firebase");
  var templates = require("get-templates");


  var myFirebaseRef = new Firebase("https://caitlin-trippin.firebaseio.com");
  var trips;
  var tripsArray = [];

  myFirebaseRef.child("trips").on("value", function(snapshot) {
      trips = snapshot.val();
    console.log("trips on filter", trips);
    for (var obj in trips) {
      tripsArray.push(trips[obj]);
    }
    var visitedPlaces = _.filter(tripsArray, { 'visited': true });
      console.log("visitedPlaces", visitedPlaces);
    var wishlistPlaces = _.filter(tripsArray, { 'visited': false });
    
    $("#seeVisited").click(function(){
        $("#list-of-trips").html(templates.tripTpl(visitedPlaces));
    });

    $("#seeWishList").click(function(){
      $("#list-of-trips").html(templates.tripTpl(wishlistPlaces));  
    });

    $("#seeAll").click(function(){
      $("#list-of-trips").html(templates.tripTpl(trips));  
    });

  });



  


});