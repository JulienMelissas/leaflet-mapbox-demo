$(document).ready(function() {
  var map = L.map('map', {
    center: [35.59, -82.56], // lat, long
    zoom: 13
  });

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map);

  var marker = L.marker([35.59, -82.56]).addTo(map);
});
