import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import Search from "./components/search/search";
import Forecast from "./components/forecast/forecast";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Login from "./components/Login/Login";

import "./App.css";

const allCityData = [
  {
    cityName: "Delhi NCR ",
    localityName: "Faridabad Sector 41-50",
    localityId: "ZWL008752",
    latitude: 28.460895,
    longitude: 77.304764,
    device_type: " 1 - Automated weather system",
  },
  {
    cityName: "Delhi NCR ",
    localityName: "Sector 26 (Noida)",
    localityId: "ZWL005243 ",
    latitude: 28.574404,
    longitude: 77.334178,
    device_type: "1 - Automated weather system",
  },
  {
    cityName: "Kolkata ",
    localityName: "Bhowanipore ",
    localityId: "ZWL006750 ",
    latitude: 22.526436,
    longitude: 88.343904,
    device_type: "2 - Rain gauge system",
  },
  {
    cityName: "Mumbai ",
    localityName: "Borivali West ",
    localityId: "ZWL001089 ",
    latitude: 19.229714,
    longitude: 72.83971,
    device_type: " 1 - Automated weather system",
  },
  {
    cityName: "Bengaluru ",
    localityName: "JP Nagar",
    localityId: "ZWL005530 ",
    latitude: 12.893441,
    longitude: 77.560436,
    device_type: "1 - Automated weather system",
  },
  {
    cityName: "Hyderabad ",
    localityName: "Nagole",
    localityId: "ZWL003370",
    latitude: 17.359969,
    longitude: 78.565724,
    device_type: "1 - Automated weather system",
  },
];

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [allCityDataList, setAllCityDataList] = useState([]);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a3f74970d13e1dd48e4fca9215ca0b7&units=metric`
    );
    const forecastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9a3f74970d13e1dd48e4fca9215ca0b7&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  const getAllCityData = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a3f74970d13e1dd48e4fca9215ca0b7&units=metric`
    );
    const data = await response.json();
    setAllCityDataList((prevData) => [...prevData, data]);
    console.log(data);
  };

  const handleCityClick = (city) => {
    const lat = city?.coord?.lat;
    const lon = city?.coord?.lon;
    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a3f74970d13e1dd48e4fca9215ca0b7&units=metric`
    );
    const forecastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9a3f74970d13e1dd48e4fca9215ca0b7&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: city.label, ...weatherResponse });
        setForecast({ city: city.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  console.log(allCityDataList);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true
  };

  useEffect(() => {
    if (isLoggedIn) {
      allCityData.forEach((city) => {
        setTimeout(() => {
          getAllCityData(city.latitude, city.longitude);
        }, 200);
      });
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        {/* If not logged in, show login page */}
        {!isLoggedIn ? (
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        ) : (
          // If logged in, show the weather dashboard
          <Route
            path="/weather-dashboard"
            element={
              <Container sx={{ textAlign: "center" }}>
                <div className="weather-dashboard-heading">
                  Weather Dashboard
                </div>
                <Search onSearchChange={handleOnSearchChange} />
                {allCityDataList?.length > 0 &&
                  allCityDataList?.map((city) => (
                    <div
                      onClick={() => handleCityClick(city)}
                      key={city.id}
                      style={{
                        color: "white",
                        padding: "20px 10px",
                        border: "1px solid white",
                        borderRadius: 10,
                        margin: 10,
                        cursor: "pointer",
                      }}
                    >
                      {city?.name} - {city?.main?.temp}ºC
                    </div>
                  ))}
                <div
                  className="hide-container"
                  container
                  spacing={4}
                  style={{ display: "flex", gap: 10 }}
                >
                  {currentWeather && (
                    <div className="current-weather-container">
                      Current Weather
                      <CurrentWeather data={currentWeather} />
                    </div>
                  )}
                  {forecast && (
                    <div className="forecast-container">
                      <Typography>5-Day Forecast</Typography>
                      <Forecast data={forecast} />
                    </div>
                  )}
                </div>
              </Container>
            }
          />
        )}

        {/* Redirect to login page if trying to access weather-dashboard without login */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;