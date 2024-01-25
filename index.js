document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/cities")
    .then(res => res.json())
    .then(data => 
      eventListeners(data))
    
    // .then(data => console.log(data))
});

//create a function to attach event listeners to each button 
function eventListeners(data){
  const buttons = document.querySelectorAll('button[id^="button"]') //fancy way of grabbing all buttons with an ID that starts with the word buttongit 
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => displayCityInfo(data[index]))
      button.addEventListener('mouseover', () => button.style.backgroundColor = 'red')
      button.addEventListener('mouseout', () => button.style.backgroundColor = '')
  })
}

function displayCityInfo(city){
//declare currents card elements
const locationElement = document.getElementById("location")
const tempElement = document.getElementById("temperature")
const windElement = document.getElementById("windspeed")
const weatherIcon = document.getElementById("weatherIcon")

//set size of weather icon so it fits currents card
weatherIcon.style.width = "75px"
weatherIcon.style.height = "75px"

//use set of ternary operators to distinguish cities
locationElement.textContent =
city.id === 1 ? "Denver" :
city.id === 2 ? "Colorado Springs" :
city.id === 3 ? "Pueblo" :
city.id === 4 ? "Fort Collins" :
city.id === 5 ? "Grand Junction" : ""
  
//clear out previous city temp wind and wx icon
tempElement.textContent = ""
windElement.textContent = ""
weatherIcon.src = ""

//declare currents
const currentTemp = parseInt(((city.current.temperature_2m * (9/5)) + 32))
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

//setting temp and wind text content display on currents card
tempElement.textContent = `${currentTemp}°`
windElement.textContent = `${currentWind} mph`

//declare & render forecast elements

//declare forecast variables

forecastCode = city.daily.weather_code

if (forecastCode === 0){
  weatherIcon.src = "https://i.ibb.co/1ztXVkx/sunny-day-16458.png"
}
else if (forecastCode === 1 || forecastCode === 2){
  weatherIcon.src = "https://i.ibb.co/pKyB85C/sun-and-blue-cloud-16460.png"
}
else if (forecastCode === 3){
  weatherIcon.src = "https://i.ibb.co/tLHsYN8/cloudy-weather-16459.png"
}
else if ([61, 62, 63, 80, 81, 82].includes(forecastCode)){
  weatherIcon.src = "https://i.ibb.co/tPRxfQ2/downpour-rain-and-blue-cloud-16463.png"
}
else if ([71, 73, 75, 85, 86].includes(forecastCode)){
  weatherIcon.src = "https://i.ibb.co/MC5mtQ7/winter-snowfall-16473.png"
}
else if ([95, 96, 99].includes(forecastCode)){
  weatherIcon.src = "https://i.ibb.co/89FPXgr/lightning-and-rainy-weather-16465.png"
}




//day1
const day1high = document.getElementById("day1high")
const day1low = document.getElementById("day1low")
const day1code = document.getElementById("day1code")
console.log(day1code.src = forecastCode[0])
day1high.textContent = parseInt((city.daily.temperature_2m_max[0]) * 9/5) + 32
day1low.textContent = parseInt((city.daily.temperature_2m_min[0]) * 9/5) + 32


//day2
const day2high = document.getElementById("day2high")
const day2low = document.getElementById("day2low")
const day2code = document.getElementById("day2code")


//day3
const day3high = document.getElementById("day3high")
const day3low = document.getElementById("day3low")
const day3code = document.getElementById("day3code")

//day4
const day4high = document.getElementById("day4high")
const day4low = document.getElementById("day4low")
const day4code = document.getElementById("day4code")

//day5
const day5high = document.getElementById("day5high")
const day5low = document.getElementById("day5low")
const day5code = document.getElementById("day5code")

}