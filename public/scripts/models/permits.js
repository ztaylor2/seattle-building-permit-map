'use strict';

var app = app || {};

(function(module) {
  const Permits = {};

  Permits.grabData = function() {
    $.ajax({
      url: 'https://data.seattle.gov/resource/k44w-2dcq.json',
      method: 'GET',
    })
    .then(data => data.filter(coord => coord.location !== undefined)).then(loadMarkers);
  }

  module.Permits = Permits;
})(app);
