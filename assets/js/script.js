var searchFormEl = document.querySelector("#user-form");
var cityNameInputEl = document.querySelector("#city-name");
var currentWeatherContainerEl = document.querySelector("#current-weather");
var fiveDaySearchTerm = document.querySelector("#five-day");

var getCityName = function(cityName) {
    var apiUrl = "http://api.openweathermap.org/geo/1.0/reverse?lat=" + lat + "&lon=" + lon + "&appid=appid=19a893b5ecc620220fec7cb9fb804164";

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
          response.json().then(function(data) {
            displayCity(data, city);
          });
        } else {
          alert("Please Enter a City Name");
        }
      })
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    //get value from input element
    var cityName = cityNameInputEl.value.trim();

    if (cityName) {
        getCityName(cityName);
        nameInputEl.value = "";
    } else {
        alert("Please Enter a City Name");
    }
    console.log(event);
};