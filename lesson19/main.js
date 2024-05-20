"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const upload = document.querySelector(".js__upload");
  const apiKey = "7c5c813588a3b541ac4051781797fcf3";
  const lat = 46.4775;
  const lon = 30.7326;
  const units = "metric";
  const lang = "uk";

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString("uk-UA", {
      month: "long",
      day: "numeric",
      weekday: "long",
      year: "numeric",
    });
  };

  const getResponse = (res) => {
    return res.json();
  };

  const getData = (data) => {
    document.querySelector(".js__weather-widget").innerHTML = `
      <div class="column">
        <h2 class="name">Погода в ${data.name}</h2>
        <p class="datetime">${getCurrentDate()}</p>
        <p class="speed">Швидкість вітру: ${data.wind.speed} м/с</p>
        <p class="humidity">Вологість: ${data.main.humidity}%</p>
      </div>
      <div class="column">
        <p class="temp">${data.main.temp} °C</p>
        <p class="feels_like">Відчувається як: ${data.main.feels_like} °C</p>
        <p class="description">${data.weather[0].description}</p>

      </div>
    `;
    upload.style.display = "block";
  };

  // by fetch
  // const fetchWeather = () => {
  // fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`
  // )
  //   .then(getResponse)
  //   .then(getData)
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  // };

  // by async await
  async function fetchWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}&lang=${lang}`
    );
    if (response.status === 200) {
      const data = await response.json();
      getData(data);
    }
  }

  fetchWeather();

  upload.addEventListener("click", fetchWeather);
});
