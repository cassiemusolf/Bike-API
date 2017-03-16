var Map = require('./../js/map.js').mapModule;

$(document).ready(function() {
  var newMap = new Map();
  $("#location-form").submit(function(event){
    event.preventDefault();
    var lat = $('#latitude').val();
    var long = $('#longitude').val();
    newMap.initMap();
    // var result = newMap.marker(lat, long);
  });
});
