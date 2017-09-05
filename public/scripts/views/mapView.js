'use strict';

// map and initMap must be on global scope for google maps, cannot use iife scope control in this page

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.618288, lng: -122.351767},
    zoom: 12,
  });
}

function loadMarkers(data) {
  for (var i = 0; i < data.length; i++) {
    var coords = data[i].location.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
}
