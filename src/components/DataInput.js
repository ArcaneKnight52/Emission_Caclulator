// DataInput.js
import React, { useState } from 'react';
import '../styles/DataInput.css';


const DataInput = ({ addEmissionRecord }) => {
  const [pollutant, setPollutant] = useState('');
  const [value, setValue] = useState('');

  const handleAddRecord = () => {
    addEmissionRecord({ pollutant, value });
    setPollutant('');
    setValue('');
  };

  return (
    <div>
      <h2>Data Input</h2>
      <label>
        Pollutant:
        <input type="text" value={pollutant} onChange={(e) => setPollutant(e.target.value)} />
      </label>
      <label>
        Value:
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <button onClick={handleAddRecord}>Add Record</button>
    </div>
  );
};

export default DataInput;
