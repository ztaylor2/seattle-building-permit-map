'use strict';

// categories filter
$('#marker_categories').on('click', 'a', function() {
  for (let i = 0; i < markers.length; i++) {
    if (markers[i].type === $(this).text()) {
      markers[i].setVisible(true);
    } else if ($(this).text() === 'All') {
      markers[i].setVisible(true);
    } else {
      markers[i].setVisible(false);
    }
  }
})

// value filter
$('#marker_values').on('click', 'a', function(e) {
  for (let i = 0; i < markers.length; i++) {
    if (markers[i].value > parseInt(e.target.id)) {
      markers[i].setVisible(true);
    } else {
      markers[i].setVisible(false);
    }
  }
})
