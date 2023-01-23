import axios from "axios";
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  //if city changes
  //set loaded to false

  if (loaded) {
    return (
      <div className="WeatherForecast appBoxes centered">
        <h5> Your Forecast in Celsius:</h5>
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
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
