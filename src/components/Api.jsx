import React from "react";
import { useState } from "react";
import axios from 'axios';

function WApp() {
    const [city, setCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState([]);

    function getWeather() {
        const apiKey = '05cafd6372c6794fc3af3b1d42bb4ed2'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        // const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={AppK}'
        const url1 = `https://api.dictionaryapi.dev/api/v2/entries/en/${city}`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {

                console.log(data);
                setWeatherInfo(data);
            });
    }

    return (
        <div>
            <input className="input" type="text" placeholder="your location" value={city} onChange={(e) => setCity(e.target.value)} />
            <button className="submit" onClick={getWeather}> search</button>
            <div className="result-image-div">

                <img className="result-image" src="/project-pictures/weather2.png" alt="weather condition" />

                <h3 style={{ fontWeight: 'bold', color: 'white' }}> sunny</h3>

            </div>

            <div className="results">

                <p> Temperature :{weatherInfo && weatherInfo.weather && weatherInfo.main.temp} degrees
                </p>
                <p> Humidity: {weatherInfo && weatherInfo.weather && weatherInfo.main.humidity}
                </p>
                <p> Wind :{weatherInfo && weatherInfo.weather && weatherInfo.wind.speed}</p>
                <p> Condition: {weatherInfo && weatherInfo.weather && weatherInfo.weather[0].description}</p>

            </div>

        </div>

    );
}

export default WApp;