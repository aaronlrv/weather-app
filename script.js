let btn = document.querySelector(".submit");
let input = document.getElementById("location");

btn.addEventListener("click", display);

async function dataFetch() {
  let search = input.value;
  console.log(search);
  let data = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=77b6c4aebc71d028b7bba3ec0ead299f&units=metric",
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
  let weatherDesc = await data.weather[0].description;

  console.log(locationName);
  console.log(weatherTemp);
  console.log(weatherDesc);
}
