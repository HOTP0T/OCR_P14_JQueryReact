import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { useEmployeeContext } from '../EmployeeContext'; // Import context to access employee list

const EmployeeList = () => {
  // Retrieve employees from global context
  const { employees } = useEmployeeContext();

  // Define table columns for employee data
  const columns = useMemo(
    () => [
      { Header: 'First Name', accessor: 'firstName' },
      { Header: 'Last Name', accessor: 'lastName' },
      { Header: 'Start Date', accessor: 'startDate' },
      { Header: 'Department', accessor: 'department' },
      { Header: 'Date of Birth', accessor: 'dateOfBirth' },
      { Header: 'Street', accessor: 'street' },
      { Header: 'City', accessor: 'city' },
      { Header: 'State', accessor: 'state' },
      { Header: 'Zip Code', accessor: 'zipCode' },
    ],
    [] // Only runs once since column configuration is static
  );

  // Use react-table to manage table structure and data
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: employees, // Table data from context
  });

  return (
    <div className="container">
      <h1>Current Employees</h1>
      <table {...getTableProps()} className="employee-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <a href="/">Home</a> {/* Link to navigate back to home */}
    </div>
  );
};

export default EmployeeList;