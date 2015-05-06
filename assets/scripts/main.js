$(document).ready(function() {
  /*
   * Application Variables
   */
  // Access token
  L.mapbox.accessToken = 'pk.eyJ1Ijoiam1sYWJzIiwiYSI6Imlnc1pXbncifQ.1U4VwxWkGS_Y3TpZ6-sf4A';

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

        // Pan to that marker
        map
          .panTo([lat, long])
          .zoomIn(5);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  /*
   * Application Init
   */
  var map = L.mapbox.map('map', 'jmlabs.k3egm800', {
    center: [35.59, -82.56], // lat, long
    zoom: 13
  });

  L.mapbox.tileLayer('mapbox.pencil', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map);

  // This just adds the current location using the HTML5 API!
  $('#get-location').click(function(event) {
    addCurrentLocationToMap();
  });
});
