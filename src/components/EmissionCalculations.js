// EmissionCalculations.js
import React from 'react';
import '../styles/EmissionCalculations.css';


const EmissionCalculations = ({ emissions }) => {
  const calculateTotalEmissions = (pollutant) => {
    return emissions
      .filter((record) => record.pollutant === pollutant)
      .reduce((total, record) => total + parseFloat(record.value), 0);
  };

  return (
    <div>
      <h2>Emission Calculations</h2>
      <p>Total CO2 Emissions: {calculateTotalEmissions('CO2')}</p>
      <p>Total NOx Emissions: {calculateTotalEmissions('NOx')}</p>
      {/* Add more calculations based on pollutants */}
    </div>
  );
};

export default EmissionCalculations;
