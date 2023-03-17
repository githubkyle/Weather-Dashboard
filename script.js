var BaseURL = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=4f532c03f12a6d8603036fbfb4f2b105`;
var city = "Beijing";
var Key = "4f532c03f12a6d8603036fbfb4f2b105";
var TestURL =
  "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + Key;
  var 2ndTestURL = "api.openweathermap.org/data/2.5/forecast?id=524901&appid=" + Key;
function Fetcher(URL) {
  fetch(2ndTestURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
}
var Searcher = document.getElementById("searcher");
Searcher.addEventListener("click", Fetcher());
