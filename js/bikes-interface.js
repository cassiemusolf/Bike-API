var Bike = require('./../js/bike.js').bikeModule;
var apiKey = require('./../.env').apiKey;
var Map = require('./../js/map.js').mapModule;

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

var displayCount = function(proximity) {
  $('.search-count').text(proximity + " bikes were stolen.");
};

$(document).ready(function(){
    var currentBike = new Bike();
    $("#find-bike").submit(function(event){
      event.preventDefault();
    var page = $('#page').val();
    var location = $('#location').val();
    var manufacturer = $('#manufacturer').val();
    currentBike.findBikes(page, manufacturer, location, displayBike);
    currentBike.findCount(manufacturer, location, displayCount);
    var map = new Map();
    // map.initMap();
  });

});
