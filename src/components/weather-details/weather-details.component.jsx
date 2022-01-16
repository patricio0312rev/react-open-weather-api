import React, { useState } from "react";

const WeatherDetails = ({temp, humidity, pressure, weatherType, name, speed, country, sunset}) => {
    const [weatherState, setWeatherState] = useState("");
    
    return(
        <article className="widget">
            <div className="weatherIcon">
                <i className="wi wi-day-sunny"></i>
            </div>

            <div className="weatherInfo">
                <div className="temperature">
                    <span>{temp}&deg;</span>
                </div>

                <div className="description">
                    <div className="weatherCondition">{weatherType}</div>
                    <div className="place">{name},{country}</div>
                </div>
            </div>

            <div className="date">{new Date().toLocaleString()}</div>

            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {sunset} PM <br />
                            Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <div className="extra-info-leftside">
                            {humidity} <br/>
                            Humidity
                        </div>
                    </div>
                </div>

                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-rain"}></i>
                        </p>
                        <div className="extra-info-leftside">
                            {pressure} <br/>
                            Presure
                        </div>
                    </div>
                    
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <div className="extra-info-leftside">
                            {speed} <br/>
                            Speed
                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
}

export default WeatherDetails;