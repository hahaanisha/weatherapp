const cities = ['Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'Ahmedabad'];
const apiKey = '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864';
const apiHost = 'weather-by-api-ninjas.p.rapidapi.com';

const fetchWeather = (city) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  };

  return fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

const populateWeather = (data, city) => {
  if (city === 'Mumbai') {
    document.getElementById('humidity').innerText = data.humidity;
    document.getElementById('humidity2').innerText = data.humidity;
    document.getElementById('max_temp').innerText = data.max_temp;
    document.getElementById('min_temp').innerText = data.min_temp;
    document.getElementById('sunrise').innerText = data.sunrise;
    document.getElementById('sunset').innerText = data.sunset;
    document.getElementById('wind_degrees').innerText = data.wind_degrees;
    document.getElementById('temp').innerText = data.temp;
    document.getElementById('temp2').innerText = data.temp;
    document.getElementById('cloud_pct').innerText = data.cloud_pct;
    document.getElementById('wind_speed').innerText = data.wind_speed;
    document.getElementById('wind_speed2').innerText = data.wind_speed;
    document.getElementById('feels_like').innerText = data.feels_like;
  }

  const table = document.getElementById('weatherTable');
  const row = table.insertRow();
  row.innerHTML = `
    <th scope="row" class="text-start">${city}</th>
    <td>${data.humidity}</td>
    <td>${data.max_temp}</td>
    <td>${data.min_temp}</td>
    <td>${data.sunrise}</td>
    <td>${data.sunset}</td>
    <td>${data.wind_degrees}</td>
    <td>${data.temp}</td>
    <td>${data.cloud_pct}</td>
    <td>${data.wind_speed}</td>
    <td>${data.feels_like}</td>
  `;
};

cities.forEach((city) => {
  fetchWeather(city).then((data) => {
    if (data) {
      populateWeather(data, city);
    }
  });
});
