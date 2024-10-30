import React, { createContext, useState, useContext } from 'react';

// Create a context to hold employee data across the application
const EmployeeContext = createContext();

// Custom hook to access the EmployeeContext data more easily
export const useEmployeeContext = () => useContext(EmployeeContext);

// Provider component to wrap around parts of the app that need access to employee data
export const EmployeeProvider = ({ children }) => {
  // State to store the list of employees
  const [employees, setEmployees] = useState([]);

  // Function to add a new employee to the employee state
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    // Provide the employee list and addEmployee function to child components
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};