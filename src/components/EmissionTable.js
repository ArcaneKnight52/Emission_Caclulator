// EmissionTable.js
import React from 'react';
import '../styles/EmissionTable.css';


const EmissionTable = ({ emissions, deleteEmissionRecord }) => {
  return (
    <div>
      <h2>Emission Records</h2>
      <table>
        <thead>
          <tr>
            <th>Pollutant</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emissions.map((record) => (
            <tr key={record._id}>
              <td>{record.pollutant}</td>
              <td>{record.value}</td>
              <td>
                <button onClick={() => deleteEmissionRecord(record._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmissionTable;
