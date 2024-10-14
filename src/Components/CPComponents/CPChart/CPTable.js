import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom'; // Import navigate hook

// Utility function to standardize string format
const standardizeString = (str) => {
  return str
    .replace(/([A-Z])/g, ' $1') // Insert space before each uppercase letter
    .replace(/_/g, ' ')         // Replace underscores with spaces
    .trim()                     // Remove leading/trailing spaces
    .split(' ')                 // Split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' ');                 // Join back into a single string
};

const CPTable = ({ dataFromAPI, searchTerm }) => {
  // Set the page title
  document.title = "React Tables | Velzon - React Admin & Dashboard Template";

  // Navigate function
  const navigate = useNavigate();

  // State to keep track of the expanded row
  const [expandedRow, setExpandedRow] = useState(null);

  // Check if there are no results and a search term is provided
  const noResults = dataFromAPI.length === 0 && searchTerm.trim() !== "";

  // Define inline styles for the table and expanded rows
  const tableStyles = {
    header: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#4a4a4a',
      backgroundColor: '#f0f0f0',
      borderBottom: '2px solid #ccc',
      padding: '8px', // Adjusted padding for header
      textAlign: 'left',
    },
    rows: {
      padding: '8px', // Adjusted padding for rows
      backgroundColor: '#fff',
      cursor: 'pointer',
      borderBottom: '1px solid #eee',
      transition: 'background-color 0.3s ease',
      height: '50px', // Fixed row height
      fontSize: '14px', // Font size for row text
    },
    rowsHover: {
      backgroundColor: '#f7f7f7',
    },
    expandedRow: {
      padding: '15px', // Adjusted padding for expanded rows
      backgroundColor: '#fafafa',
      borderBottom: '1px solid #eee',
      color: '#555',
    },
    paginationButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      borderRadius: '5px',
      padding: '5px 10px',
      cursor: 'pointer',
      marginRight: '5px',
    },
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '15px',
    },
  };

  // Filter function to exclude keys ending with 'ID'
  const filterKeys = (data) => {
    return Object.entries(data).filter(([key]) => !key.endsWith('ID')); // Exclude only "ID" keys
  };

  // Define columns dynamically based on the keys of the first object in the data array
  const columns = filterKeys(dataFromAPI[0] || {}).map(([key]) => ({
    name: standardizeString(key), // Use the utility function for standardized naming
    selector: row => {
      // Display boolean values as 'Yes' or 'No'
      if (typeof row[key] === 'boolean') {
        return row[key] ? 'Yes' : 'No';
      }
      return row[key];
    },
    sortable: true,
    // Handle row click for navigation
    cell: row => (
      <div onClick={() => handleRowData(row)} style={{ cursor: 'pointer' }}>
        {typeof row[key] === 'boolean' ? (row[key] ? 'Yes' : 'No') : row[key]}
      </div>
    ),
  }));

  // Handle row click to navigate
  const handleRowData = (fullRowData) => {
    const currentFormID = new URLSearchParams(window.location.search).get("FormID");
    const areaID = fullRowData.areaID;
    navigate(`/MasterForm?FormID=${currentFormID}`, {
      state: { rowData: fullRowData, areaID: areaID }
    });
  };

  // Expanded row content for mobile and desktop (showing all fields in a formatted way)
  const ExpandedComponent = ({ data }) => (
    <div style={tableStyles.expandedRow}>
      <table style={{ width: '30%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Field</th>
            <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #ccc' }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {filterKeys(data).map(([key, value]) => (
            <tr key={key}>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                {standardizeString(key)} {/* Use the utility function here too */}
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Toggle expanded row
  const handleRowToggle = (row) => {
    setExpandedRow(expandedRow === row ? null : row);
  };

  return (
    <React.Fragment>
      {noResults ? (
        <div className="text-center">
          <p>No results found!</p>
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={dataFromAPI}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          expandableRowDisabled={() => false} // Allow all rows to be expandable
          onRowExpandToggled={handleRowToggle} // Handle toggle to ensure only one row is open
          expandableRowExpanded={row => expandedRow === row} // Control which row is expanded
          pagination
          paginationComponentOptions={{
            rowsPerPageText: 'Rows per page:',
            rangeSeparatorText: 'of',
            selectAllRowsItem: true,
            selectAllRowsItemText: 'All',
          }}
          responsive
          striped
          highlightOnHover
          customStyles={{
            header: {
              style: {
                ...tableStyles.header,
                borderBottom: '2px solid #ccc',
                fontWeight: 'bold', // Bolding column names
              },
            },
            headCells: {
              style: {
                fontWeight: 'bold', // Also bold the head cells (columns)
                fontSize: '14px', // Adjust font size as needed
              },
            },
            rows: {
              style: tableStyles.rows,
              hoverStyle: tableStyles.rowsHover,
            },
            pagination: {
              container: tableStyles.paginationContainer,
              button: tableStyles.paginationButton,
            },
          }}
        />
      )}
    </React.Fragment>
  );
};

export default CPTable;
