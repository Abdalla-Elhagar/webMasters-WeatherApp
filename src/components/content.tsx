import CityDate from "./city&date"
import WeatherIconTemp from "./weatherIcon&temp"
import "./content.css"
import FiveDays from "./fiveDays"



export default function Content() {
    return (
        <div className="content max-sm:w-[90%]
         max-sm:col-span-1">
            <CityDate />
            <WeatherIconTemp />
            <FiveDays />
        </div>
    )
}