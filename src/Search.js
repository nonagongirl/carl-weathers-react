import React, { useState } from "react";
import axios from "axios";
import WeatherResult from "./WeatherResult";
import "./search.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(weatherData.humidity);

    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      date: response.data.time * 1000,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Search container">
        <div className="appBoxes">
          At your current location it's 22:47 on Wednesday 26 Oct
          <form className="searching">
            <strong>Choose a city</strong>
            <br />
            <input
              type="search"
              id="searchbox"
              placeholder="Search🔎"
              autoComplete="off"
              autofocus
            />
            <button
              type="submit"
              className="btn btn-danger btn-sm"
              id="go-Button"
            >
              Go!
            </button>
            <br />
            <button
              type="submit"
              className="btn btn-primary btn-sm"
              id="my-location-button"
            >
              Use my location
            </button>
            <button
              type="submit"
              className="btn btn-info btn-sm "
              id="carl-button"
              onClick="window.open('https://www.google.com/search?q=carl+weathers&rlz=1C1CHBF_en-GBGB885GB885&sxsrf=ALiCzsZU_daEZk_l2M6nM4P933JEBv_Arw:1653429787893&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjQhaz5kfn3AhWxRfEDHQVfDCEQ_AUoAXoECAIQAw&biw=887&bih=985&dpr=0.9')"
            >
              Show me Carl!
            </button>
          </form>
        </div>

        <WeatherResult
          city={weatherData.city}
          description={weatherData.description}
          temperature={weatherData.temperature}
          humidity={weatherData.humidity}
          date={weatherData.date}
          icon={weatherData.icon}
          wind={weatherData.wind}
        />
      </div>
    );
  } else {
    let apiKey = "cbbfb900d7a3c5f058f2a44a54t3o340";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "LOADING...";
  }
}
