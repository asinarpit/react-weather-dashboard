import React, { useContext, useState } from 'react'
import Typewriter from 'typewriter-effect';

import WeatherCard from './WeatherCard';
import { WeatherContext } from '../context/WeatherContext';
import SearchForm from './SearchForm';

import { IoThunderstorm } from "react-icons/io5";
import { BsCloudDrizzleFill } from "react-icons/bs";
import { IoRainy } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { IoCloudSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { MdFoggy } from "react-icons/md";
import { FaThermometerFull } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { TbUvIndex } from "react-icons/tb";
import WeatherDetails from './WeatherDetails';



export default function WeatherDashboard() {

  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData);

  const [ismodalActive, setModalActive] = useState(false);

  const [currentUnit, setCurrentUnit] = useState("C");


  const weatherMapping = {
    Thunderstorm: {
      icon: <IoThunderstorm />,
      line: "It's a thunderous day! Stay safe and enjoy the show.",
    },
    Drizzle: {
      icon: <BsCloudDrizzleFill />,
      line: "Just a bit of drizzle. Don't forget your umbrella!",
    },
    Rain: {
      icon: <IoRainy />,
      line: "It's raining! Perfect weather for a cup of coffee.",
    },
    Snow: {
      icon: <FaRegSnowflake />,
      line: "Snow is falling! Time to build a snowman.",
    },
    Clear: {
      icon: <IoSunny />,
      line: "Clear skies ahead! Enjoy the sunshine.",
    },
    Clouds: {
      icon: <IoCloudSharp />,
      line: "Cloudy skies today. Perfect weather for a walk.",
    },
    Atmosphere: {
      icon: <MdFoggy />,
      line: "Foggy and mysterious. Drive safely!",
    },
  };




  let city = '';
  let temperature;
  let weatherDescription = '';

  if (weatherData) {
    city = weatherData.city.name;
    temperature = parseInt(weatherData.list[0].main.temp);
    weatherDescription = weatherData.list[0].weather[0].main;
  }

  const funLine = weatherMapping[weatherDescription] ? weatherMapping[weatherDescription].line : "";
  console.log(funLine)


  const currentDate = new Date();
  const day = String(currentDate.getDate());
  console.log(day);

  const monthAbbreviations = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const month = monthAbbreviations[currentDate.getMonth()];

  console.log(month);



  // function fahrenheitToCelsius(F) {
  //   return (F - 32) * 5 / 9;
  // }

  function celsiusToFahrenheit(C) {
    return (C * 9 / 5) + 32;
  }


  function toggleTemperature() {
    const newUnit = currentUnit === 'C' ? 'F' : 'C';
    setCurrentUnit(newUnit);
  }

  function convertTemperature(temp, unit) {
    return unit === 'C' ? Math.round(temp) : Math.round(celsiusToFahrenheit(temp));
  }



  const showIcon = (condition) => {
    return weatherMapping[condition] ? weatherMapping[condition].icon : "";
  };

  return (
    <div className=' z-10 w-full h-screen relative bg-[#0b101c] flex'>

      {/* container with max width */}
      <div className='w-full h-full max-w-7xl max-h-[90%] m-auto flex gap-5 '>
        <section className=' w-full max-w-[70%] flex flex-col gap-5 px-5'>

          {/* date today */}
          {/* <div className='absolute top-0 left-0 w-[80px] h-[80px] backdrop-blur-lg flex justify-center items-center rounded-md border-r border-b border-gray-200'>
    <p className='text-white uppercase text-center font-semibold text-xl'>{month} <br />{day}</p>
  </div> */}



          <div className='h-full w-full flex justify-between items-center  bg-[#1f2a3a] p-5 rounded-md'>

            {/* location */}
            <div className='flex flex-col gap-2'>
              <p className='text-4xl text-white '>{city}</p>
              <p className='text-white uppercase font-semibold '>{month}, {day}</p>

              <p className='text-5xl text-white relative'>{convertTemperature(temperature, currentUnit)}
                <span className='absolute top-0 left-30'>&deg;</span></p>


              <p className='text-white font-semibold'>

                <Typewriter
                  options={{
                    strings: [funLine],
                    autoStart: true,
                    loop: true,
                  }}
                /></p>




            </div>

            {/* weather today */}
            <div className='flex flex-col items-center gap-5 '>

              <span className='text-7xl text-white'>{showIcon(weatherData?.list[0].weather[0].main)}</span>
              <p className='text-xl text-white font-semibold'>{weatherDescription}</p>


            </div>





          </div>

          {/* hourly forecast */}
          <div className='h-full bg-[#1f2a3a] rounded-md p-5'>
            <h2 className='text-white font-semibold uppercase'>Today's forecast</h2>

            <ul className='flex gap-5 justify-between mt-5'>
              {weatherData?.list.slice(0, 6).map((item, index) => (
                <>

                  <li className='flex items-center' key={index}>
                    {

                      <WeatherCard data={item} convertTemperature={convertTemperature} unit={currentUnit} type="hourly" flexDirection="column" showIcon={showIcon} />

                    }

                  </li>
                  {
                    index < 5 && <div className='w-[0.8px] h-[100px] bg-white'></div>
                  }
                </>

              ))}

            </ul>

          </div>

          {/* air condition */}

          <div className='relative h-full grid grid-cols-2 items-center gap-5 p-5 bg-[#1f2a3a] rounded-md'>

            <div className='flex gap-5 items-center'>
              <span className='text-white text-3xl'>
                <FaThermometerFull />
              </span>

              <div className='flex flex-col gap-2'>
                <p className='text-white font-semibold text-lg'>Real Feel</p>
                <p className='text-3xl text-white text-semibold'>{weatherData?.list[0].main.feels_like.toFixed(0)}&deg;</p>
              </div>
            </div>

            <div className='flex gap-5 items-center'>
              <span className='text-white text-3xl'>
                <FaWind />
              </span>

              <div className='flex flex-col gap-2'>
                <p className='text-white font-semibold text-lg'>Wind</p>
                <p className='text-3xl text-white text-semibold'>{weatherData?.list[0].wind.speed} km/hr</p>
              </div>
            </div>

            <div className='flex gap-5 items-center'>
              <span className='text-white text-3xl'>
                <FaDroplet />
              </span>

              <div className='flex flex-col gap-2'>
                <p className='text-white font-semibold text-lg'>Humidity</p>
                <p className='text-3xl text-white text-semibold'>{weatherData?.list[0].main.humidity}</p>
              </div>
            </div>

            <div className='flex gap-5 items-center'>
              <span className='text-white text-4xl'><TbUvIndex /></span>

              <div className='flex flex-col gap-2'>
                <p className='text-white font-semibold text-lg'>UV Index</p>
                <p className='text-3xl text-white text-semibold'>3</p>
              </div>
            </div>

            {/* more info */}
            <button onClick={() => setModalActive(true)} className='absolute right-0 top-0  px-2 rounded-l-full font-semibold bg-white'>More Info</button>



          </div>

          {/* Weather Details modal */}
          {
            ismodalActive && <div className='fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-[999]'>
              <dir className="absolute w-full h-full bg-black/50" onClick={() => setModalActive(false)}></dir>
              <div className='z-20'>
                <WeatherDetails convertTemperature={convertTemperature} unit={currentUnit} isActive={ismodalActive} />

              </div>
            </div>
          }





        </section>



        {/* section with search bar and daily forecast */}
        <section className='w-full h-full flex flex-col gap-5 max-w-[30%] '>


          <div className='w-full flex items-center  justify-between bg-[#1f2a3a] p-5 rounded-md'>
            <SearchForm />
            {/* temp toggle button */}

            <button onClick={toggleTemperature} className='h-8 w-8 bg-white rounded-full flex justify-center items-center font-semibold'>
              <p>&deg;{currentUnit}</p>
            </button>




          </div>


          <div className='bg-[#1f2a3a] h-full w-full rounded-md p-5 flex flex-col gap-5'>

            <h2 className='font-semibold text-white uppercase '>Daily forecast</h2>
            <ul className='h-full flex flex-col justify-between '>
              {weatherData?.list.filter((i) => i.dt_txt.split(" ")[1].split(":")[0] === "00").map((item, index) => (

                <>
                  <li key={index}>
                    <WeatherCard data={item} type="daily" convertTemperature={convertTemperature} unit={currentUnit} flexDirection="row" showIcon={showIcon} />

                  </li>

                  {
                    index < weatherData?.list.filter((i) => i.dt_txt.split(" ")[1].split(":")[0] === "00").length - 1 && <div className='w-full h-[0.8px] bg-white self-center'></div>
                  }
                </>

              ))}

            </ul>


          </div>





        </section>


      </div>

    </div>
  )
}
