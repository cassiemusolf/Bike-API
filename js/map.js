
Map = function(latitude, longitude){
  this.seattle = {lat: 47.6062, lng: -122.3321};
  this.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: seattle
};

// Map.prototype.initMap = function(){
//   var seattle = {lat: 47.6062, lng: -122.3321};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: seattle
//   });


//   Map.prototype.marker = function(){
//     $.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=YOUR_API_KEY").then(function(response) {
//       displayCount(response.proximity);
//     })
//     .fail(function(error) {
//       $('.search-count').text(error.responseJSON.message);
//     });
//   };
//
//     new google.maps.Marker({
//     position: seattle,
//     map: map
//   });
// };

Map.prototype.placeMarker = function (latitude, longitude) {
    position: this.Seattle,
    map: this.map
}
exports.mapModule = Map;


// https://maps.googleapis.com/maps/api/js?key=AIzaSyCDwXPeZvnRvw35icw_QK_dfE9GDYxXrxIcallback=initMap
