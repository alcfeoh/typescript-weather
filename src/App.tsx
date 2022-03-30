import React, {createRef, useState} from 'react';
import './App.css';
import {addZipcode, getZipcodes} from './zipcodeUtility';
import {getCurrentConditions} from './apiUtility';
import {WeatherResponse} from './api.types';

function App() {

  let [weatherConditions, setWeatherConditions] = useState<WeatherResponse[]>([]);
  let input = createRef<HTMLInputElement>();

  const addLocation = () => {
      const value = input.current?.value;
      if (value) {
          addZipcode(value);
          getCurrentConditions(value).then(data => {
              let newConditions = [...weatherConditions, data];
              setWeatherConditions(newConditions);
          })
      }
  }

  return (
    <div>
      <input type="text" placeholder="Enter a zipcode" ref={input} />
      <button onClick={addLocation}>Add location</button>
        <h3>
            Current conditions:
        </h3>
        <div>
            {weatherConditions.map(data =>
                <div>City: {data.name} - Weather: {data.weather[0].main}</div>
            )}
        </div>
    </div>
  );
}

export default App;
