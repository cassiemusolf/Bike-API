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
