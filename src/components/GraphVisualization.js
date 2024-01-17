// GraphVisualization.js
import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const GraphVisualization = ({ emissions }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: emissions.map((record) => record.pollutant),
      datasets: [
        {
          label: 'Emissions',
          data: emissions.map((record) => parseFloat(record.value)),
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };

    new Bar(ctx, {
      data: data,
    });
  }, [emissions]);

  return (
    <div>
      <h2>Graph Visualization</h2>
      <canvas ref={chartRef} width="400" height="200" />
    </div>
  );
};

export default GraphVisualization;
