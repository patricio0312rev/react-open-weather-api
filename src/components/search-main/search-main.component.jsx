import React, { useEffect, useState } from "react";
import WeatherDetails from './../weather-details/weather-details.component';

const SearchMain = () => {
    const apiKey = process.env.REACT_APP_WEATHER_TEST_KEY;

    const [city, setCityName] = useState('');
    const [weatherInfo, setWeatherInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            // let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city.toLowerCase() + '&appid=' + apiKey;
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${apiKey}`;

            let res = await fetch(url);
            let data = await res.json();

            console.log(data);

            // Asigning data
            const {temp, humidity, pressure} = data.main;
            const {main: weatherType} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const newWeatherInfo = {
                temp, humidity, pressure, weatherType, name, speed, country, sunset
            }
            setWeatherInfo(newWeatherInfo);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <div>
            <div className="wrap">
                <div className="search">
                    <input 
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder="City name"  
                        value={city} 
                        onChange={(e) => setCityName(e.target.value)}
                    />
                    <div className="searchButton" onClick={getWeatherInfo}>Search</div>
                </div>

            </div>
                
            <WeatherDetails {...weatherInfo}/>
        </div>
    )
}

export default SearchMain;