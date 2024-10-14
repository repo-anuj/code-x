import React, { Fragment, useEffect, useState } from "react";
import { CardBody, Col, Row, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";

// Column Filter Component
const Filter = ({ column, table }) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <>
      <DebouncedInput
        type="text"
        value={columnFilterValue ?? ""}
        onChange={(value) => column.setFilterValue(value)}
        placeholder="Search..."
        className="w-36 border shadow rounded"
        list={column.id + "list"}
      />
      <div className="h-1" />
    </>
  );
};

// Debounced Input Component for Global Filter
const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <input
      {...props}
      value={value}
      className="form-control border-0 search"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// Utility function to format headers
const formatHeader = (header) => {
  // Example formatting function
  return header
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/([_])/g, ' ')    // Replace underscores with spaces
    .toUpperCase();            // Convert to uppercase
};

// Main TableContainer Component
const TableContainer = ({
  columns,
  data,
  isGlobalFilter,
  customPageSize,
  tableClass = "table table-striped table-bordered",
  theadClass = "thead-dark",
  trClass = "",
  thClass = "",
  divClass = "table-responsive",
  SearchPlaceholder = "Search..."
}) => {
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [formID, setFormID] = useState(null);

  // Custom filter function
  const fuzzyFilter = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({ itemRank });
    return itemRank.passed;
  };

  // Filter columns to exclude those that end with 'ID' or are 'masterFilter'
  const filteredColumns = columns.filter(
    (column) => !column.accessorKey.endsWith("ID") && column.accessorKey !== "masterFilter"
  );

  // Initialize the table with necessary configurations
  const table = useReactTable({
    columns: filteredColumns, // Use the filtered columns
    data,
    filterFns: { fuzzy: fuzzyFilter },
    state: { columnFilters, globalFilter },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel()
  });

  // Handle pagination and page size
  const {
    getHeaderGroups,
    getRowModel,
    getCanPreviousPage,
    getCanNextPage,
    getPageOptions,
    setPageIndex,
    nextPage,
    previousPage,
    setPageSize,
    getState
  } = table;

  useEffect(() => {
    const currentFormID = new URLSearchParams(window.location.search).get(
      "FormID"
    );
    setFormID(currentFormID);
  }, [window.location.search]);

  useEffect(() => {
    if (customPageSize) setPageSize(customPageSize);
  }, [customPageSize, setPageSize]);

  const navigate = useNavigate();

  // This function filters out the 'ID' and 'masterFilter' fields for display purposes
  const filterRowDataForDisplay = (rowData) => {
    return Object.keys(rowData).reduce((acc, key) => {
      if (!key.endsWith("ID") && key !== "masterFilter") {
        acc[key] = rowData[key];
      }
      return acc;
    }, {});
  };

  const handleRowData = (fullRowData) => {
    const currentFormID = new URLSearchParams(window.location.search).get(
      "FormID"
    );
    const areaID = fullRowData.areaID;
    navigate(`/MasterForm?FormID=${currentFormID}`, {
      state: { rowData: fullRowData, areaID: areaID } // Send full row data, including IDs
    });
  };

  const handleEditClick = (row) => {
    const rowData = row.original;
    const rowDataForUI = filterRowDataForDisplay(rowData);
    handleRowData(rowData);
    console.log("Original Row Data:", rowData);
  };

  return (
    <Fragment>
      {isGlobalFilter && (
        <Row className="mb-3">
          <CardBody className="border border-dashed border-end-0 border-start-0">
            <form>
              <Row>
                <Col sm={5}>
                  <div className="search-box me-2 mb-2 d-inline-block col-12">
                    <DebouncedInput
                      value={globalFilter ?? ""}
                      onChange={(value) => setGlobalFilter(value)}
                      placeholder={SearchPlaceholder}
                    />
                    <i className="bx bx-search-alt search-icon"></i>
                  </div>
                </Col>
              </Row>
            </form>
          </CardBody>
        </Row>
      )}

      <div className={divClass} style={{ overflowX: "auto" }}>
        <Table
          hover
          className={tableClass}
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead className={theadClass}>
            {getHeaderGroups().map((headerGroup) => (
              <tr className={trClass} key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={thClass}
                    style={{
                      textAlign: "center",
                      border: "1px solid #dee2e6", // Light gray border
                      borderRight: "1px solid #dee2e6", // Ensure right border visibility
                      padding: "8px" // Adjust padding if needed
                    }}
                    {...{ onClick: header.column.getToggleSortingHandler() }}
                  >
                    {header.isPlaceholder ? null : (
                      <Fragment>
                        {formatHeader(
                          flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )
                        )}
                        {{
                          asc: " ",
                          desc: " ",
                        }[header.column.getIsSorted()] ?? null}
                        {header.column.getCanFilter() && (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        )}
                      </Fragment>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {getRowModel().rows.map((row) => (
              <tr
                style={{ cursor: "pointer" }}
                onClick={() => handleEditClick(row)}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{
                      textAlign: "center",
                      border: "1px solid #dee2e6", // Light gray border
                      borderRight: "1px solid #dee2e6", // Ensure right border visibility
                      padding: "8px", // Adjust padding if needed
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Row className="align-items-center mt-2 g-3 text-center text-sm-start">
        <div className="col-sm">
          <div className="text-muted">
            Showing{" "}
            <span className="fw-semibold ms-1">
              {getState().pagination.pageSize}
            </span>{" "}
            of <span className="fw-semibold">{data.length}</span> Results
          </div>
        </div>
        <div className="col-sm-auto">
          <ul className="pagination pagination-separated pagination-md justify-content-center justify-content-sm-start mb-0">
            <li
              className={
                !getCanPreviousPage() ? "page-item disabled" : "page-item"
              }
            >
              <Link to="#" className="page-link" onClick={previousPage}>
                Previous
              </Link>
            </li>
            {getPageOptions().map((pageIndex) => (
              <li
                key={pageIndex}
                className={
                  getState().pagination.pageIndex === pageIndex
                    ? "page-item active"
                    : "page-item"
                }
              >
                <Link
                  to="#"
                  className="page-link"
                  onClick={() => setPageIndex(pageIndex)}
                >
                  {pageIndex + 1}
                </Link>
              </li>
            ))}
            <li
              className={!getCanNextPage() ? "page-item disabled" : "page-item"}
            >
              <Link to="#" className="page-link" onClick={nextPage}>
                Next
              </Link>
            </li>
          </ul>
        </div>
      </Row>
    </Fragment>
  );
};

export default TableContainer;
