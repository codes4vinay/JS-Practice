const apiKey = "fb392ccd89485fd4c4605008990cfd22";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const c = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const inp = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const image = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
    const res = await fetch(apiUrl + `${city}` + `&appid=${apiKey}`);
    let data = await res.json();

    console.log(data);
    c.innerText = data.name;
    temp.innerText = `${Math.round(data.main.temp)}°C`;
    humidity.innerText = `${data.main.humidity} %`;
    wind.innerText = `${data.wind.speed} Km/h`;

    if (data.weather[0].main == "Clouds") {
        image.src = "clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        image.src = "clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        image.src = "rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        image.src = "drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        image.src = "mist.png";
    }

    weather.style.display = "block";
}


btn.addEventListener("click", () => {
    checkWeather(inp.value);
    inp.value = "";
});
