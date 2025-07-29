import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d9c6458f6cbb382ee7a5c4fae31802a1";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
        } catch (err){
            throw err;
        }
    }
    

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try{
            console.log(city);
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err){
            setError(true);
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <TextField required id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/><br></br><br></br>
            <Button variant="contained" endIcon={<SendIcon />} type="submit">Search</Button>
            {error && <p style={{color: "#31255a"}}>No such place in our API</p>}
            </form>
        </div>
    )
}