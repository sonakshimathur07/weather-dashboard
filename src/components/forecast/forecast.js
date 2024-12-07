import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { FaCloud, FaSun, FaCloudRain, FaWind, FaCloudSun } from "react-icons/fa";
import "./forecast.css";

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay(); // Get the current day index
    const forecastDays = WEEK_DAYS.slice(dayInWeek).concat(WEEK_DAYS.slice(0, dayInWeek));

    const getWeatherIcon = (description) => {
        // Map weather descriptions to icons
        if (description.includes("clear")) return <FaSun />;
        if (description.includes("cloud")) return <FaCloud />;
        if (description.includes("rain")) return <FaCloudRain />;
        if (description.includes("wind")) return <FaWind />;
        return <FaCloudSun />; // Default icon
    };

    return (
        <>
            <label className="title">Daily Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    {/* Use the weather description to get the appropriate icon */}
                                    <div sx={{mx:4}} className="icon-small">{getWeatherIcon(item.weather[0].description)}</div>
                                    <label sx={{mx:4}}  className="day">{forecastDays[index]}</label>
                                    <label sx={{mx:4}} className="description">{item.weather[0].description}</label>
                                    <label sx={{mx:4}} className="min-max">{Math.round(item.main.temp)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea level</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;
