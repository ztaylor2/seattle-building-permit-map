'use strict';

$('.dropdown-content').on('click', 'a', function() {
  for (let i = 0; i < markers.length; i++) {
    marker = markers[i];
    // If is same type or type not picked
    if (marker.type === $(this).text()) {
      marker.setVisible(true);
    }
    // Categories don't match
    else {
      marker.setVisible(false);
    }
  }
})
