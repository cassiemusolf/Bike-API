var Bike = require('./../js/bike.js').bikeModule;
// var findBikes = require("./../js/bike.js").findBikeModule;
// var bikeArray = require("./../js/bike.js").bikeArrayModule;

function displayBike(bike) {
    $('.search-result').append("<li>" + bike.title + "</li>");

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
