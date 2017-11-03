var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var conditionsObj;
var forecastObj;

weatherConditions.open('GET','http://api.wunderground.com/api/401111437823823b/conditions/q/75023.json',true);
weatherConditions.responseType = "text";
weatherConditions.onload = function()
{
	if(weatherConditions.status === 200)
	{
		conditionsObj = JSON.parse(weatherConditions.responseText);
		console.log(conditionsObj);

		document.getElementById('location').innerHTML = conditionsObj.current_observation.display_location.full;
		document.getElementById('weather').innerHTML = conditionsObj.current_observation.weather;
		document.getElementById('temperature').innerHTML = conditionsObj.current_observation.temp_f;

	}
}
weatherConditions.send();

weatherForecast.open('GET','http://api.wunderground.com/api/401111437823823b/forecast/q/75023.json',true);
weatherForecast.responseType = "text";
weatherForecast.onload = function()
{
	if(weatherForecast.status === 200)
	{
		forecastObj = JSON.parse(weatherForecast.responseText);
		console.log(forecastObj); 
		document.getElementById('summary').innerHTML = forecastObj.forecast.txt_forecast.forecastday['0'].fcttext;
		document.getElementById('day1').innerHTML = forecastObj.forecast.simpleforecast.forecastday[1].date.weekday; 

		document.getElementById('day2').innerHTML = forecastObj.forecast.simpleforecast.forecastday[2].date.weekday;
		
		document.getElementById('day3').innerHTML = forecastObj.forecast.simpleforecast.forecastday[3].date.weekday; 
	}
}
weatherForecast.send();