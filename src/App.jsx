import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import moment from "moment";
import Loading from "./Loading";
import "./i18n";
import { useTranslation } from "react-i18next";
moment.locale("ar");

let cancelAxios = null;

function App() {
  const {t, i18n} = useTranslation();
  const [loading, setLoading] = useState(true);
  const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  console.log(currentDate);
  const [weather, setWeather] = useState({
    description: "",
    temp: null,
    temp_min: null,
    temp_max: null,
    weatherIcon: null,
  });

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=36.7525&lon=3.04197&appid=API_KEY",
        {
          cancelToken: new axios.CancelToken((c) => (cancelAxios = c)),
        }
      )
      .then((response) => {
        const icon = response.data.weather[0].icon;
        setLoading(false);
        setWeather({
          description: response.data.weather[0].description,
          temp: Math.round(response.data.main.temp - 273.15),
          temp_min: Math.round(response.data.main.temp_min - 273.15),
          temp_max: Math.round(response.data.main.temp_max - 273.15),
          weatherIcon: `https://openweathermap.org/img/wn/${icon}.png`,
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);
  return (
    <>
      {/* page */}
      {loading && <Loading />}
      {!loading && (
        <div className="h-screen w-screen bg-blue-700">
          {/* container */}
          <div className="container h-screen w-md m-auto flex flex-col justify-center items-start">
            {/* card */}
            <div className="h-70 w-full bg-blue-900 rounded-lg flex flex-col p-2 shadow-xl">
              {/* header card */}
              <div className="flex flex-row-reverse items-end px-6">
                <p className="text-6xl font-500 my-2">جيجل</p>
                <h2 className="mr-2">{currentDate}</h2>
              </div>
              {/*== header card ==*/}
              <hr className="my-3" />
              {/* body card */}
              <div className="h-full w-full flex flex-row px-6">
                <div className="h-full w-1/2 ">
                  <img className="h-full " src={weather.weatherIcon} />
                </div>
                <div className="h-full w-1/2 flex flex-col">
                  <div className="flex flex-row-reverse justify-start items-center h-1/2 w-full">
                    <p className="text-8xl">{weather.temp}</p>
                    <div className="h-full w-full">
                      <img src={weather.weatherIcon} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-evenly items-end h-1/2 w-full">
                    <p className="text-xl">{weather.description}</p>
                    <p className="text-sm">
                      الصغرى: {weather.temp_min} | الكبرى: {weather.temp_max}
                    </p>
                  </div>
                </div>
              </div>
              {/*== body card ==*/}
            </div>
            {/*== card ==*/}
            <button className="py-2 text-white rounded-lg cursor-pointer">
              انجليزي
            </button>
          </div>
          {/*== container ==*/}
        </div>
      )}
      {/* == page == */}
    </>
  );
}

export default App;
