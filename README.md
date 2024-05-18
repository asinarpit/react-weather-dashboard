# React Weather Dashboard

This is a React weather dashboard application that fetches weather data from the OpenWeather API. It utilizes Axios for making HTTP requests to the API and Context API for state management. The styling of the application is done using Tailwind CSS.

## Features

- Fetches weather data from the OpenWeather API based on user input (city name).
- Displays current weather conditions including temperature, humidity, wind speed, etc.
- Provides a clean and intuitive user interface for easy navigation.

## Technologies Used

- React.js
- Axios
- Context API
- Tailwind CSS
- OpenWeather API

## Installation

1. Clone the repository:

```
git clone <repository_url>
```

2. Install dependencies:

```
cd react-weather-dashboard
npm install
```

3. Obtain an API key from [OpenWeather](https://openweathermap.org/) and replace `<YOUR_API_KEY>` in the `WeatherContext.js` file with your actual API key.

4. Start the development server:

```
npm start
```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- Enter the name of a city in the input field and press Enter or click the "Search" button.
- The weather information for the entered city will be displayed on the dashboard.
- You can search for weather data of different cities by repeating the above steps.


## Credits

- **React**: A JavaScript library for building user interfaces - [React](https://reactjs.org/)
- **Axios**: Promise-based HTTP client for the browser and Node.js - [Axios](https://axios-http.com/)
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs - [Tailwind CSS](https://tailwindcss.com/)
- **OpenWeather API**: Weather data provider - [OpenWeather](https://openweathermap.org/)


