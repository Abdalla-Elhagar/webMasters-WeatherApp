import { useSelector } from "react-redux";
import sun from "../images/weather-icons/sun.png"
import thunders from "../images/weather-icons/thunder.png"
import snow from "../images/weather-icons/snow.png"
import rain from "../images/weather-icons/rain.png"
import clouds from "../images/weather-icons/clouds.png"



export default function WeatherIconTemp() {
    const data:any= useSelector((state:any) => state.data.api);

    const {
        main:{temp},
        weather:[{id,main}]
} = data;
function weatherIcon (id:any) {
    if (id <= 232) return thunders
    if (id <= 531) return rain
    if (id <= 622) return snow
    if (id <= 800) return sun
    if (id <= 804) return clouds
    
    
}

    return (
        <div className="weatherIcon&temp flex items-center justify-between mt-10">
                <img src={weatherIcon(id)} alt="weather icon" className="w-56" />
                <span className="text-2xl">
                    <div>{Math.floor(temp)} <sup className="text-sm mt-[-5px]">o</sup>C</div>
                    <div>{main}</div>
                
                </span>

            </div>

    )
}