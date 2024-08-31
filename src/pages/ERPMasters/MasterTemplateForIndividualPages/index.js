import React, { useState } from "react";
import {Container,} from "reactstrap";
import {GetDetails} from "../MasterCommonFunctions/getDetails.js";
import 'react-toastify/dist/ReactToastify.css';
import CPBreadCrumbMasters from "../../../Components/CPComponents/CPLayouts/CPBreadCrumbMasters.js";
import IndividualPageRender from "./IndividualPageRender.js";  

const MasterForm = () => {  
  const [isInfoDetails, setIsInfoDetails] = useState(false);
  const formID = new URLSearchParams(window.location.search).get('FormID');

  document.title = GetDetails(formID, "title");

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <CPBreadCrumbMasters title={GetDetails(formID, "title")} pageTitle="Masters" />
          <IndividualPageRender/>
        </Container>
      </div>
    </React.Fragment >
  );
};

export default MasterForm;