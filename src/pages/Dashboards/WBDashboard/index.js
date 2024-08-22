import React, { useEffect, useState } from "react";

import { Col, Container, Row, Card, CardHeader, Input } from "reactstrap";
import CPBreadCrumbReporting from "../../../Components/CPComponents/CPLayouts/CPBreadCrumbReporting";

import WeightBridgeStatus from "./WeightBridgeStatus.js";
import RecentActivity from "./RecentActivity.js";
import CPDashboardDataTile from "../../../Components/CPComponents/CPDashboard/CPDashboardDataTile.js";
import { GET_WBDashboard } from "../../../slices/Dashboards/WBDashboard/thunk.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { filter } from "lodash";

const WBDashboard = () => {
  const dispatch = useDispatch(); // Used for API connection
  const data = useSelector((state) => state.WBDashboard.data);
  const WBStatusData = useSelector((state) => state.WBDashboard.WBStatusData);
  const ListForFilterData = useSelector(
    (state) => state.WBDashboard.ListForFilterData
  );
  const WBLatestActivityData = useSelector(
    (state) => state.WBDashboard.LatestActivityData
  );
  const AvgTimeData = useSelector((state) => state.WBDashboard.AvgTimeData);
  const ItemSummaryData = useSelector(
    (state) => state.WBDashboard.ItemSummaryData
  );
  const AccountSummaryData = useSelector(
    (state) => state.WBDashboard.AccountSummaryData
  );
  const loading = useSelector((state) => state.WBDashboard.loading);
  const error = useSelector((state) => state.WBDashboard.error);
  const success = useSelector((state) => state.WBDashboard.success);
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
      GET_WBDashboard({
        existingData: data,
        filterArray: filters,
      })
    );
  };

  const dateChange = (newRange) => {
    if (newRange.length === 2) {
      setSelectedRange(newRange);
      sessionStorage.setItem("selectedRange", JSON.stringify(newRange));

      dispatch(
        GET_WBDashboard({
          FromDate: moment(newRange[0]).format("yyyy-MM-DD"),
          ToDate: moment(newRange[1]).format("yyyy-MM-DD"),
          VoucherTypeID: "16acad1d-52b9-481c-b90c-4d80534a3d8a",
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
          />
          <Row>
            <Col lg={8}>
              <WeightBridgeStatus
                wbStatus={WBStatusData}
                itemSummary={ItemSummaryData}
                accountSummary={AccountSummaryData}
              />
            </Col>
            <Col lg={4}>
              <RecentActivity latestActivity={WBLatestActivityData} />
              <CPDashboardDataTile individualData={AvgTimeData} />
              {/* Transporter Wise Shortage */}
              {/* <CPDashboardSummaryCard individualData={null} /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default WBDashboard;
