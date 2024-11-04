import React, { useContext, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { EmployeeContext } from '../EmployeeContext';

function EmployeeList() {
  const { employees } = useContext(EmployeeContext);

  // Define columns for react-table
  const columns = useMemo(() => [
    { Header: 'First Name', accessor: 'firstName' },
    { Header: 'Last Name', accessor: 'lastName' },
    { Header: 'Start Date', accessor: 'startDate' },
    { Header: 'Department', accessor: 'department' },
    { Header: 'Date of Birth', accessor: 'dateOfBirth' },
    { Header: 'Street', accessor: 'street' },
    { Header: 'City', accessor: 'city' },
    { Header: 'State', accessor: 'state' },
    { Header: 'Zip Code', accessor: 'zipCode' },
  ], []);

  // Define data for react-table
  const data = useMemo(() => employees, [employees]);

  // Initialize the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useGlobalFilter, // For global filtering
    useSortBy // For sorting
  );

  return (
    <div className="container">
      <h2>Current Employees</h2>
      
      {/* Global Filter Input */}
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
      />

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' ▼'
                      : ' ▲'
                    : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;