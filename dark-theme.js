const wrapper = document.querySelector('.wrapper');
const search = document.querySelector('.search');
const container = document.querySelector('.container');
const image = document.querySelector('.image');
const checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('change', e => {
  e.preventDefault();
  container.classList.toggle('theme-dark');
  image.classList.toggle('filter-dark');
  search.classList.toggle('filter-dark');
  wrapper.classList.toggle('bg-dark');
});
