import React, { useState } from "react";
import axios from "axios";
import WeatherResult from "./WeatherResult";
import "./search.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

export default function Search() {
  // const [weatherData, setWeatherData] = useState(null);
  // const [ready, setReady] = useState(false);

  let apiKey = "9b385bf584a6637913273ac2cfe59646";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
    alert(
      `It's currently ${Math.round(response.data.main.temp)}C in ${
        response.data.name
      }`
    );

    //   setReady(true);
    //   setWeatherData({
    //     temperature: response.data.temperature.current,
    //     humidity: response.data.temperature.humidity,
    //     icon: response.data.condition.icon_url,
    //     date: response.data.time,
    //     description: response.data.condition.description,
    //     wind: response.data.wind.speed,
    //     city: response.data.city,
    //   });
  }

  // if (ready) {
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
    </div>
  );

  // } else {
  //   const apiKey = `cbbfb900d7a3c5f058f2a44a54t3o340`;
  //   let city = "London";
  //   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  //   // axios.get(apiUrl).then(handleResponse);

  //   return "Loading...";
  // }
}
