import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(props.data.city);
  }

  let forecastCity = props.data.city;
  const forecastApiKey = "cbbfb900d7a3c5f058f2a44a54t3o340";
  let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${forecastCity}&key=${forecastApiKey}&units=metric`;
  axios.get(forecastApiUrl).then(handleResponse);
  console.log(forecastApiUrl);

  {
    return (
      <div className="WeatherForecast appBoxes centered">
        <h5> Your Forecast:</h5>
        <div className="row">
          <div className="col-sm-3">
            <div> Day </div>
            <div className="WeatherEmoji">
              <img className="WeatherEmoji" src="./media/carlcold.jpg" />
            </div>
            <div>Max temp / Min temp</div>
          </div>
        </div>
      </div>
    );
  }
}
