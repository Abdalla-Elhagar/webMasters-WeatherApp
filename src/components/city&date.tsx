import { GrLocation } from "react-icons/gr";
import { useSelector } from "react-redux";

export default function CityDate() {

    const city:any = useSelector((state:any) => state.data.api.name);

    return(
        <div className="city&date flex justify-between items-center text-lg">
                <div className="city flex items-center">
                <GrLocation className="text-2xl" />
                <span className="text-2xl">{city}</span>
                </div>
                <div className="date">
                    {new Date().toLocaleString('en-GP' , {weekday: "short",day:"2-digit" , month: "short",})}
                </div>

            </div>
    )
}