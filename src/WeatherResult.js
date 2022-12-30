import React from "react";
import FormattedDate from "./FormattedDate.js";
import "./WeatherResult.css";

export default function WeatherResult(props) {
  return (
    <div className="WeatherResult appBoxes centered ">
      <div className="row">
        <div className="col-sm-6">
          <h2 className="searchedCity"> {props.city}</h2>
          <div className="weatherDesc">{props.description} </div>
          <div className="windDiv">
            Wind: <span id="wind">{props.wind}</span> m/s
          </div>
          <div className="d-flex justify-content-center">
            <span className="tempNumber">{props.temperature}</span>
            <span className="tempUnit">c</span>
            <img
              alt={props.description}
              id="weatherEmoji"
              src={props.icon}
              width="42"
            />
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
          <div className="lastUpdated">
            Last updated:
            <span id="date-result">
              {" "}
              <FormattedDate date={props.date} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
