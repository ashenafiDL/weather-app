import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import ErrorPage from "./components/error";

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      console.log(import.meta.env);

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div>
      {typeof data.main != "undefined" ? (
        <Weather data={data} />
      ) : (
        <ErrorPage data={data} />
      )}
    </div>
  );
}
