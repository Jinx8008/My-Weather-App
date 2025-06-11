document.getElementById("weather-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const city = document.getElementById("input-city").value;

    const apiKey = "e498ece2a1026565e3efa036ab803514"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
            // Country
            const country = data.sys.country;
            document.querySelector(".country").textContent = country;
            // City
            const city = data.name;
            document.querySelector(".city").textContent = city;

            // Temperature
            const temp = data.main.temp;
            document.querySelector(".temperature").textContent = `${Math.round(temp)}°C`;

            
            const weatherImages = {
            Clear: "weather-img/vecteezy_3d-yellow-sun-with-rays-sun-cartoon-minimal-style-summer_21048215.png",
            Clouds: "weather-img/vecteezy_cloudy-on-transparent-background_19781556.png",
            Rain: "weather-img/vecteezy_3d-weather-icon-night-with-rain_24825184.png",
            Snow: "weather-img/vecteezy_3d-weather-icon-day-with-snow_24825197.png",
            Thunderstorm: "weather-img/vecteezy_3d-weather-icon-night-with-rain_24825169.png",
            Drizzle: "weather-img/vecteezy_3d-weather-icon-day-with-rain_24825182.png",
            Mist: "weather-img/vecteezy_3d-icon-cloudy-rain-windy-weather-forecast-illustration_24683839.png"
            
            };

            
            const mainCondition = data.weather[0].main;


            const weatherIcon = document.getElementById("weather-icon");


            if (weatherImages[mainCondition]) {
            weatherIcon.src = weatherImages[mainCondition];
            } else {
            weatherIcon.src = "weather-img/normal.png";
            }

            // Weather
            const description = capitalize(data.weather[0].description);
            document.querySelector(".weather").textContent = description;

            // Humidity
            const humidity = data.main.humidity;
            document.querySelector(".humidity-value").textContent = `${humidity}%`;
            


            // Wind Speed
            const windSpeed = data.wind.speed;
            document.querySelector(".wind-speed-value").textContent = `${windSpeed} m/s`;


            document.querySelector(".humidity-value").innerHTML = `${humidity}%`;
            document.querySelector(".humidity-text").innerHTML = "Humidity";


            document.querySelector(".wind-speed-value").innerHTML = `${windSpeed} km/h`;
            document.querySelector(".wind-speed-text").innerHTML = "Wind Speed";

            document.getElementById("humidity-icon").src = "weather-img/icons8-humidity-50.png";
            document.getElementById("wind-icon").src = "weather-img/icons8-wind-50.png";

        })
        
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("Could not retrieve weather data. Please check the city name or try again later.");   
            alert("Could not retrieve weather. Check your coordinates or try again later.");
        });





});
