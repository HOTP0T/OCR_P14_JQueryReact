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
          <img src="https://user.oc-static.com/upload/2024/02/21/17085055322514_Capture%20d%E2%80%99e%CC%81cran%202024-02-21%20a%CC%80%2009.52.02.png" alt="Company Logo" />
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