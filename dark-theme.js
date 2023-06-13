const wrapper = document.querySelector('.wrapper');
const search = document.querySelector('.search');
const container = document.querySelector('.container');
const icon = document.querySelector('.result.weather-icon');
const checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('change', e => {
  e.preventDefault();
  container.classList.toggle('theme-dark');
  icon.classList.toggle('filter-dark');
  search.classList.toggle('filter-dark');
  wrapper.classList.toggle('bg-dark');
});
