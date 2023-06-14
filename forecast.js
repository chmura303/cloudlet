const API =
  location.protocol === 'http:'
    ? 'http://dataservice.accuweather.com'
    : 'https://dataservice.accuweather.com';

const key = 'AfQHEBF7Evm1JcRwVAEoVt5tMGT92w6v';

export const getCity = async city => {
  const res = await fetch(
    `${API}/locations/v1/cities/search?apikey=${key}&q=${city}&details=true`
  );
  const data = await res.json();
  return data[0];
};

export const getWeather = async id => {
  const res = await fetch(
    `${API}/currentconditions/v1/${id}?apikey=${key}&details=true`
  );
  const data = await res.json();
  return data[0];
};
