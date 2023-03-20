function Fetcher() {
  var Key = "4f532c03f12a6d8603036fbfb4f2b105";

  var history = [];
  var city = document.getElementById("cityName").value;
  var PutBoxesHere = document.getElementById("boxContainer");
  var userContainer = document.getElementById("display");
  var fetchButton = document.getElementById("fetch-button");
  var requestUrlToday =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    Key +
    "&units=imperial";

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

        Sunshine.textContent = data[i].weather.icon;
        Temp.textContent = data[i].main.temp;
        Wind.textContent = data[i].wind.speed;
        Humidity.textContent = data[i].main.humidity;
        PutBoxesHere.append(Sunshine);
        PutBoxesHere.append(Temp);
        PutBoxesHere.append(Wind);
        PutBoxesHere.append(Humidity);
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
