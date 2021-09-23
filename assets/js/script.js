function myFunction() {
  // Create a variable called `searchTerm` that will use `document.querySelector()` to target the `id` of the input
  // Use `.value` to capture the value of the input and store it in the variable
  var searchTerm = document.querySelector('#searchTerm').value;

  fetch(
    'http://api.openweathermap.org/geo/1.0/direct?q=' + searchTerm + ',US&limit=1&appid=19a893b5ecc620220fec7cb9fb804164'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      console.log(data[0]);

      var lat = data[0].lat
      var lon = data[0].lon
      // Create a variable that will select the <div> where the GIF will be displayed

      var responseContainerEl = document.querySelector('#response-container');

      var oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" +lon +"&appid=19a893b5ecc620220fec7cb9fb804164"
      fetch(oneCall)
        .then(function (response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data)

          
        })
    });
}

//




//

var searchBtn = document.querySelector("#searchBtn")

searchBtn.addEventListener('click', myFunction)