const API =
  location.protocol === 'http:'
    ? 'http://dataservice.accuweather.com'
    : 'https://dataservice.accuweather.com';

const key = '7mrOGHxhz3eBJLYvg2hngLwMsBGxyg4T';

export const getCity = async city => {
  const res = await fetch(
    `/locations/v1/cities/search?apikey=${key}&q=${city}&details=true`
  );
  const data = await res.json();
  return data[0];
};

export const getWeather = async id => {
  const res = await fetch(
    `/currentconditions/v1/${id}?apikey=${key}&details=true`
  );
  const data = res.json();
  return data[0];
};
