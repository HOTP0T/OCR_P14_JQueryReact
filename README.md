# HRNet React Application

This project is a conversion of the original HRNet application, designed to manage employee records for WealthHealth. This updated version replaces jQuery with React components to enhance performance, maintainability, and user experience.

## Features

- **Date Picker**: Utilizes `react-datepicker` for selecting dates in the employee form.
- **Modal**: Uses `react-modal` for confirmation dialogs.
- **Employee List Table**: Built with `react-table` for a performant, interactive table.
- **Dropdowns**: Recreated using native `<select>` elements for simplicity.
- **Global State Management**: Manages employee data with React Context API.

## Folder Structure

- `src/`
  - `components/` - Contains `EmployeeForm` and `EmployeeList` components.
  - `EmployeeContext.js` - Sets up context to manage global state for employees.
  - `App.js` - Main application with routing.
  - `index.js` - Initializes the app and wraps it in the `EmployeeProvider`.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HOTP0T/OCR_P14_JQueryReact
   cd OCR_P14_JQueryReact
   ```

2. Install dependencies:
```bash
npm install
```

13. Install dependencies:
```bash
npm start
```

### Usage

- **Create Employee**: Go to the home page to add new employees.
- **View Employees**: Click on "View Current Employees" to view the list of employees.

## Available Scripts

- `npm start` - Runs the app in development mode.
- `npm run build` - Builds the app for production.