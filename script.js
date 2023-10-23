const apikey = "46f80a02ecae410460d59960ded6e1c6";

const weatherDataEl = document.querySelector(".info");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const windSpeed = data.wind.speed;

    document.querySelector(".kota").textContent = cityValue;
    document.querySelector(".kondisi").textContent = description;
    document.querySelector(".temperatur").textContent = `${temperature}°C`;
    document.querySelector(".kecepatan-angin").textContent = `${windSpeed} m/s`;
  } catch (error) {
    console.error(error);
    document.querySelector(".kota").textContent = "Error";
    document.querySelector(".kondisi").textContent = "An error occurred, please try again later.";
    document.querySelector(".temperatur").textContent = "";
    document.querySelector(".kecepatan-angin").textContent = "";
  }
}
