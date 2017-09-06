'use strict';

// categories filter
$('#marker_categories').on('click', 'a', function() {
  for (let i = 0; i < markers.length; i++) {
    marker = markers[i];
    if (marker.type === $(this).text()) {
      marker.setVisible(true);
    }
    else {
      marker.setVisible(false);
    }
  }
})

$('#marker_values').on('click', 'a', function(e) {
  console.log(e.target.id);
  for (let i = 0; i < markers.length; i++) {
    marker = markers[i];
    if (marker.value > parseInt(e.target.id)) {
      marker.setVisible(true);
    }
    // Categories don't match
    else {
      marker.setVisible(false);
    }
  }
})
