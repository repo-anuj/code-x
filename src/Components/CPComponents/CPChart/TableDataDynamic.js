import React, { useEffect, useState } from 'react';
import TableContainer from "../../Common/TableContainerReactTable";
import { Spinner } from 'reactstrap';

const DefaultTable = ({ dataFromAPI }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [columns, setColumns] = useState([]);
  const [defaultTable, setDefaultTable] = useState([]);

  const dataFields = Object.keys(dataFromAPI[0] || {});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Map API data to match columns
        const tableData = dataFromAPI.map(singleData => 
          dataFields.reduce((acc, field) => {
            acc[field] = singleData[field]; // Keep original field names
            return acc;
          }, {})
        );

        setDefaultTable(tableData);

        // Create column data
        const columnData = dataFields.map(field => ({
          accessorKey: field, // Use original field names
          header: field,
          enableColumnFilter: false,
        }));

        setColumns(columnData);
      } catch (err) {
        console.error('Error:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataFromAPI]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Error loading data. Please try again later.</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <TableContainer
        columns={columns}
        data={defaultTable}
        customPageSize={10}
        SearchPlaceholder='Search...'
      />
    </React.Fragment>
  );
};

export { DefaultTable };
