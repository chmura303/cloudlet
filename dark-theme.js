const wrapper = document.querySelector('.wrapper');
const search = document.querySelector('.search');
const searchIcon = document.querySelector('.search-icon');
const container = document.querySelector('.container');
const icon = document.querySelector('.result.weather-icon');
const checkbox = document.querySelector('.checkbox');
const error404 = document.querySelector('.error-404');

checkbox.addEventListener('change', e => {
  e.preventDefault();
  container.classList.toggle('theme-dark');
  container.classList.toggle('container-dark');
  icon.classList.toggle('filter-dark');
  search.classList.toggle('filter-dark');
  searchIcon.classList.toggle('filter-dark');
  wrapper.classList.toggle('bg-dark');
  error404.classList.toggle('filter-dark');
});
