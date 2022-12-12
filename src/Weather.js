import React from "react";
import axios from "axios";

import "./App.css";

export default function Weather(props) {
  let apiKey = `9b385bf584a6637913273ac2cfe59646`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    alert(
      `It's currently ${Math.round(response.data.main.temp)}C in ${
        response.data.name
      }`
    );
  }
}
