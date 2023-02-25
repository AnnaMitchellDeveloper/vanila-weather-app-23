function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
	hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}${hours}:${minutes}`;
}

function displayTemperature(responce) {
  console.log(responce.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(responce.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = responce.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement = responce.data.weather[0].main;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = responce.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(responce.data.wind.speed);
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(responce.data.dt * 1000);
}

let apiKey = "7e2628686c212c4bf190971af97349ff";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
