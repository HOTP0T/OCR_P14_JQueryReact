import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../EmployeeContext';

function EmployeeList() {
  const { employees } = useContext(EmployeeContext);

  // State for sorting configuration with three states: ascending, descending, and default
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'default' });

  // Sorting function with default option to reset sorting
  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortConfig.direction === 'default' || sortConfig.key === null) return 0; // No sorting if direction is default or key is null

    let valueA = a[sortConfig.key];
    let valueB = b[sortConfig.key];

    // Parse dates for sorting if key is date-related
    if (sortConfig.key === 'dateOfBirth' || sortConfig.key === 'startDate') {
      valueA = new Date(valueA);
      valueB = new Date(valueB);
    }

    // Sorting logic based on direction
    if (valueA < valueB) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (valueA > valueB) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  });

  // Handler to cycle sorting states
  const handleSort = (key) => {
    setSortConfig((prevConfig) => {
      let direction;
      if (prevConfig.key === key) {
        // Cycle through directions: ascending -> descending -> default
        direction = prevConfig.direction === 'ascending' ? 'descending' 
                  : prevConfig.direction === 'descending' ? 'default' 
                  : 'ascending';
      } else {
        // Default to ascending if sorting a new column
        direction = 'ascending';
      }
      return { key, direction };
    });
  };

  return (
    <div className="container">
      <h2>Current Employees</h2>

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('firstName')}>First Name {sortConfig.key === 'firstName' ? (sortConfig.direction === 'ascending' ? '▲' : sortConfig.direction === 'descending' ? '▼' : '') : ''}</th>
            <th onClick={() => handleSort('lastName')}>Last Name {sortConfig.key === 'lastName' ? (sortConfig.direction === 'ascending' ? '▲' : sortConfig.direction === 'descending' ? '▼' : '') : ''}</th>
            <th onClick={() => handleSort('startDate')}>Start Date {sortConfig.key === 'startDate' ? (sortConfig.direction === 'ascending' ? '▲' : sortConfig.direction === 'descending' ? '▼' : '') : ''}</th>
            <th onClick={() => handleSort('department')}>Department {sortConfig.key === 'department' ? (sortConfig.direction === 'ascending' ? '▲' : sortConfig.direction === 'descending' ? '▼' : '') : ''}</th>
            <th onClick={() => handleSort('dateOfBirth')}>Date of Birth {sortConfig.key === 'dateOfBirth' ? (sortConfig.direction === 'ascending' ? '▲' : sortConfig.direction === 'descending' ? '▼' : '') : ''}</th>
            <th onClick={() => handleSort('street')}>Street {sortConfig.key === 'street' ? (sortConfig.direction === 'ascending' ? '▲' : sortConfig.direction === 'descending' ? '▼' : '') : ''}</th>
            <th onClick={() => handleSort('city')}>City {sortConfig.key === 'city' ? (sortConfig.direction === 'ascending' ? '▲' : sortConfig.direction === 'descending' ? '▼' : '') : ''}</th>
            <th onClick={() => handleSort('state')}>State {sortConfig.key === 'state' ? (sortConfig.direction === 'ascending' ? '▲' : sortConfig.direction === 'descending' ? '▼' : '') : ''}</th>
            <th onClick={() => handleSort('zipCode')}>Zip Code {sortConfig.key === 'zipCode' ? (sortConfig.direction === 'ascending' ? '▲' : sortConfig.direction === 'descending' ? '▼' : '') : ''}</th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;