const projectVideo = 'https://youtu.be/tG2URTIwUAo'
const projectBlog = 'https://medium.com/@ldv432/weathering-the-weather-app-0d179903f7d1'
const githubLink = 'https://github.com/ldv432/Boring-Colorado-Weather'

document.addEventListener("DOMContentLoaded", () => {
  fetch('http://localhost:3000/cities')
    .then(res => res.json())
    .then(cities => eventListeners(cities))
});

//create a function to attach event listeners to each button 
function eventListeners(cities){
  const buttons = document.querySelectorAll('button')
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => displayCityInfo(cities[index]))
      button.addEventListener('mouseover', () => button.style.backgroundColor = 'green')
      button.addEventListener('mouseout', () => button.style.backgroundColor = '')
  })
}

function displayCityInfo(city){
//declare currents card elements
const locationElement = document.getElementById("location")
const tempElement = document.getElementById("temperature")
const windElement = document.getElementById("windspeed")
const weatherIcon = document.getElementById("weatherIcon")

//use set of ternary operators to distinguish cities
locationElement.textContent =
city.id === 1 ? "Denver" :
city.id === 2 ? "Colorado Springs" :
city.id === 3 ? "Pueblo" :
city.id === 4 ? "Fort Collins" :
city.id === 5 ? "Grand Junction" : ""

//declare currents
const currentTemp = parseInt(((city.current.temperature_2m) * 9/5) + 32)
const currentWind = parseInt(city.current.wind_speed_10m/1.609)
const currentWeather = city.current.weather_code

//Setting Weather Codes
if (currentWeather === 0){
  weatherIcon.src = "https://i.ibb.co/1ztXVkx/sunny-day-16458.png"
}
else if (currentWeather === 1 || currentWeather === 2){
  weatherIcon.src = "https://i.ibb.co/pKyB85C/sun-and-blue-cloud-16460.png"
}
else if (currentWeather === 3){
  weatherIcon.src = "https://i.ibb.co/tLHsYN8/cloudy-weather-16459.png"
}
else if ([61, 62, 63, 80, 81, 82].includes(currentWeather)){
  weatherIcon.src = "https://i.ibb.co/tPRxfQ2/downpour-rain-and-blue-cloud-16463.png"
}
else if ([71, 73, 75, 85, 86].includes(currentWeather)){
  weatherIcon.src = "https://i.ibb.co/MC5mtQ7/winter-snowfall-16473.png"
}
else if ([95, 96, 99].includes(currentWeather)){
  weatherIcon.src = "https://i.ibb.co/89FPXgr/lightning-and-rainy-weather-16465.png"
}



//clear out previous city temp wind and wx icon
tempElement.textContent = ""
windElement.textContent = ""

//setting temp and wind text content display on currents card
tempElement.textContent = `${currentTemp}°`
windElement.textContent = `${currentWind} mph`
}