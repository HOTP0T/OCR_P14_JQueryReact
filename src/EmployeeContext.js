// src/EmployeeContext.js
import React, { createContext, useState, useContext } from 'react';

// Créer le contexte
const EmployeeContext = createContext();

// Hook pour utiliser le contexte
export const useEmployeeContext = () => useContext(EmployeeContext);

// Composant fournisseur du contexte
export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // Fonction pour ajouter un employé
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};