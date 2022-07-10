let btn = document.querySelector(".submit");
let input = document.getElementById("location");

btn.addEventListener("click", display);

async function dataFetch() {
  let search = input.value;
  console.log(search);
  let data = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      search +
      "&APPID=77b6c4aebc71d028b7bba3ec0ead299f&units=metric",
    { mode: "cors" }
  );
  console.log(data);
  let jsonData = await data.json();
  console.log(jsonData);

  return jsonData;
}

async function display() {
  let data = await dataFetch();
  console.log(data);

  let locationName = await data.name;
  let weatherTemp = await data.main.temp;
  let weatherDesc = await data.weather[0].main;
  let countryCode = await data.sys.country;
  let feelsLike = await data.main.feels_like;
  let humidity = await data.main.humidity;
  let windSpeed = await data.wind.speed;

  document.querySelector(".locationName").textContent =
    locationName + "," + "  ";
  document.querySelector(".countryCode").textContent = " " + countryCode;
  document.querySelector(".temperature").textContent = weatherTemp + "°C";
  document.querySelector(".description").textContent = weatherDesc;
  document.querySelector(".feelsLike").textContent =
    "Feels Like:" + " " + feelsLike;
  document.querySelector(".humidity").textContent =
    "Humidity:" + " " + humidity;
  document.querySelector(".windspeed").textContent =
    "Wind Speed:" + " " + windSpeed;

  console.log(locationName);
  console.log(weatherTemp);
  console.log(weatherDesc);
  console.log(countryCode);
  console.log(feelsLike);
  console.log(humidity);
  console.log(windSpeed);
}
