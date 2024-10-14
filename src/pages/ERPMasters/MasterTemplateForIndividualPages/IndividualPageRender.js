import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Card, CardBody, Col } from "reactstrap";
import { PATCH_MASTER_REGISTER, POST_MASTER_REGISTER } from "../../../slices/ERPMasters/Register/thunk";
import Area from "../MasterIndividualPages/Accounting/Area";
import AccountGroup from "../MasterIndividualPages/Accounting/AccountGroup";
import { GetDetails } from "../MasterCommonFunctions/getDetails";

const IndividualPageRender = () => {
  const [formID, setFormID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(null);
  const [editData, seteditData] = useState(null);
  const [currentMode, setCurrentMode] = useState("new");

  const masterRef = useRef();
  const dispatch = useDispatch();
  const location = useLocation();
  const rowData = location.state?.rowData;


  const filteredData = rowData
    ? Object.keys(rowData)
        .filter((key) => !key.endsWith("ID") && !key.includes("masterFilter"))
        .reduce((obj, key) => {
          obj[key] = rowData[key];
          return obj;
        }, {})
    : null;

  useEffect(() => {
    if (rowData) {
      console.log("Received rowData:", rowData);
      seteditData(rowData); // Set editData when rowData changes (full data, including fields with ID or masterFilter)
      setCurrentMode("edit");
    }
  }, [rowData]);

  useEffect(() => {
    if (editData) {
      const editForm = async () => {
        if (masterRef.current) {
          await masterRef.current.funcView(editData); // Pass full editData to form
        }
      };
      editForm();
    }
  }, [editData]);

  useEffect(() => {
    const currentFormID = new URLSearchParams(window.location.search).get(
      "FormID"
    );
    setFormID(currentFormID);
  }, [window.location.search]);

  const renderComponent = () => {
    return formID === "FnA.Masters.Accounting.AccountGroup" ? (
      <AccountGroup ref={masterRef} onSave={handleSave} />
    ) : formID === "FnA.Masters.Accounting.Area" ? (
      <Area ref={masterRef} onSave={handleSave} />
    ) : null;
  };

  const saveOn = () => {
    if (masterRef.current) {
      masterRef.current.submitForm();
    }
  };

  const handleSave = async (stringData) => {
    setLoading(true);
    setSaveSuccess(null);
    try {
      if (masterRef.current) {
        const obj = JSON.parse(stringData);
        console.log(obj);
        let response;
        if (currentMode === "new") {
          response = dispatch(
            POST_MASTER_REGISTER({ masterURL: GetDetails(formID, "saveURL"), body: obj })
          );
        } else if (currentMode === "edit") {
          response = dispatch(
            PATCH_MASTER_REGISTER({ masterURL: GetDetails(formID, "saveURL"), body: obj })
          );
        }
        if (currentMode === "edit") setCurrentMode("new");
        console.log(response);

        if (response.payload.success) {
          setSaveSuccess(true);
          masterRef.current.reset(); // Clear form data only on successful save
        } else {
          setSaveSuccess(false);
        }
      } else {
        throw new Error("masterRef.current.funcsave is not a function");
      }
    } catch (err) {
      setSaveSuccess(false);
      console.error("Error during save operation:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Col xxl={4}>
        <Card className="card-height-100">
          <CardBody className="p-0">
            <div className="p-3">
              {renderComponent()}
              <div className="mt-3 pt-2">
                <Button onClick={saveOn}>Save</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default IndividualPageRender;
