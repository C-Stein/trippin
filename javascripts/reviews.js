define(function(require) {
  var $ = require("jquery");
  var firebase = require("firebase");
  var selectedTripId;

  $(document).on ("click", "button[id^='add-review#']", function() {
    selectedTripId = $(this).attr("id").split("#")[1];
    console.log("selectedTripId", selectedTripId);
    $(".review-container").toggleClass("hidden");
  });
  $("#save-review").click(function(){
    var tripRef = new Firebase('https://caitlin-trippin.firebaseio.com/trips/' + selectedTripId);
    
    var newReview = {
      date: Date.now(),
      text: $(".review-entry").val(),
      title: "title"
    };


    tripRef.child("reviews").push(newReview);

    console.log("newReview", newReview);
    $(".review-entry").val("");

  });
});