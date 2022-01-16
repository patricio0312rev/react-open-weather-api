import React, { useState } from "react";
import WeatherDetails from './../weather-details/weather-details.component';

const SearchMain = () => {
    const [city, setCityName] = useState('');

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
                </div>

                <div className="searchButton">Search</div>
            </div>
                
            <WeatherDetails />
        </div>
    )
}

export default SearchMain;