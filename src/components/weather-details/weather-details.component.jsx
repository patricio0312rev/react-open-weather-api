import React from "react";

const WeatherDetails = () => {
    return(
        <article className="widget">
            <div className="weatherIcon">
                <i className="wi wi-day-sunny"></i>
            </div>

            <div className="weatherInfo">
                <div className="temperature">
                    <span>23.99&deg;</span>
                </div>

                <div className="description">
                    <div className="weatherCondition">Sunny</div>
                    <div className="place">Lima, PE</div>
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
                            6:30 PM <br />
                            Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <div className="extra-info-leftside">
                            444 <br/>
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
                            444 <br/>
                            Presure
                        </div>
                    </div>
                    
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <div className="extra-info-leftside">
                            444 <br/>
                            Speed
                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
}

export default WeatherDetails;