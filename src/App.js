import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import { EmployeeProvider } from './EmployeeContext';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <div className="title">
          <img src="/images/logo_WealthHealth.webp" alt="Company Logo" />
          <h1>HRnet</h1>
        </div>
        <nav>
          <Link to="/">Create Employee</Link> | <Link to="/employee-list">View Employees</Link>
        </nav>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;