document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/cities")
    .then(res => res.json())
    .then(data => {
      printData(data)
      eventListeners(data)
    })
    
    // .then(data => console.log(data))
});

//create a function to attach event listeners to each button 
function eventListeners(data){
  const buttons = document.querySelectorAll('button[id^="button"]')
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        displayCityInfo(data[index])
    })
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
    
    
    
    //clear out previous city temp wind and wx icon
    tempElement.textContent = ""
    windElement.textContent = ""
    weatherIcon.src = ""
    
    //declare currents
    const currentTemp = city.current.temperature_2m
    const currentWind = city.current.wind_speed_10m
    const currentWeather = city.current.weather_code
    
    //Setting Weather Codes
    if (currentWeather === 0){
      weatherIcon.src = "https://i.ibb.co/1ztXVkx/sunny-day-16458.png"
    }
    if (currentWeather === 1 || 2){
      weatherIcon.src = "https://i.ibb.co/pKyB85C/sun-and-blue-cloud-16460.png"
    }
    if (currentWeather === 3){
      weatherIcon.src = "https://i.ibb.co/tLHsYN8/cloudy-weather-16459.png"
    }
    if ([61, 62, 63, 80, 81, 82].includes(currentWeather)){
      weatherIcon.src = "https://i.ibb.co/tPRxfQ2/downpour-rain-and-blue-cloud-16463.png"
    }
    if ([71, 73, 75, 85, 86].includes(currentWeather)){
      weatherIcon.src = "https://i.ibb.co/MC5mtQ7/winter-snowfall-16473.png"
    }
    if ([95, 96, 99].includes(currentWeather){
      weatherIcon.src = "https://i.ibb.co/89FPXgr/lightning-and-rainy-weather-16465.png"
    })
    
    tempElement.textContent = `${currentTemp}°`
    windElement.textContent = `${currentWind}mph`
}

function printData(data){
  //define current card
  const currentCard = document.getElementById("currentCard")
  
  
  const denver = data[0]
  const coSprings = data[1]
  const pueblo = data[2]
  const foco = data[3]
  const gj = data[4]
  //set click events for each city and use a call back
  denverButton.addEventListener('click', () => {
  
    const denverTemp = denver.current.temperature_2m
    const denverWind = denver.current.wind_speed_10m
    const denverWindDirection = denver.current.wind_direction_10m
    const denverWeatherCode = denver.current.weather_code

    currentCard.append(denverTemp)
    currentCard.append(denverWind)
    currentCard.append(denverWindDirection)
    currentCard.append(denverWeatherCode)
  })
 
  // iterate and define city data
  data.forEach(city => {
    const currentTemp = city.current.temperature_2m
    const currentWind = city.current.wind_speed_10m
    const currentWindDirection = city.current.wind_direction_10m
    const currentWeather = city.current.weather_code

    

    
  })



  

//   //grab 5 day high temperatures
//   const forecastHighs = []
//   for (let i = 0; i < 5; i++) {
//     forecastHighs.push(data.daily.temperature_2m_max[i])
//   }
 

  

}

