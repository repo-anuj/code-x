import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, CardBody, Col } from "reactstrap";
import { GetDetails } from "../MasterCommonFunctions/getDetails";
import { GET_MASTER_REGISTER } from "../../../slices/ERPMasters/Register/thunk";

const IndividualPageRender = () => {
  const [formID, setFormID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(null);
  const masterRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentFormID = new URLSearchParams(window.location.search).get(
      "FormID"
    );
    setFormID(currentFormID);
  }, [window.location.search]);

  const renderComponent = () => {
    return (
      // formID === "FnA.Masters.Accounting.AccountGroup" ? <AccountGroup ref={masterRef} /> :
      // formID === "FnA.Masters.Accounting.Area" ? <Area ref={masterRef} /> :
      // formID === "FnA.Masters.Accounting.AccountLedger" ? <AccountLedger ref={masterRef} /> :
      null
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setSaveSuccess(null);

    try {
      if (masterRef.current && masterRef.current.funcsave) {
        const stringData = await masterRef.current.funcsave();
        const obj = JSON.parse(stringData);
        const response = await dispatch(
          GET_MASTER_REGISTER(GetDetails(formID, "saveURL"), obj)
        );
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
                {/* <CPSubmitButton onSave={handleSave} loading={loading} saveSuccess={saveSuccess} /> */}
                <Button>Save</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default IndividualPageRender;
