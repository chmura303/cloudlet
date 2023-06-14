import { getCity, getWeather } from './forecast.js';

// form
const form = document.querySelector('#form');
const input = document.querySelector('#input');

// current
const current = document.querySelector('.current');
const name = document.querySelector('.result.english-name');
const temp = document.querySelector('.result.temperature');
const text = document.querySelector('.result.weather-text');
const icon = document.querySelector('.result.weather-icon');

// conditions
const conditions = document.querySelector('.conditions');
const feels = document.querySelector('.result.feels');
const pressure = document.querySelector('.result.pressure');
const wind = document.querySelector('.result.wind');
const fall = document.querySelector('.result.fall');
const uv = document.querySelector('.result.uv');
const visibility = document.querySelector('.result.visibility');

// welcome message, 404 page, theme switch
const welcome = document.querySelector('.welcome');
const notFound = document.querySelector('.not-found');
const themeSwitch = document.querySelector('.switch');

// submit event
form.addEventListener('submit', e => {
  e.preventDefault();

  const city = input.value.trim();

  getCity(city)
    .then(data => {
      name.textContent = `${data.EnglishName}, ${data.Country.ID}`;
      return getWeather(data.Key);
    })
    .then(data => {
      text.textContent = data.WeatherText;
      icon.textContent = data.WeatherIcon;
      temp.textContent = data.Temperature.Metric.Value;

      feels.textContent = data.RealFeelTemperature.Metric.Value;
      pressure.textContent = data.Pressure.Metric.Value;
      wind.textContent = data.Wind.Speed.Imperial.Value;

      fall.textContent = data.PrecipitationSummary.Precipitation.Imperial.Value;
      uv.textContent = data.UVIndex;
      visibility.textContent = data.Visibility.Imperial.Value;

      const num = data.WeatherIcon;
      const path = '<img src="./img/weather-dark/';

      if (num <= 2) {
        icon.innerHTML = `${path}sun.png" />`;
      } else if (num === 3 || num === 4) {
        icon.innerHTML = `${path}day-partly-cloudy.png" />`;
      } else if (num === 5) {
        icon.innerHTML = `${path}day-fog.png" />`;
      } else if (num >= 6 && num <= 11) {
        icon.innerHTML = `${path}cloud.png" />`;
      } else if (num === 12 || num === 13) {
        icon.innerHTML = `${path}rain.png" />`;
      } else if (num === 14) {
        icon.innerHTML = `${path}sun-and-rain.png" />`;
      } else if (num >= 15 && num <= 18) {
        icon.innerHTML = `${path}storm.png" />`;
      } else if (num >= 19 && num <= 23) {
        icon.innerHTML = `${path}snow.png" />`;
      } else if (num === 24) {
        icon.innerHTML = `${path}icy.png" />`;
      } else if (num >= 25 && num <= 29) {
        icon.innerHTML = `${path}sleet.png" />`;
      } else if (num === 30) {
        icon.innerHTML = `${path}hot.png" />`;
      } else if (num === 31) {
        icon.innerHTML = `${path}cold.png" />`;
      } else if (num === 32) {
        icon.innerHTML = `${path}wind.png" />`;
      } else if (num === 33 || num === 34) {
        icon.innerHTML = `${path}moon.png" />`;
      } else if (num === 35 || num === 36) {
        icon.innerHTML = `${path}night-partly-cloudy.png" />`;
      } else if (num === 37) {
        icon.innerHTML = `${path}night-fog.png" />`;
      } else if (num === 38 || num === 39) {
        icon.innerHTML = `${path}cloud.png" />`;
      } else if (num === 39 || num === 40) {
        icon.innerHTML = `${path}rain.png" />`;
      } else if (num === 41 || num === 42) {
        icon.innerHTML = `${path}storm.png" />`;
      } else if (num >= 43) {
        icon.innerHTML = `${path}snow.png" />`;
      } else {
        icon.innerHTML = '';
      }
    })
    .catch(err => {
      console.log(err);
      current.style.display = 'none';
      conditions.style.display = 'none';
      themeSwitch.style.display = 'none';

      notFound.style.display = 'block';
      welcome.style.display = 'none';
    });

  current.style.display = 'block';
  conditions.style.display = 'grid';
  themeSwitch.style.display = 'block';
  welcome.style.display = 'none';
  notFound.style.display = 'none';

  form.reset();
});
