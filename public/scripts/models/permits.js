'use strict';

function grabData() {
  $.ajax({
  url: 'https://data.seattle.gov/resource/i5jq-ms7b.json',
  method: 'GET',
})
  .then(console.log);
}

grabData();
