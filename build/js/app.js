(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "39374381385e8bca4dc2029b072cd086322a58c280a2685cc738d482de333e2c"

},{}],2:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;

function Bike(){
}


Bike.prototype.findBikes = function(page, manufacturer, location, displayFunction) {
  $.get("https://bikeindex.org:443/api/v3/search?page=" + page + "&per_page=10&manufacturer=" + manufacturer +  "&location=" + location + "&distance=10&stolenness=stolen&access_token=" + apiKey).then(function(response) {
    response.bikes.forEach(function(bike){
      displayFunction(bike);
      console.log("this works");
    });
  })
  .fail(function(error) {
    $('.search-result').text(error.responseJSON.message);
  });
};

Bike.prototype.findCount = function(manufacturer, location, displayCount) {
  $.get("https://bikeindex.org:443/api/v3/search/count?manufacturer=" + manufacturer + "%20&location=" + location + "cd &distance=10&stolenness=proximity&access_token=" + apiKey).then(function(response) {
    displayCount(response.proximity);
  })
  .fail(function(error) {
    $('.search-count').text(error.responseJSON.message);
  });
};


exports.bikeModule = Bike;

},{"./../.env":1}],3:[function(require,module,exports){
function Map() {
  this.centerSpot = {lat: 47.6062, lng: -122.3321};
}

Map.prototype.initMap = function() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center : {lat: 47.6062, lng: -122.3321},
    zoom : 16,
  });
};

Map.prototype.marker = function(latitude, longitude) {
    var userLocation = {lat: latitude, lng: longitude};
    var marker = new google.maps.Marker({
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        strokeColor: '#FF0000',
        scale: 3,
        strokeWeight: 8,
        fillColor: '#FF0000'
      },
      position: userLocation,
      map: this.map
    });
  };

exports.mapModule = Map;


// https://maps.googleapis.com/maps/api/js?key=AIzaSyCDwXPeZvnRvw35icw_QK_dfE9GDYxXrxIcallback=initMap

},{}],4:[function(require,module,exports){
var Bike = require('./../js/bike.js').bikeModule;
var apiKey = require('./../.env').apiKey;

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
  });

});

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

},{"./../.env":1,"./../js/bike.js":2,"./../js/map.js":3}]},{},[4]);
