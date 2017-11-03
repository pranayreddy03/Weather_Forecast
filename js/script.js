var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var conditionsObj;
var forecastObj;
function loadWeather()
{
	var zip = document.getElementById('zip').value;
	weatherConditions.open('GET','http://api.wunderground.com/api/401111437823823b/conditions/q/'+ zip + '.json',true);
	weatherConditions.responseType = 'text';
	weatherConditions.send(null);
	weatherForecast.open('GET','http://api.wunderground.com/api/401111437823823b/forecast/q/'+ zip + '.json',true);
	weatherForecast.responseType = 'text';
	weatherForecast.send(); 
}
weatherConditions.onload = function()
{
	if(weatherConditions.status === 200)
	{
		conditionsObj = JSON.parse(weatherConditions.responseText);
		console.log(conditionsObj);
		document.getElementById('location').innerHTML = conditionsObj.current_observation.display_location.full;
		document.getElementById('weather').innerHTML = conditionsObj.current_observation.weather;
		document.getElementById('temperature').innerHTML = conditionsObj.current_observation.temp_f + "&deg";
	}
}
weatherForecast.onload = function()
{
	if(weatherForecast.status === 200)
	{
		forecastObj = JSON.parse(weatherForecast.responseText);
		console.log(forecastObj); 
		document.getElementById('summary').innerHTML = forecastObj.forecast.txt_forecast.forecastday['0'].fcttext;
		document.getElementById('day1').innerHTML = forecastObj.forecast.simpleforecast.forecastday[1].date.weekday; 
		document.getElementById('max1').innerHTML = forecastObj.forecast.simpleforecast.forecastday[1].high.fahrenheit + "&deg";
		document.getElementById('min1').innerHTML = forecastObj.forecast.simpleforecast.forecastday[1].low.fahrenheit + "&deg"; 
        var icon1 = forecastObj.forecast.simpleforecast.forecastday[1].icon_url;                                                  
		document.getElementById('icon1').src = icon1; 
		document.getElementById('day2').innerHTML = forecastObj.forecast.simpleforecast.forecastday[2].date.weekday;
		document.getElementById('max2').innerHTML = forecastObj.forecast.simpleforecast.forecastday[2].high.fahrenheit + "&deg";
		document.getElementById('min2').innerHTML = forecastObj.forecast.simpleforecast.forecastday[2].low.fahrenheit + "&deg";
		var icon2 = forecastObj.forecast.simpleforecast.forecastday[2].icon_url;                                                  
		document.getElementById('icon2').src = icon2; 
		document.getElementById('day3').innerHTML = forecastObj.forecast.simpleforecast.forecastday[3].date.weekday;
		document.getElementById('max3').innerHTML = forecastObj.forecast.simpleforecast.forecastday[3].high.fahrenheit + "&deg";
		document.getElementById('min3').innerHTML = forecastObj.forecast.simpleforecast.forecastday[3].low.fahrenheit + "&deg"; 
		var icon3 = forecastObj.forecast.simpleforecast.forecastday[3].icon_url;                                                  
		document.getElementById('icon3').src = icon3;
	}
}
