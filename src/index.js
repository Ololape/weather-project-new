function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperture");
    let cityElement = document.querySelector(response.main.name);
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name
}
let apiKey = "1c72bf446097ca5cb1d7b9793383b20f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);