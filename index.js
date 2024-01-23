document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/cities")
    .then(res => res.json())
    .then(data => printData(data))
    // .then(data => console.log(data))
});

function printData(data){
  // iterate and define city data
  data.forEach(city => {
    const currentTemp = city.current.temperature_2m
    const currentWind = city.current.wind_speed_10m
    const currentWindDirection = city.current.wind_direction_10m
    const currentWeather = city.current.weather_code
  })



  

  //grab 5 day high temperatures
  const forecastHighs = []
  for (let i = 0; i < 5; i++) {
    forecastHighs.push(data.daily.temperature_2m_max[i])
  }
 

  

}

