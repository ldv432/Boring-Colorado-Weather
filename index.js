document.addEventListener("DOMContentLoaded", () => {});

const apiUrl = "https://api.open-meteo.com/v1/forecast"
const wxUrlVariables = "current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max"
const locations = [
  { name: 'Denver', coords: "latitude=39.7392&longitude=-104.9847" },
  { name: 'Colorado Springs', coords: "latitude=38.8339&longitude=-104.8214" },
  { name: 'Pueblo', coords: "latitude=38.2544&longitude=-104.6091" },
  { name: 'Fort Collins', coords: "latitude=40.5853&longitude=-105.0844" },
  { name: 'Grand Junction', coords: "latitude=39.0639&longitude=-108.5507" }
];


//Weather Data Fetch
const wxFetch = (location) => {
  fetch(`${apiUrl}?${location.coords}&${wxUrlVariables}`)
  .then(res => res.json())
  .then(data => printData(data))
  // .then(data => console.log(data))
}


locations.forEach(location => wxFetch(location));


function printData(data){
  //declare currents
  const currentData = data.current
  const currentTemp = currentData.temperature_2m
  const currentWind = currentData.wind_speed_10m
  const currentWeather = currentData.weather_code
  const currentCard = document.getElementById("currentCard")


  

  //declare forecast variables
  const forecastHighs = []
  for (let i = 0; i < 5; i++) {
    forecastHighs.push(data.daily.temperature_2m_max[i])
  }
 

  
  console.log(forecastHighs)
}

