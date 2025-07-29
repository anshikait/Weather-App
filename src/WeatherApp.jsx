import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike: 26.54,
        humidity: 7,
        temp: 27.92,
        tempMax: 27.92,
        tempMin: 27.92,
        weather: "clear sky"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo = {updateInfo}/><br></br><br></br>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}