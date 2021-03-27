"use strict";

/*weather api*/
$(document).ready(function getWeather() {
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=69abe2b2fb7877e26a77c1a7747874e9&units=metric", function (data) {
    /*variables*/
    var $currentTemp = data.main.temp;
    var $minTemp = data.main.temp_min;
    var $maxTemp = data.main.temp_max;
    var $weatherIcon = data.weather[0].icon;
    $(".search_content").append('<img alt="weather icon" class="weather_icon" src="http://openweathermap.org/img/wn/' + $weatherIcon + '@2x.png">', '<p class="title">' + $currentTemp.toFixed(1) + 'º</p>' + '<span class="min_temp">' + $minTemp + '.0º</span>' + '<span class="max_temp">' + $maxTemp + '.0º</span>' + '<span>서울</span>');
  });
});