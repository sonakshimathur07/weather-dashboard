import { FaWind, FaThermometerHalf, FaCloudSun } from "react-icons/fa";
import "./current-weather.css";

const Location = [
    "Mumbai", "Delhi", "Pune", "Kolkata"
]

const CurrentWeather = ({ data }) => {

    return (
        <div className="weather">
            <div className="weather-top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-des">{data.weather[0].description}</p>
                </div>
            </div>
            <div className="weather-bottom">
                <p className="temperature">
                    <FaThermometerHalf /> {Math.round(data.main.temp)}°C
                </p>
                <div className="weather-details">
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Details</span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Feels like</span>
                        <span className="weather-parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Wind</span>
                        <span className="weather-parameter-value">
                            <FaWind /> {data.wind.speed} m/s
                        </span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Humidity</span>
                        <span className="weather-parameter-value">
                            <FaCloudSun /> {data.main.humidity}%
                        </span>
                    </div>
                    <div className="weather-parameter-row">
                        <span className="weather-parameter-label">Pressure</span>
                        <span className="weather-parameter-value">{data.main.pressure} hpa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
