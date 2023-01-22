import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast appBoxes centered">
        <h5> Your Forecast:</h5>
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let forecastCity = props.data.city;
    const forecastApiKey = "cbbfb900d7a3c5f058f2a44a54t3o340";
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${forecastCity}&key=${forecastApiKey}&units=metric`;
    axios.get(forecastApiUrl).then(handleResponse);
  }
}
