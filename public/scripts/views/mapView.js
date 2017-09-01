'use strict';

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.71318096, lng: -122.27698486},
    zoom: 8
  });
}
