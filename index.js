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

