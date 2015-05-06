$(document).ready(function() {
  /*
   * Application Functions
   */
  addCurrentLocationToMap = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log('--- Your Position: ---');
        console.log('Lat: ' + position.coords.latitude);
        console.log('Long: ' + position.coords.longitude);
        console.log('---------------------');

        var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  /*
   * Application Init
   */
  var map = L.map('map', {
    center: [35.59, -82.56], // lat, long
    zoom: 13
  });

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map);

  // This just adds the current location using the HTML5 API!
  $('#get-location').click(function(event) {
    addCurrentLocationToMap();
  });
});
