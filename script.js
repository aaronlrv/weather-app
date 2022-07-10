let btn = document.querySelector(".submit");
let input = document.getElementById("location");
let container = document.querySelector(".container");

async function dataFetch() {
  let search = input.value;
  console.log(search);
  let data = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      search +
      "&APPID=77b6c4aebc71d028b7bba3ec0ead299f&units=metric",
    { mode: "cors" }
  );
  let jsonData = await data.json();

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
    "Feels Like:" + " " + feelsLike + "°C";
  document.querySelector(".humidity").textContent =
    "Humidity:" + " " + humidity;
  document.querySelector(".windspeed").textContent =
    "Wind Speed:" + " " + windSpeed;

  let id = data.weather[0].id;

  console.log(data.weather[0].id);

  if (id <= 531 && id >= 200) {
    console.log("rain background");
    container.style.backgroundImage = "url(rain.png)";
  }

  if (id <= 622 && id >= 600) {
    console.log("snow background");
    container.style.backgroundImage = "url(snow.png)";
  }

  if (id <= 804 && id >= 800) {
    console.log("regular background");
    container.style.backgroundImage = "url(default.png)";
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    display();
  }
});
