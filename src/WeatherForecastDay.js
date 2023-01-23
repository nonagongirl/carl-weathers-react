import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    return Math.round(props.data.temperature.maximum);
  }

  function minTemperature() {
    return Math.round(props.data.temperature.minimum);
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Weds", "Thur", "Fri", "Sat"];

    return days[day];
  }

  function weatherIcon() {
    return props.data.condition.icon_url;
  }

  return (
    <div className="weatherForecastDay">
      <div> {day()} </div>
      <div className="WeatherEmoji">
        <img className="WeatherEmoji" src={weatherIcon()} alt="weather icon" />
      </div>
      <div>
        {maxTemperature()}° / {minTemperature()}°
      </div>{" "}
    </div>
  );
}
