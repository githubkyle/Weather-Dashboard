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
      if (!response.ok) {
        throw new Error("Network Error");
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);

      var Temp = document.querySelector("#temp");
      var Wind = document.querySelector("#wind");
      var Humidity = document.querySelector("#humidity");

      Temp.textContent = data.main.temp + "°F";
      Wind.textContent = data.wind.speed + "mph";
      Humidity.textContent = data.main.humidity + "°F";

      PutBoxesHere.append(Temp);
      PutBoxesHere.append(Wind);
      PutBoxesHere.append(Humidity);

      history.push(city);
    });
  localStorage.setItem("history", history);
  //sun, temp, wind, humidity
}
var SearchHistory = document.getElementById("searchHistory");
SearchHistory.innerHTML = localStorage.getItem(history);

function AllForecast() {
  fetch(requestUrlToday)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Network Error");
      }
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      for (let i = 0; i < 5; i++) {
        console.log(data[i]);

        var Temp = document.querySelector("#temp" + i);
        var Wind = document.querySelector("#wind" + i);
        var Humidity = document.querySelector("#humidity" + i);

        Temp.textContent = data.list[i].main.temp + "°F";
        Wind.textContent = data.list[i].wind.speed + "mph";
        Humidity.textContent = data.list[i].main.humidity + "°F";

        userContainer.append(Temp);
        userContainer.append(Wind);
        userContainer.append(Humidity);
      }
    });
}
var Searcher = document.getElementById("searcher");
Searcher.addEventListener("click", Fetcher);

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
