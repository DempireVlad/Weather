# Weather App 🌤️

A modern weather application built with **React** using the **Open-Meteo API**.  
The app allows users to search for a city, view current weather, daily and hourly forecasts, and switch between different measurement units.

## ✨ Features

- Search weather by city name
- Current weather overview
- Daily forecast
- Hourly forecast filtered by selected day
- Unit switcher:
  - Temperature: °C / °F
  - Wind speed: km/h / mph
  - Precipitation: mm / inches
- Dynamic weather icons based on weather codes
- Clean and responsive UI (desktop-first)

## 🛠️ Built With

- React
- Vite
- Open-Meteo API
- CSS (custom styles)
- JavaScript (ES6+)

## 🌍 API

Weather data is provided by **Open-Meteo**:
- Forecast API
- Geocoding API

No API key required.


## ⚙️ Setup & Installation

### 1. Clone the repository
git clone 

### 2. Install dependencies
npm install

### 3. Run the project
npm run dev


##  📌 Notes

Weather units are handled directly via the API (no manual conversions).

The app re-fetches data automatically when units are changed.

Hourly forecast updates dynamically based on the selected day.

## 🧠 What I Learned

Managing complex state in React

Using useMemo for performance optimization

Working with external APIs

Building scalable component-based UI

Handling conditional rendering and derived data
