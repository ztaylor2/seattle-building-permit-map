'use strict';

var app = app || {};

var map;

function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.618288, lng: -122.351767},
    zoom: 12,
  });
}

// (function(module) {
//   const Permits = {};

 function grabData() {
    $.ajax({
    url: 'https://data.seattle.gov/resource/i5jq-ms7b.json',
    method: 'GET',
  })
    .then(data => data.filter(coord => coord.location !== undefined)).then(
      function(data) {
        for (var i = 0; i < data.length; i++) {
          var coords = data[i].location.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }
      }
    );
  }

  // app.mapView.eqfeed_callback

  grabData();

//   module.Permits = Permits;
// })(app);
