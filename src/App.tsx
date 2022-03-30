import React, {createRef} from 'react';
import './App.css';
import {addZipcode, getZipcodes} from './zipcodeUtility';

function App() {


  let input = createRef<HTMLInputElement>();

  const addLocation = () => {
      const value = input.current?.value;
      if (value)
        addZipcode(value);
  }

  return (
    <div>
      <input type="text" placeholder="Enter a zipcode" ref={input} />
      <button onClick={addLocation}>Add location</button>
        <h3>
            Current zipcodes:
        </h3>
        <div>
            {JSON.stringify(getZipcodes())}
        </div>
    </div>
  );
}

export default App;
