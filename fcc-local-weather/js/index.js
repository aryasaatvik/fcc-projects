$(document).ready(function() {
  $("#getWeather").on("click", getWeather);
  $("#switchUnits").on("click", switchUnits);
});

// User Story: I can see the weather in my current location DONE
// User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather. DONE
// User Story: I can push a button to toggle between Fahrenheit and Celsius. DONE
var units = "us";
var unitText = ["Fahrenheit", "mph"];
// var darkskyAPI = "../darksky.json"

var darkskyAPI = "https://crossorigin.me/https://api.darksky.net/forecast/d19c6a96ac943db7bb9987a95ebb7598/";
var darkskyUnit = "?units=" + units;

$("#getWeather").addClass("disabled"); 
navigator.geolocation.getCurrentPosition(function(position) {
  darkskyAPI = darkskyAPI + position.coords.latitude + "," + position.coords.longitude;
  getWeather();
  $("#getWeather").removeClass("disabled"); 
});

var skycons = new Skycons({"color": "black"});
skycons.add("skycon-icon", Skycons.CLEAR_DAY);
skycons.play();

function getWeather() {
  $.getJSON(darkskyAPI + darkskyUnit, function(json) {
    $("#getWeather").addClass("disabled"); 
    document.getElementById('summary').innerHTML = "<strong> Summary: </strong>" + json.hourly.summary;
    document.getElementById('temperature').innerHTML = '<i class="wi wi-thermometer"></i>' + "  <strong>Temperature: </strong>" + json.currently.temperature + " " + unitText[0];
    document.getElementById('precipitation').innerHTML = '<i class="wi wi-raindrop"></i>' + "  <strong>Precipitation: </strong>" + json.currently.precipIntensity;
    document.getElementById('humidity').innerHTML = '<i class="wi wi-humidity"></i>' + "  <strong>Humidity: </strong>" + (json.currently.humidity * 100) + "%" ;
    document.getElementById('wind').innerHTML = '<i class="wi wi-windy"></i>' + "  <strong>Wind: </strong>" + json.currently.windSpeed + " " + unitText[1];
    var icon = json.currently.icon;
    icon = icon.toUpperCase().split("-").join("_");
    icon = "Skycons." + icon;
    var bool = typeof icon;
    console.log(bool);
    skycons.set("skycon-icon", eval(icon));
    $("#getWeather").removeClass("disabled"); 
  });
}

function switchUnits() {
  if(units == "us") {
    units = "si";
    darkskyUnit = "?units=" + units;
    unitText = ["Celsius", "kmph"];
    document.getElementById('switchUnits').innerHTML = "Switch to Fahrenheit";
    getWeather();

  }
  else if (units == "si") {
    units = "us";
    darkskyUnit = "?units=" + units;
    unitText = ["Fahrenheit", "mph"];
    document.getElementById('switchUnits').innerHTML = "Switch to Celsius";
    getWeather();
  }
}
