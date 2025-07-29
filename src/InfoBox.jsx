import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1558418294-9da149757efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    // let info = {
    //     city:"Delhi",
    //     feelsLike: 26.54,
    //     humidity: 7,
    //     temp: 27.92,
    //     tempMax: 27.92,
    //     tempMin: 27.92,
    //     weather: "clear sky"
    // }
    return (
        <div className="InfoBox">
            <div className='classContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{info.city}  
                    {
                        info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <LightModeIcon /> : <AcUnitIcon />
                    }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} style={{color: "#31255a"}}>
                    <p>Temperature = {info.temp}deg</p>
                    <p>Humidity = {info.humidity}deg</p>
                    <p>Min Temp = {info.tempMin}deg</p>
                    <p>Max Temp = {info.tempMax}deg</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}deg</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}