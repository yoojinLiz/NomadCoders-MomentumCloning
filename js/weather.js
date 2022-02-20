const API_KEYS = "37c685b29bfb08db1ce8c799cced2fcd"


function onGeoOk (geoInfo) {
  const lat =  geoInfo.coords.latitude;
  const lon = geoInfo.coords.longitude;
  const city = document.querySelector("#weather span:first-child")
  const weather = document.querySelector("#weather span:last-child")
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}`;
      });
}
function onGeoErr () {
  alert("Sorry I can't find your location.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
