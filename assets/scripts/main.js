$(document).ready(function() {
  /*
   * Application Functions
   */
  addCurrentLocationToMap = function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat  = position.coords.latitude,
            long = position.coords.longitude;

        console.log('--- Your Position: ---');
        console.log('Lat: ' + lat);
        console.log('Long: ' + long);
        console.log('---------------------');

        // Put the marker on the map...
        var marker = L.marker([lat, long]).addTo(map);

        // Add a popup with some information...
        marker.bindPopup('You are at:<br>' + lat + ', ' + long).openPopup();
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
