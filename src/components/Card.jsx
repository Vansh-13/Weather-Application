import React, { useState, useEffect } from "react";
import {getWeatherData} from "../api";

const Card = ({city}) => {
  const [weather,setWeather] =useState(null);
  const [load,setLoad] =useState(true);
  const [error,setError] =useState("");

  useEffect(() => {
    const fetchWeather =async()=>{
      setLoad(true);
      setError("");

      const data = await getWeatherData(city);

      if (data) {
        setWeather(data);
        setLoad(false);
      } else {
        setError("City not found or error occurred in API.");
        setLoad(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (load) return <h3 className="text-center text-xl text-white">Loading...</h3>;

  if (error) return (
    <h3 className="text-center text-xl font-semibold text-red-600 bg-red-100 p-2 rounded-lg shadow-md">
      😞 {error}
    </h3>
  );
  

  
  return (
    <div className="w-full max-w-lg mx-auto bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-center border border-white/30 transition-all duration-300 ease-in-out">

     
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="w-24 h-24 sm:w-28 sm:h-28 mb-3"
      />

      <h2 className="text-5xl sm:text-6xl font-bold text-white">{weather.main.temp}°C</h2>

          <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mt-2">
        {weather.name}, {weather.sys.country}
      </h3>

 
      <p className="text-md sm:text-lg text-gray-300 capitalize mt-1">{weather.weather[0].description}</p>

  
      <div className="flex flex-col sm:flex-row justify-between w-full mt-4 text-gray-300 text-lg space-y-2 sm:space-y-0">
        <p className="text-left w-full sm:w-1/2">💧 Humidity: {weather.main.humidity}%</p>
        <p className="text-left sm:text-right w-full sm:w-1/2">🌬 Wind: {weather.wind.speed} km/h</p>
      </div>
    </div>
  );
};

export default Card;
