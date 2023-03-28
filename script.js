var history1 = [];
var currentlyCity = document.querySelector("#currentCity");
var PutBoxesHere = document.getElementById("boxContainer");
var userContainer = document.getElementById("display");
var fetchButton = document.getElementById("fetch-button");
var BigCity = document.querySelector("#chosenCity");
var city = document.getElementById("cityName").value;
function Fetcher() {
  var city = document.getElementById("cityName").value;
  var Key = "4f532c03f12a6d8603036fbfb4f2b105";
  var requestUrlToday =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
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
      for (let i = 0; i < 5; i++) {
        console.log(data.list[i]);
        var dateToday = dayjs.unix(data.list[i].dt);
        date = document.querySelector("#date" + i);
        var IconPlace = document.querySelector("#Iconic" + i);
        var Temp = document.querySelector("#temp" + i);
        var Wind = document.querySelector("#wind" + i);
        var Humidity = document.querySelector("#humidity" + i);
        var IconElement = document.createElement("img");
        var iconUrl =
          "http://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";

        // IconElement = iconUrl;
        IconElement.setAttribute("src", iconUrl);
        date.textContent = dateToday.format("dddd MM/DD/YYYY");
        Temp.textContent = data.list[i].main.temp + "°F";
        Wind.textContent = data.list[i].wind.speed + "mph";
        Humidity.textContent = data.list[i].main.humidity + "°F";
        IconPlace.appendChild(IconElement);
      }
      history1.push(" " + city);
      localStorage.setItem("history", history1);
      var SearchHistory = document.getElementById("searchHistory");
      SearchHistory.innerHTML = localStorage.getItem("history");
      // currentlyCity.value = city;
      BigCity.innerHTML = localStorage.getItem("history");
    });
}

var Searcher = document.getElementById("searcher");
Searcher.addEventListener("click", Fetcher);
var CityTextBox = document.querySelector("#cityName");
CityTextBox.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    Searcher.click();
    city.value = "";
  }
});
