import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

export default function WeatherDetails({convertTemperature,unit}) {
  const { weatherData } = useContext(WeatherContext);
  return (


      <div className="w-[450px] h-[450px]  bg-[#1f2a3a] p-5 text-white flex flex-col gap-5 rounded-md ">
        <h1 className='uppercase text-2xl text-center'>Weather Details</h1>
        <ul className='flex flex-col gap-2'>
          <li className='text-white text-lg font-semibold'>
            <p>Feels Like: <span>{convertTemperature(weatherData?.list[0].main.feels_like, unit)}&deg;</span></p>
          </li>
          <li className='text-white text-lg font-semibold'>
            <p>Ground Level: <span>{weatherData?.list[0].main.grnd_level} hpa</span></p>
          </li>
          <li className='text-white text-lg font-semibold'>
            <p>Humidity: <span>{weatherData?.list[0].main.humidity}%</span></p>
          </li>
          <li className='text-white text-lg font-semibold'>
            <p>Pressure: <span>{weatherData?.list[0].main.pressure} hPa</span></p>
          </li>
          <li className='text-white text-lg font-semibold'>
            <p>Sea Level: <span>{weatherData?.list[0].main.sea_level} hpa</span></p>
          </li>
          <li className='text-white text-lg font-semibold'>
            <p>Temp Max: <span>{convertTemperature(weatherData?.list[0].main.temp_max, unit)}&deg;</span></p>
          </li>
          <li className='text-white text-lg font-semibold'>
            <p>Temp Min: <span>{convertTemperature(weatherData?.list[0].main.temp_min, unit)}&deg;</span></p>
          </li>
          <li className='text-white text-lg font-semibold'>
            <p>Wind Degree: <span>{weatherData?.list[0].wind.deg}&deg;</span></p>
          </li>
          <li className='text-white text-lg font-semibold'>
            <p>Wind Gust: <span>{weatherData?.list[0].wind.deg} m/s</span></p>
          </li>
          <li className='text-white text-lg font-semibold'>
            <p>Wind Speed: <span>{weatherData?.list[0].wind.speed} m/s</span></p>
          </li>
        </ul>

      </div>

  )
}
