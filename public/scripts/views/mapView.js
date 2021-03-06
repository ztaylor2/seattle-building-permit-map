'use strict';

var map;

function initMap() {

  // map styling
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#f5f5f5'
          }
        ]
      },
      {
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#616161'
          }
        ]
      },
      {
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#f5f5f5'
          }
        ]
      },
      {
        'featureType': 'administrative.land_parcel',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#bdbdbd'
          }
        ]
      },
      {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#eeeeee'
          }
        ]
      },
      {
        'featureType': 'poi',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#757575'
          }
        ]
      },
      {
        'featureType': 'poi.park',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#e5e5e5'
          }
        ]
      },
      {
        'featureType': 'poi.park',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#9e9e9e'
          }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#FF8B07'
          }
        ]
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#FF8B07'
          }
        ]
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#FF8B07'
          }
        ]
      },
      {
        'featureType': 'road.highway',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#616161'
          }
        ]
      },
      {
        'featureType': 'road.local',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#9e9e9e'
          }
        ]
      },
      {
        'featureType': 'transit.line',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#FFFA6D'
          }
        ]
      },
      {
        'featureType': 'transit.station',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#eeeeee'
          }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#c9c9c9'
          }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#9e9e9e'
          }
        ]
      }
    ],
            {name: 'Permit Map'});

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.612538, lng: -122.333746},
    zoom: 13,
    mapTypeControlOptions: {
      mapTypeIds: ['styled_map', 'satellite']
    }
  });

  // give styled map id
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

}

// define markers array for filters
let markers = [];
var marker;

function loadMarkers(data) {

  for (var i = 0; i < data.length; i++) {

    // format date
    let permitDate = `${data[i].application_date}`.slice(0, -13);
    // format value
    let permitValue = `${data[i].value}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    var content =
    `<h1>${data[i].permit_type}</h1>`+
    `<p>Date Issued: ${permitDate}</p>`+
    `<p>${data[i].description}</p>`+
    `<p>$${permitValue}</p>`+
    `<p>${data[i].address}</p>`;

    // add a new info window for each marker
    var infowindow = new google.maps.InfoWindow({
      content: content,
      maxWidth: 200
    });

    var coords = data[i].location.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    marker = new google.maps.Marker({
      position: latLng,
      icon: '../../img/jackhammer2.png',
      type: `${data[i].permit_type}`,
      value: `${data[i].value}`,
      map: map
    })

    // populate markers array for filters
    markers.push(marker);

    // add info window event listener to each marker
    google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
      return function() {
        infowindow.setContent(content);
        infowindow.open(map,marker);
      };
    })(marker,content,infowindow));
  }
}
