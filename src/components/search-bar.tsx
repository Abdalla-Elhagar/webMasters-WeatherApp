import { IoMdSearch } from "react-icons/io";
import "./search-bar.css"
import { useDispatch } from "react-redux";
import { cityName } from "../slices/cityName";
import { useState } from "react";


export default function SearchBar(){
    const [city,setCity] = useState("")
    const dispatch = useDispatch();
    function cityFunction() {
        dispatch(cityName({city:city}))
    }
    return (
        
        <form className="max-sm:col-span-1 max-sm:w-[90%] mx-auto" onSubmit={e=>e.preventDefault()}>
            <input className="max-sm:w-full" type="text" placeholder="Search" value={city} onChange={(e:any)=>setCity(e.target.value)} />
            <button className="submit" type="submit" onClick={cityFunction}><IoMdSearch /></button>
        </form>
        
        
    )
}