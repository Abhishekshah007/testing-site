fetch('https://www.hebcal.com/shabbat?cfg=json&geonameid=3448439&M=on')
  .then(response => response.json())
  .then(data => {
    // Extract the candle lighting time from the API response
  var candle_lighting = data['items'][0]['title']
var havdalah = data['items'][3]['title']
    const candleLightingTime = data.items[0].title;

    // Display the candle lighting time in HTML
    const shabbatTimeElement = document.getElementById('shabbat-time');
    shabbatTimeElement.innerHTML =  `Shabbat time starts at ${candle_lighting} and ends at ${havdalah}`;
  })
  .catch(error => {
    console.error('Error fetching Shabbat times:', error);
  });