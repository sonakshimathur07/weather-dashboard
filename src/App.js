import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; 
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import Search from "./components/search/search";
import Forecast from "./components/forecast/forecast";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

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

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true
  };

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
              <Container  sx={{ textAlign: "center", paddingTop: 4 }}>
                <Typography variant="h3" gutterBottom sx={{color:"white"}}>
                  Weather Dashboard
                </Typography>
                <Search onSearchChange={handleOnSearchChange} />
                <div container spacing={4} style={{display:"flex", gap:10}}>
                  {currentWeather && (
                    <Grid item xs={12} md={6}>
                      <Card variant="outlined" sx={{ backgroundColor: "#f0f4ff"}}>
                        <CardContent>
                          <Typography variant="h5" gutterBottom>
                            Current Weather
                          </Typography>
                          <CurrentWeather data={currentWeather} />
                        </CardContent>
                      </Card>
                    </Grid>
                  )}, 
                  {forecast && (
                    <div item >
                      <Card variant="outlined" sx={{ backgroundColor: "#f0f4ff" }}>
                        <CardContent>
                          <Typography variant="h5" gutterBottom>
                            5-Day Forecast
                          </Typography>
                          <Forecast data={forecast} />
                        </CardContent>
                      </Card>
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
