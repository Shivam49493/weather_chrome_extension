document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value; // Get the city name from input
     // Your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40289185384528f99d95da2b0edbbc85&units=metric`; // Updated API URL

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = `
                    <h3>${data.name}</h3>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon" />
                `;
                document.getElementById('weather').innerHTML = weather; // Display weather data
            } else {
                document.getElementById('weather').innerHTML = `<p>Error: ${data.message}</p>`; // Handle errors
            }
        })
        .catch(error => {
            document.getElementById('weather').innerHTML = `<p>Error fetching data.</p>`; // Handle fetch errors
        });
});
