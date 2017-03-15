var Bike = require('./../js/bike.js').bikeModule;

var displaySerial = function(location, serialData) {
  $('.search-result').text("The serial number of the bike is " + serialData);
}

$(document).ready(function(){
    var currentBike = new Bike();
    $("#find-bike").submit(function(event){
      event.preventDefault();
    var location = $('#location').val();
    $('#location').val();
    currentBike.findBikes(location, displaySerial);
  });
});
