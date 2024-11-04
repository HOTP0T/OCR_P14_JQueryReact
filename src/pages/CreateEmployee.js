import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { EmployeeContext } from '../EmployeeContext';
import Dropdown from '@hotp0t/dropdown-package';

Modal.setAppElement('#root'); // Setting root element for accessibility with Modal

function CreateEmployee() {
  const { addEmployee } = useContext(EmployeeContext); // Accessing addEmployee function from context
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  }); // State to manage form inputs
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to manage modal visibility

  // List of departments for the dropdown menu
  const departments = [
    { label: "Sales", value: "Sales" },
    { label: "Marketing", value: "Marketing" },
    { label: "Engineering", value: "Engineering" },
    { label: "Human Resources", value: "Human Resources" },
    { label: "Legal", value: "Legal" }
  ];

  // List of US states for the dropdown menu
  const states = [
    { value: 'DT', label: 'DevTest' },
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AS", label: "American Samoa" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "DC", label: "District Of Columbia" },
    { value: "FM", label: "Federated States Of Micronesia" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "GU", label: "Guam" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MH", label: "Marshall Islands" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "MP", label: "Northern Mariana Islands" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PW", label: "Palau" },
    { value: "PA", label: "Pennsylvania" },
    { value: "PR", label: "Puerto Rico" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VI", label: "Virgin Islands" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" }
  ];

  // Handles generic input changes for text fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handles selection in the department dropdown
  const handleSelectDepartment = (selectedValue) => {
    setFormData({ ...formData, department: selectedValue });
  };

  // Handles date selection and formats it to exclude time
  const handleDateChange = (date, field) => {
    const formattedDate = date.toISOString().split('T')[0]; // Format date to 'YYYY-MM-DD'
    setFormData({ ...formData, [field]: formattedDate });
  };

  // Handles selection in the state dropdown
  const handleSelectState = (selectedValue) => {
    setFormData({ ...formData, state: selectedValue });
  };

  // Submits form data and triggers modal confirmation
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    setModalIsOpen(true);
  };

  return (
    <div className="container">
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} />

        {/* Date of Birth with React DatePicker */}
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <br />
        <DatePicker
          selected={formData.dateOfBirth ? new Date(formData.dateOfBirth) : null}
          onChange={(date) => handleDateChange(date, 'dateOfBirth')}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select date of birth"
        />

        {/* Start Date with React DatePicker */}
        <br />
        <label htmlFor="startDate">Start Date</label>
        <br />
        <DatePicker
          selected={formData.startDate ? new Date(formData.startDate) : null}
          onChange={(date) => handleDateChange(date, 'startDate')}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select start date"
        />

        {/* Department Dropdown */}
        <br />
        <label htmlFor="department">Department</label>
        <Dropdown
          options={departments}
          selectedOption={formData.department}
          onChange={handleSelectDepartment}
          placeholder="Select a department"
        />

        {/* Address Section */}
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" value={formData.street} onChange={handleChange} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" value={formData.city} onChange={handleChange} />

          <label htmlFor="state">State</label>
          <Dropdown
            options={states}
            selectedOption={formData.state}
            onChange={handleSelectState}
            placeholder="Select a state"
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" type="number" value={formData.zipCode} onChange={handleChange} />
        </fieldset>

        <button type="submit">Save</button>
      </form>

      {/* Confirmation Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Employee Created"
      >
        <h2>Employee Created!</h2>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default CreateEmployee;