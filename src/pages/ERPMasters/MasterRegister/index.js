import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  CardHeader,
  Collapse,
  Input,
} from "reactstrap";

import CPBreadCrumbMasters from "../../../Components/CPComponents/CPLayouts/CPBreadCrumbMasters";
import { GET_MASTER_REGISTER } from "../../../slices/ERPMasters/Register/thunk";
import { useSelector, useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";

import { GetDetails } from "../MasterCommonFunctions/getDetails";

// import VoucherImages from "./Images";

const MasterRegister = () => {
  const FormID = new URLSearchParams(window.location.search).get("FormID");
  const dispatch = useDispatch(); // Used for API connection
  const data = useSelector((state) => state.VoucherNum.data);
  const loading = useSelector((state) => state.VoucherNum.loading);
  const error = useSelector((state) => state.VoucherNum.error);
  const success = useSelector((state) => state.VoucherNum.success);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    dispatch(GET_MASTER_REGISTER({ masterURL: GetDetails(FormID, "saveURL") }));
  }, [dispatch]);

  // if (loading | (data === null)) {
  //   return <div>Loading...</div>;
  // }

  const [isInfoDetails, setIsInfoDetails] = useState(false);
  const masterFormNavigation = () => {
    navigate(`/MasterForm?FormID=${FormID}`);
  };
  const toggleInfo = () => {
    setIsInfoDetails(!isInfoDetails);
  };

  document.title = "Voucher Details | Infinity X";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <CPBreadCrumbMasters
            title={GetDetails(FormID, "title")}
            pageTitle={GetDetails(FormID, "title")}
          />

          <Row>
            <Col lg={12}>
              <Card id="leadsList">
                <CardHeader className="border-0">
                  <Row className="g-4 mb-4 align-items-center">
                    <Col sm={3}>
                      <div className="search-box">
                        <Input
                          type="text"
                          className="form-control search"
                          placeholder="Search for..."
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <div className="col-sm-auto ms-auto">
                      <div className="hstack gap-2">
                        <button
                          type="button"
                          className="btn btn-info"
                          onClick={toggleInfo}
                        >
                          <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                          Filters
                        </button>
                        <button
                          type="button"
                          className="btn btn-success add-btn"
                          id="create-btn"
                          onClick={masterFormNavigation}
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                        </button>
                      </div>
                    </div>
                  </Row>
                  {/* <Row>
                    <CP_table dataFromAPI={user.value} />
                  </Row> */}
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MasterRegister;
