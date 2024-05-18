import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios'; 
export const WeatherContext = createContext();


const API_KEY = "085ad07566b319c2915a85f161a7aa92"

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async (lat, lon) => {
    try {
      setLoading(true);
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCity = async (city) => {
    if(!city){
      alert('Please enter a city name.');
      return;
    }
    try {
      setLoading(true);
  
      const geocodingResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=${API_KEY}`);
      const geocodingData = geocodingResponse.data;

      if (geocodingData.length === 0) {
        throw new Error('City not found');
      }

      const { lat, lon } = geocodingData[0];

      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.log(error);
      alert("Please enter a valid city name")
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getCurrentLocationWeather = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            console.log(error)
            setLoading(false);
          }
        );
      } else {
        alert("Geolocation not supported")
        setLoading(false);
      }
    };
    getCurrentLocationWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData, loading, fetchWeatherByCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
