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
