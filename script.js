async function dataFetch() {
  let data = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=77b6c4aebc71d028b7bba3ec0ead299f",
    { mode: "cors" }
  );
  console.log(data);
  let jsonData = await data.json();
  console.log(jsonData);
}

dataFetch();
