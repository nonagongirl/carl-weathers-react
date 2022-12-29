import React from "react";
import "./WeatherResult.css";

export default function WeatherResult() {
  return (
    <div className="WeatherResult appBoxes centered ">
      <div className="row">
        <div className="col-sm-6">
          <h2 className="searchedCity"> London</h2>
          <div className="weatherDesc">Overcast clouds </div>
          <div className="windDiv">
            {" "}
            Wind: <span id="wind">2</span> m/s
          </div>
          <div className="d-flex justify-content-center">
            <span className="tempNumber">15</span>
            <span className="tempUnit">c</span>
            <img
              alt="weather emoji"
              id="weatherEmoji"
              src="https://static.vecteezy.com/system/resources/thumbnails/000/551/374/small/sun_012.jpg"
              width="42"
            />
          </div>
        </div>

        <div className="col-sm-6 ">
          {" "}
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
            Last updated:{" "}
            <span id="date-result">Wednesday 26 Oct at 23:28</span>
          </div>
        </div>
      </div>
      <WeatherResult />
    </div>
  );
}
