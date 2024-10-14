// Example column field array for 'Area'
const areaField = ["areaName", "areaID", "code", "isActive"];

// Current form ID fetched from URL parameters
const formID = new URLSearchParams(window.location.search).get('FormID');

const getColumnForTable = () => {
  // Logic to return different columns based on formID
  if (formID === "FnA.Masters.Accounting.Area") {
    return areaField;
  }
  // Add additional conditions as needed
  return []; // Default to an empty array if formID doesn't match
};

export default getColumnForTable;
