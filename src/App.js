// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<EmployeeForm />} />
      <Route path="/employee-list" element={<EmployeeList />} />
    </Routes>
  </Router>
);

export default App;