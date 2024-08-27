import React, { useEffect, useState } from "react";

import { Col, Container, Row, Card, CardHeader, Input } from "reactstrap";
import CPBreadCrumbReporting from "../../../Components/CPComponents/CPLayouts/CPBreadCrumbReporting";

import CPDashboardDataTile from "../../../Components/CPComponents/CPDashboard/CPDashboardDataTile.js";
import { GET_ERPDashboard } from "../../../slices/Dashboards/ERPDashboard/thunk.js";
import { POST_REPORT_PDF } from "../../../slices/ERPReportings/VoucherRegister/ReportPDF/thunk.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const ERPDashboard = () => {
  const dispatch = useDispatch(); // Used for API connection
  const data = useSelector((state) => state.ERPDashboard.data);
  const loading = useSelector((state) => state.ERPDashboard.loading);
  const error = useSelector((state) => state.ERPDashboard.error);
  const success = useSelector((state) => state.ERPDashboard.success);
  const navigate = useNavigate(); // Initialize useNavigate

  const today = new Date();

  // Retrieve stored date range from sessionStorage
  const storedRange = JSON.parse(sessionStorage.getItem("selectedRange"));

  // Set initial range

  // State to hold the selected date range
  const [selectedRange, setSelectedRange] = useState([null, null]);

  // Handle date range change and store in sessionStorage
  const onClick = (filters) => {
    dispatch(
      GET_MainDashboard({
        existingData: data,
        filterArray: filters,
      })
    );
  };

  const showDashboard = (key, filters) => {
    if (filters === "Security Gate") {
      navigate("/Dashboards-SG");
    } else if (filters === "Weighment") {
      navigate("/Dashboards-WB");
    }
  };

  const onDownload = async () => {
    //dispatch(POST_REPORT_PDF(data));
  };

  const dateChange = (newRange) => {
    if (newRange.length === 2) {
      setSelectedRange(newRange);
      sessionStorage.setItem("selectedRange", JSON.stringify(newRange));

      dispatch(
        GET_ERPDashboard({
          FromDate: moment(newRange[0]).format("yyyy-MM-DD"),
          ToDate: moment(newRange[1]).format("yyyy-MM-DD"),
        })
      );
    }
  };

  useEffect(() => {
    const initialRange = storedRange
      ? [new Date(storedRange[0]), new Date(storedRange[1])]
      : [today, today];

    if (selectedRange && selectedRange.length === 2) {
      if (selectedRange[0] === null) {
        dateChange(initialRange);
      }
    }
  }, [selectedRange]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <CPBreadCrumbReporting
            title="ERP Dashboard"
            pageTitle="Data"
            selectedRange={selectedRange}
            onDateRangeChange={dateChange}
            onClickSetFilter={onClick}
            onClickDownload={onDownload}
          />
          <Row>
            <Col lg={4}>
              {!success
                ? ""
                : data.map((individualData, key) => (
                    <CPDashboardDataTile
                      individualData={individualData}
                      onCardClick={showDashboard}
                    ></CPDashboardDataTile>
                  ))}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ERPDashboard;
