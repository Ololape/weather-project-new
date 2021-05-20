function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#tempearture");
    
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
}
let apiKey = "1c72bf446097ca5cb1d7b9793383b20f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Doha&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);