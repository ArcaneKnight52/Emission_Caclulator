// App.js
import React, { useState, useEffect } from 'react';
import DataInput from './components/DataInput';
import EmissionCalculations from './components/EmissionCalculations';
import GraphVisualization from './components/GraphVisualization';
import EmissionTable from './components/EmissionTable';
import './styles/App.css';


const App = () => {
  const [emissions, setEmissions] = useState([]);

  useEffect(() => {
    // Fetch emissions data from the server on component mount
    // You can replace this with your backend API endpoint
    // For simplicity, we'll use dummy data here
    fetch('/api/emissions')
      .then((response) => response.json())
      .then((data) => setEmissions(data))
      .catch((error) => console.error('Error fetching emissions:', error));
  }, []);

  const addEmissionRecord = (record) => {
    setEmissions([...emissions, record]);
  };

  const deleteEmissionRecord = (recordId) => {
    setEmissions(emissions.filter((record) => record._id !== recordId));
  };

  return (
    <div>
      <h1>Emission Calculator</h1>
      <DataInput addEmissionRecord={addEmissionRecord} />
      <EmissionCalculations emissions={emissions} />
      <GraphVisualization emissions={emissions} />
      <EmissionTable emissions={emissions} deleteEmissionRecord={deleteEmissionRecord} />
    </div>
  );
};

export default App;
