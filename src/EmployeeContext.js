import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // Fetch employees from json-server on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:3001/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  const addEmployee = async (employee) => {
    try {
      const response = await axios.post('http://localhost:3001/employees', employee);
      setEmployees((prevEmployees) => [...prevEmployees, response.data]);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};