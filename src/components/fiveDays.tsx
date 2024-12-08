import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import sun from "../images/weather-icons/sun.png";
import thunders from "../images/weather-icons/thunder.png";
import snow from "../images/weather-icons/snow.png";
import rain from "../images/weather-icons/rain.png";
import clouds from "../images/weather-icons/clouds.png";

export default function FiveDays() {
  const apiKey: string = "727553006f7876c282d385178ba20eec";

  // حالة لتخزين بيانات الطقس
  const [forecastData, setForecastData] = useState<any[]>([]);

  const city = useSelector((state: any) => state.myCity.cityName);

  // دالة لجلب البيانات
  async function getFetchData(endPoint: string, city: string) {
    const APIURL: string = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
    const respon = await fetch(APIURL);
    return respon.json();
  }

  // تحديث بيانات الطقس
  async function updateDataForFiveDays(city: string) {
    const forecast = await getFetchData("forecast", city);
    const timeTaken: string = "12:00:00";
    const todayDate: string = new Date().toISOString().split("T")[0];

    // استخراج البيانات
    const filteredData = forecast.list.filter(
      (forecastWeather: any) =>
        forecastWeather.dt_txt.includes(timeTaken) &&
        !forecastWeather.dt_txt.includes(todayDate)
    );

    setForecastData(filteredData);
  }

  // دالة لتحديد الأيقونة
  function weatherIcon(id: any) {
    if (id <= 232) return thunders;
    if (id <= 531) return rain;
    if (id <= 622) return snow;
    if (id === 800) return sun;
    if (id <= 804) return clouds;
  }

  // تحديث البيانات عند تحميل المكون
  useEffect(() => {
    if (city) {
      updateDataForFiveDays(city);
    }
  }, [city]);

  return (
    <div className="fiveDays gap-5 flex mt-10 pb-2 rounded max-sm:flex-col">
      {forecastData.map((weather, index) => {
        const {
          dt_txt: date,
          weather: [{ id }],
          main: { temp },
        } = weather;

        return (
          <div
            key={index}
            className="card bg-slate-800/30 rounded h-44 flex flex-col max-sm:flex-row px-4 max-sm:h-24 justify-between items-center py-2"
          >
            
            <img className="w-28" src={weatherIcon(id)} alt="weather icon" />
            <div className="date">{date.split(" ")[0]}</div>
            <div className="temp">
              {Math.floor(temp)} <sup className="text-sm mt-[-5px]">o</sup>C
            </div>
          </div>
        );
      })}
    </div>
  );
}
