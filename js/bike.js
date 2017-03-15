function Bike(){
}



Bike.prototype.findBikes = function(location, displayFunction) {
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location="+ location + "&distance=10&stolenness=proximity&access_token=4e7b88c7343fe7d642db50104a7afc73f05fb20bf657399c298c08307c689b4e").then(function(response) {
    response.bikes.forEach(function(bike){
      displayFunction(bike);
      console.log("this works");
    });
  })
  .fail(function(error) {
    $('search-result').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
