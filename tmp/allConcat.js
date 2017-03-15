var Bike = require('./../js/bike.js').bikeModule;

function displayBike(bike) {
    $('.search-result').append("<li id='" + bike.id + "'>" + bike.title + "</li>");
    console.log(bike.id);
    // $(".bike-info").hide();
    $("#" + bike.id).click(function() {
      $(".bike-info").show();
      $(".bike-title").text(bike.title);
      $(".bike-date").text(bike.date_stolen);
      $(".bike-frame-model").text(bike.frame_model);
      $(".bike-manufacturer").text(bike.manufacturer_name);
      $(".bike-stolen-location").text(bike.stolen_location);
    });
}

$(document).ready(function(){
    var currentBike = new Bike();
    $("#find-bike").submit(function(event){
      event.preventDefault();
    var location = $('#location').val();
    $('#location').val();
    currentBike.findBikes(location, displayBike);
  });


});
