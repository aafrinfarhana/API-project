function getWeather() {
const cityInput = document.getElementById("city");
const result = document.getElementById("weatherResult");

if(!cityInput) {
console.error("City input field not found!");
return;
}

const city = cityInput.value.trim();

if(city === "") {
alert("Please enter a city name");
return;
}

const apiKey = "acd9f7d274d289f9d8351ffff89e65d1";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

fetch(url)
.then(res => res.json())
.then(data => {
if(data.cod !== 200) {
result.innerHTML = "City not found";
return;
}

result.innerHTML = `  
    <h3>${data.name}, ${data.sys.country}</h3>  
    <p>🌡 Temperature: ${data.main.temp} °C</p>  
    <p>☁ Weather: ${data.weather[0].description}</p>  
    <p>💨 Wind: ${data.wind.speed} m/s</p>  
    <p>💧 Humidity: ${data.main.humidity}%</p>  
  `;  
})  
.catch(error => {  
  console.error(error);  
  alert("Network error!");  
});

}