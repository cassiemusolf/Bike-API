var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function(){
  $("#find-bike").submit(function(event){
    event.preventDefault();
    var location = $('#location').val();

    $(".search-result").text("Your search results for " + location + ":");
    $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location="+ location + "&distance=10&stolenness=proximity&access_token=4e7b88c7343fe7d642db50104a7afc73f05fb20bf657399c298c08307c689b4e", function(response) {
      console.log(response);
      for each (bike in response) {

        $('search-result').append("<li>" + response.bikes[0].frame_colors + "</li>");
      }
    });
  });
});
