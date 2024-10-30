import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';
import { useEmployeeContext } from '../EmployeeContext'; // Importer le contexte

// Sample states data
const states = [
  { name: 'DevTest', abbreviation: 'DT' },
  { name: "Alabama", abbreviation: "AL" },
  { name: "Alaska", abbreviation: "AK" },
  { name: "American Samoa", abbreviation: "AS" },
  { name: "Arizona", abbreviation: "AZ" },
  { name: "Arkansas", abbreviation: "AR" },
  { name: "California", abbreviation: "CA" },
  { name: "Colorado", abbreviation: "CO" },
  { name: "Connecticut", abbreviation: "CT" },
  { name: "Delaware", abbreviation: "DE" },
  { name: "District Of Columbia", abbreviation: "DC" },
  { name: "Federated States Of Micronesia", abbreviation: "FM" },
  { name: "Florida", abbreviation: "FL" },
  { name: "Georgia", abbreviation: "GA" },
  { name: "Guam", abbreviation: "GU" },
  { name: "Hawaii", abbreviation: "HI" },
  { name: "Idaho", abbreviation: "ID" },
  { name: "Illinois", abbreviation: "IL" },
  { name: "Indiana", abbreviation: "IN" },
  { name: "Iowa", abbreviation: "IA" },
  { name: "Kansas", abbreviation: "KS" },
  { name: "Kentucky", abbreviation: "KY" },
  { name: "Louisiana", abbreviation: "LA" },
  { name: "Maine", abbreviation: "ME" },
  { name: "Marshall Islands", abbreviation: "MH" },
  { name: "Maryland", abbreviation: "MD" },
  { name: "Massachusetts", abbreviation: "MA" },
  { name: "Michigan", abbreviation: "MI" },
  { name: "Minnesota", abbreviation: "MN" },
  { name: "Mississippi", abbreviation: "MS" },
  { name: "Missouri", abbreviation: "MO" },
  { name: "Montana", abbreviation: "MT" },
  { name: "Nebraska", abbreviation: "NE" },
  { name: "Nevada", abbreviation: "NV" },
  { name: "New Hampshire", abbreviation: "NH" },
  { name: "New Jersey", abbreviation: "NJ" },
  { name: "New Mexico", abbreviation: "NM" },
  { name: "New York", abbreviation: "NY" },
  { name: "North Carolina", abbreviation: "NC" },
  { name: "North Dakota", abbreviation: "ND" },
  { name: "Northern Mariana Islands", abbreviation: "MP" },
  { name: "Ohio", abbreviation: "OH" },
  { name: "Oklahoma", abbreviation: "OK" },
  { name: "Oregon", abbreviation: "OR" },
  { name: "Palau", abbreviation: "PW" },
  { name: "Pennsylvania", abbreviation: "PA" },
  { name: "Puerto Rico", abbreviation: "PR" },
  { name: "Rhode Island", abbreviation: "RI" },
  { name: "South Carolina", abbreviation: "SC" },
  { name: "South Dakota", abbreviation: "SD" },
  { name: "Tennessee", abbreviation: "TN" },
  { name: "Texas", abbreviation: "TX" },
  { name: "Utah", abbreviation: "UT" },
  { name: "Vermont", abbreviation: "VT" },
  { name: "Virgin Islands", abbreviation: "VI" },
  { name: "Virginia", abbreviation: "VA" },
  { name: "Washington", abbreviation: "WA" },
  { name: "West Virginia", abbreviation: "WV" },
  { name: "Wisconsin", abbreviation: "WI" },
  { name: "Wyoming", abbreviation: "WY" }
];

const EmployeeForm = () => {
  // Import the addEmployee function from context to update global employee state
  const { addEmployee } = useEmployeeContext();

  // Local state for each form field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [department, setDepartment] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls the modal display

  // Function to handle form submission, add employee, and open confirmation modal
  const saveEmployee = () => {
    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth ? dateOfBirth.toLocaleDateString() : '',
      startDate: startDate ? startDate.toLocaleDateString() : '',
      department,
      street,
      city,
      state,
      zipCode,
    };
    addEmployee(newEmployee); // Add employee to global state
    setIsModalOpen(true); // Display confirmation modal
  };

  return (
    <div className="container">
      <h1>HR Net</h1>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label>Date of Birth</label>
        <DatePicker selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} />

        <label>Start Date</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

        <fieldset className="address">
          <legend>Address</legend>
          <label>Street</label>
          <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
          <label>City</label>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
          <label>State</label>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            {states.map((stateOption) => (
              <option key={stateOption.abbreviation} value={stateOption.abbreviation}>
                {stateOption.name}
              </option>
            ))}
          </select>
          <label>Zip Code</label>
          <input type="number" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </fieldset>

        <label>Department</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
      <button onClick={saveEmployee}>Save</button>

      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal-content">
        <button className="modal-close-button" onClick={() => setIsModalOpen(false)}>✕</button>
        <p>Employee Created!</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default EmployeeForm;