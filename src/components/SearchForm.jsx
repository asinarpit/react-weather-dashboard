import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { IoIosSearch } from 'react-icons/io';


export default function SearchForm() {

  const [city, setCity] = useState('');
  const { fetchWeatherByCity } = useContext(WeatherContext);

  const handleSearch = (e) => {
    e.preventDefault();

    if (city.trim()) {
      fetchWeatherByCity(city);
    }
    else{
      alert("Please enter city name")
    }
  };
  return (
    <form className='flex items-center w-[300px] h-[30px] bg-white rounded-full overflow-hidden ' onSubmit={handleSearch}>
      <input value={city}
        onChange={(e) => setCity(e.target.value)} className='w-full px-5 hover:outline-none active:outline-none outline-none' type="text" placeholder='Search weather for a city...' />


      <button type='submit' className='pr-3 text-xl'>
        <IoIosSearch />

      </button>
    </form>

  )
}
