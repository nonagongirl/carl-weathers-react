import React, { useState } from "react";
import axios from "axios";
import WeatherResult from "./WeatherResult.js";
import WeatherForecast from "./WeatherForecast.js";
import "./search.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function searchCity() {
    const apiKey = "cbbfb900d7a3c5f058f2a44a54t3o340";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Search container">
        <div className="appBoxes">
          <form className="searching" onSubmit={handleSubmit}>
            <strong>Choose a city</strong>
            <br />
            <input
              type="search"
              id="searchbox"
              placeholder="Search🔎"
              autoComplete="off"
              autofocus="on"
              onChange={handleCityChange}
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
          <div className="currentTime">
            Your date and time: 22:47 on Wednesday 26 Oct
          </div>
        </div>
        <div className="mt-4">
          <WeatherResult data={weatherData} />
        </div>
        <div className="mt-4">
          <WeatherForecast />
        </div>
      </div>
    );
  } else {
    searchCity();
    return <div className="text-center font-weight-bold m-5">LOADING...</div>;
  }
}
