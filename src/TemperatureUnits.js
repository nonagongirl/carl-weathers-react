import React, { useState } from "react";

import "./WeatherResult.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function TemperatureUnits(props) {
  let celsius = props.celsius;
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);
  let feelsCelsius = props.feels;
  let feelsFahrenheit = Math.round((feelsCelsius * 9) / 5 + 32);

  const [unit, setUnit] = useState("celsius");

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="wholeDaily">
        <div className="row ">
          <div className="temperatureUnits  p-2">
            <span className="tempNumber">{celsius}</span>
            <span className="tempUnit align-top">
              °C |{" "}
              <a href="/" onClick={toFahrenheit}>
                °F
              </a>
            </span>
          </div>
        </div>
        <div className="row ">
          <div className="feelsLike">
            Feels like <span id="feelsLike">{feelsCelsius}°C</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="wholeDaily">
        <div className="row">
          <div className="temperatureUnits  p-2">
            <span className="tempNumber">{fahrenheit}</span>
            <span className="tempUnit align-top">
              °F |
              <a href="/" onClick={toCelsius}>
                {" "}
                °C
              </a>
            </span>
          </div>
        </div>
        <div className="row ">
          <div className="feelsLike">
            Feels like <span id="feelsLike">{feelsFahrenheit}°F</span>
          </div>
        </div>
      </div>
    );
  }
}
