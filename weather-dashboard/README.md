# React Essentials Assignment - Weather Dashboard

## Overview

This project was built as part of my React learning journey. The goal was to understand how to manage side effects in React using the `useEffect` hook by building a Weather Dashboard application. The application fetches real-time weather data from the OpenWeatherMap API and dynamically updates the user interface based on user input while demonstrating asynchronous data fetching, loading states, and error handling.

## Live Demo

**Deployment Link:** https://weather-dashboard-49ht.onrender.com

## Features

### A1: API Integration with useEffect

* Fetched real-time weather data from the OpenWeatherMap API.
* Used the `useEffect` hook to trigger API requests when the selected city changes.
* Managed asynchronous data fetching using the Fetch API.

### A2: State Management with React Hooks

Implemented application state using the `useState` hook.

Managed the following states:

* Current City
* Selected Search City
* Weather Data
* Loading State
* Error State

### A3: Component-Based Architecture

Structured the application into reusable React components:

* SearchBar
* WeatherCard
* Loader
* Error

Each component is responsible for a specific part of the application, making the code modular, reusable, and easy to maintain.

### A4: Dynamic Weather Information

* Search weather by city name.
* Display current temperature.
* Show weather condition.
* Display humidity level.
* Display wind speed.
* Automatically update weather information for the searched city.

### A5: Loading & Error Handling

* Display a loading indicator while fetching weather data.
* Show user-friendly error messages for invalid city names.
* Prevent application crashes by handling API errors gracefully.

### A6: Responsive and Modern UI

* Modern card-based interface.
* Responsive layout for desktop, tablet, and mobile devices.
* Gradient background with clean typography.
* Smooth hover effects and transitions.
* Weather information displayed in an easy-to-read format.

## Technologies Used

* React.js
* JavaScript (ES6+)
* JSX
* CSS3
* Fetch API
* React Hooks (`useState`, `useEffect`)
* OpenWeatherMap API

## Learning Outcomes

Through this project, I gained hands-on experience with:

* React `useEffect` Hook
* API Integration
* Asynchronous Data Fetching
* Side Effect Management
* React State Management with `useState`
* Controlled Components
* Loading and Error Handling
* Component-Based Architecture
* Conditional Rendering
* Responsive UI Design
* Modern CSS Styling

## Project Structure

```text
weather-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── Loader.jsx
│   │   └── Error.jsx
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── package.json
└── README.md
```
