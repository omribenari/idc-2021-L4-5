import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const Weather2 = (props) => {
  let { id } = useParams();
  const [name, setName] = useState(id || "New York");
  const [weather, setWeather] = useState({});
  const [count, setCount] = useState(0);

  let history = useHistory();

  useEffect(() => {
    const key = "af4bef339069f117d3aafbea2cb7e7c5";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`;
    axios.get(url).then((response) => {
      if (response && response.data && response.status === 200) {
        setWeather(response.data);
      }
    });
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      {weather.main && (
        <div>
          <div>{weather.main.temp}</div>
          <div>{weather.weather[0].main}</div>
          <div>Fills like {weather.main.feels_like}</div>
          <button
            onClick={() => {
              setName("London");
            }}
          >
            go to London
          </button>
          <div>Count: {count}</div>
          <button
            type="button"
            onClick={() => {
              history.push("/");
            }}
          >
            Go home
          </button>
        </div>
      )}
    </div>
  );
};

export default Weather2;
