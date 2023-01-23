import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./WeatherResult.css";
import TemperatureUnits from "./TemperatureUnits.js";

import "bootstrap/dist/css/bootstrap.min.css";

export default function WeatherResult(props) {
  return (
    <div className="WeatherResult appBoxes centered ">
      <div className="row">
        <div className="col-sm-6">
          <h2 className="searchedCity mt-3"> {props.data.city}</h2>
          <div className="d-flex justify-content-around mt-3">
            <img
              alt={props.data.description}
              id="weatherEmoji"
              src={props.data.icon}
              width="42"
            />
            <TemperatureUnits
              celsius={props.data.temperature}
              feels={props.data.feels}
            />
          </div>
          {/* <div className="feelsLike mt-2">
            Feels like: <span id="feelsLike">{props.data.feels}</span>
          </div> */}

          <div className="weatherDesc mt-3">{props.data.description} </div>
          <div className="windDiv mt-2">
            Wind: <span id="wind">{props.data.wind}</span> m/s
          </div>
        </div>

        <div className="col-sm-6 ">
          <img
            src="./media/carlhot.jpg"
            className="mx-auto d-block carlPic img-fluid"
            alt="carl weathers"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="lastUpdated mt-2">
            Last updated:
            <span id="date-result">
              <FormattedDate date={props.data.date} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
