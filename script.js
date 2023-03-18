var BaseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=` + Key;
var lat = ???;
var lon = ???;
var history = [];
var CurrentCity = document.getElementById("cityName").val;
var city = "Dallas";
var Key = "4f532c03f12a6d8603036fbfb4f2b105";
var TestURL =
  "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + Key;
  var 2ndTestURL = "api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + Key;
  var 5th = `https://api.openweathermap.org/data/2.5/forecast?lat=32.7&lon=96.8&appid=4f532c03f12a6d8603036fbfb4f2b105`;

  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + Key;
function Fetcher() {
  fetch(queryURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      history.push(CurrentCity);
    });
}
var SearchHistory = document.getElementById("searchHistory");
SearchHistory.innerHTML = history;
var Searcher = document.getElementById("searcher");
Searcher.addEventListener("click", Fetcher);
