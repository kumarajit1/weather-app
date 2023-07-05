import React, { useState } from "react";
import "../Components/Weather.css";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeInputChange = (e) => {
    setInputCity(e.target.value);
  };
  const handleSearch = () => {
    getWetherDetails(inputCity);
  };

  return (
    <div className="col-md-12">
      <div className="weather">
        <h1>Weather App</h1>
        <div className="d-grid col-4 mt-3 gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Please Enter Your City Name"
            value={inputCity}
            onChange={handleChangeInputChange}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {Object.keys(data).length > 0 && (
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResult">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2021/03/31/weather-icon-illustration03-Graphics-10205167-1.jpg"
              alt="imd_icon"
              className="imgIcon"
            />
            <h5 className="weatherCity">{data?.name}</h5>
            <h6 className="weatherTemp">
              {(data?.main?.temp - 273.15).toFixed(2)}°C
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};
export default Weather;
