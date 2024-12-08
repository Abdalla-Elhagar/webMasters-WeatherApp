import './App.css'
import SearchBar from './components/search-bar'
import Content from './components/content'
import sky from "./images/sky.avif"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import NoCity from './components/noCity'
import { useDispatch } from 'react-redux'
import { data } from './slices/weatherData'







function App() {
  const [input , setInput] = useState(false)
  const dispatch:any = useDispatch()
  const apiKey:string = "727553006f7876c282d385178ba20eec"
  async function getFetchData(endPoint:string, city:string) {
    const APIURL:string = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`
    const respon = await fetch(APIURL)
    return respon.json()
  }
  async function updateData(city:string) {
    const weatherData = await getFetchData("weather", city)
    weatherData.cod === '400' || weatherData.cod === '404' ? setInput(false) : setInput(true)
    
    dispatch(data({url:weatherData}))
    
  }
  const city = useSelector((state: any) => state.myCity.cityName);

  
  updateData(city)
  
  

  return (
    <div className='app max-sm:grid max-sm:grid-cols-1 max-sm:w-full' style={{backgroundImage: `url(${sky})`,width:"100%",height:"100%",backgroundSize: "cover",backgroundRepeat: "no-repeat",paddingTop : "1px"}}>
        <SearchBar />
        {input ? <Content /> : <NoCity />}
        
      
    </div>
  )
}

export default App
