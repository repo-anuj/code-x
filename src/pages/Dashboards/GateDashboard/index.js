import React, { useEffect, useState } from "react";

import { Col, Container, Row, Card, CardHeader, Input } from "reactstrap";
import CPBreadCrumbReporting from "../../../Components/CPComponents/CPLayouts/CPBreadCrumbReporting";

import RecentActivity from "../../../Components/CPComponents/CPDashboard/GateWeight/RecentActivity.js";
import DataStatus from "../../../Components/CPComponents/CPDashboard/GateWeight/DataStatus.js";

import CPDashboardDataTile from "../../../Components/CPComponents/CPDashboard/CPDashboardDataTile.js";
import { GET_GateDashboard } from "../../../slices/Dashboards/GateDashboard/thunk.js";
import { POST_REPORT_PDF } from "../../../slices/ERPReportings/VoucherRegister/ReportPDF/thunk.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const GateDashboard = () => {
  const dispatch = useDispatch(); // Used for API connection
  const data = useSelector((state) => state.GateDashboard.data);
  const StatusData = useSelector((state) => state.GateDashboard.StatusData);
  const ListForFilterData = useSelector(
    (state) => state.GateDashboard.ListForFilterData
  );
  const LatestActivityData = useSelector(
    (state) => state.GateDashboard.LatestActivityData
  );
  const AvgTimeData = useSelector((state) => state.GateDashboard.AvgTimeData);
  const ItemSummaryData = useSelector(
    (state) => state.GateDashboard.ItemSummaryData
  );
  const AccountSummaryData = useSelector(
    (state) => state.GateDashboard.AccountSummaryData
  );
  const loading = useSelector((state) => state.GateDashboard.loading);
  const error = useSelector((state) => state.GateDashboard.error);
  const success = useSelector((state) => state.GateDashboard.success);
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
      GET_GateDashboard({
        existingData: data,
        filterArray: filters,
      })
    );
  };

  const showRegister = (key, filters) => {
    console.log(filters);
    navigate("/VoucherRegister?GroupBy=" + key + "&title=" + filters, {
      state: data.filter((item) => item.voucherType === filters),
    });
  };

  const onDownload = async () => {
    dispatch(POST_REPORT_PDF(data));
  };

  const dateChange = (newRange) => {
    if (newRange.length === 2) {
      setSelectedRange(newRange);
      sessionStorage.setItem("selectedRange", JSON.stringify(newRange));

      dispatch(
        GET_GateDashboard({
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
      // onRangeChange(selectedRange);
    }
  }, [selectedRange]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <CPBreadCrumbReporting
            title="Weigh Bridge Dashboard"
            pageTitle="Data"
            selectedRange={selectedRange}
            onDateRangeChange={dateChange}
            filterData={ListForFilterData}
            onClickSetFilter={onClick}
            onClickDownload={onDownload}
          />
          <Row>
            <Col lg={8}>
              <DataStatus
                dataStatus={StatusData}
                itemSummary={ItemSummaryData}
                accountSummary={AccountSummaryData}
                showRegister={showRegister}
              />
            </Col>
            <Col lg={4}>
              <RecentActivity latestActivity={LatestActivityData} />
              <CPDashboardDataTile individualData={AvgTimeData} />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default GateDashboard;
