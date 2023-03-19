function Fetcher() {
  var Key = "4f532c03f12a6d8603036fbfb4f2b105";
  var BaseURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    Key;
  var lat = 32.7;
  var lon = 96.7;
  var history = [];
  var city = document.getElementById("cityName").val;
  var PutBoxesHere = document.getElementById("boxContainer");
  var userContainer = document.getElementById("display");
  var fetchButton = document.getElementById("fetch-button");
  var requestUrlToday =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    Key +
    "&units=imperial";
  var TestURL =
    "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + Key;

  var Fifth = `https://api.openweathermap.org/data/2.5/forecast?lat=32.7&lon=96.8&appid=4f532c03f12a6d8603036fbfb4f2b105`;

  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    Key;

  fetch(requestUrlToday)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      for (i = 0; i < 5; i++) {
        console.log(data[i]);

        var Sunshine = document.createElement("h3");
        var Temp = document.createElement("h3");
        var Wind = document.createElement("h3");
        var Humidity = document.createElement("h3");

        // Sunshine.textContent = data[i].sun;
        // Temp.textContent = data[i].temp;
        // Wind.textContent = data[i].wind;
        // Humidty.textContent = data[i].humidity;
        // PutBoxesHere.append(Sunshine);
        // PutBoxesHere.append(Temp);
        // PutBoxesHere.append(Wind);
        // PutBoxesHere.append(Humidity);
      }
      history.push(city);
    });
  localStorage.setItem("history", history);
  //sun, temp, wind, humidity
}
var SearchHistory = document.getElementById("searchHistory");
SearchHistory.innerHTML = localStorage.getItem(history);
var Searcher = document.getElementById("searcher");

// function getApi() {
//   var requestUrl = "https://api.github.com/users?per_page=5";

//   fetch(requestUrl)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       // Use the console to examine the response
//       console.log(data);
//       // TODO: Loop through the response
//       for (i = 0; i < 5; i++) {
//         console.log(data[i].url);

//         var userName = document.createElement("h3");
//         var issueTitle = document.createElement("p");
//         userName.textContent = data[i].login;
//         issueTitle.textContent = data[i].url;
//         userContainer.append(userName);
//         userContainer.append(issueTitle);
//       }
//       // TODO: Loop through the data and generate your HTML
//     });
// }

Searcher.addEventListener("click", Fetcher);
