var apiKey = "./../.env";

function Map(latitude, longitude){
  this.lat = 0;
  this.long = 0;
  this.geocoder = new google.maps.Geocoder();
  this.seattle = {lat: 47.6062, lng: -122.3321};
  this.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: this.seattle
  });
}

Map.prototype.getCoords = function(city){
  var current = this;
  current.geocoder.geocode({'address': city}, function(res, status){
    if(status === "OK"){
      current.lat = res[0].geometry.location.lat();
      current.long = res[0].geometry.location.lng();
      var marker = new google.maps.Marker({
        position: {lat: current.lat, lng: current.long},
        map: current.map
      });
      console.log(current.lat, current.long);
    }
    else{
      console.log('broken as shit');
    }
  });
};

exports.mapModule = Map;
