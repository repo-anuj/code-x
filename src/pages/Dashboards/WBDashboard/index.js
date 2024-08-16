import React from "react";

import { Col, Container, Row, Card, CardHeader, Input } from "reactstrap";
import CPBreadCrumbReporting from "../../../Components/CPComponents/CPLayouts/CPBreadCrumbReporting";

import WeightBridgeStatus from "./WeightBridgeStatus.js";
import RecentActivity from "./RecentActivity.js";
import CPDashboardDataTile from "../../../Components/CPComponents/CPDashboard/CPDashboardDataTile.js";
import CPDashboardSummaryCard from "../../../Components/CPComponents/CPDashboard/CPDashboardSummaryCard.js";

const data = [
  {
    key: 1,
    item: {
      voucherType: "Sales Voucher",
      argumentValue: [
        { argument: "Total Sales", value: "1540.75" },
        { argument: "Total Items", value: "320" },
        { argument: "Net Profit", value: "560.50" },
        { argument: "Discount", value: "45.00" },
      ],
    },
  },
  {
    key: 2,
    item: {
      voucherType: "Purchase Voucher",
      argumentValue: [
        { argument: "Total Purchases", value: "2400.00" },
        { argument: "Total Items", value: "450" },
        { argument: "Net Cost", value: "2100.75" },
        { argument: "Discount", value: "120.00" },
      ],
    },
  },
  {
    key: 4,
    item: {
      voucherType: "Return Voucher",
      argumentValue: [
        { argument: "Total Returns", value: "750.30" },
        { argument: "Total Items", value: "150" },
        { argument: "Net Loss", value: "200.00" },
        { argument: "Restocking Fee", value: "15.00" },
      ],
    },
  },
  {
    key: 5,
    item: {
      voucherType: "Return Voucher",
      argumentValue: [
        { argument: "Total Returns", value: "750.30" },
        { argument: "Total Items", value: "150" },
        { argument: "Net Loss", value: "200.00" },
        { argument: "Restocking Fee", value: "15.00" },
      ],
    },
  },
  {
    key: 6,
    item: {
      voucherType: "Return Voucher",
      argumentValue: [
        { argument: "Total Returns", value: "750.30" },
        { argument: "Total Items", value: "150" },
        { argument: "Net Loss", value: "200.00" },
        { argument: "Restocking Fee", value: "15.00" },
      ],
    },
  },
];

const WBDashboard = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <CPBreadCrumbReporting
            title="Weigh Bridge Dashboard"
            pageTitle="Data"
          />
          <Row>
            <Col lg={8}>
              <WeightBridgeStatus />
            </Col>
            <Col lg={4}>
              <RecentActivity />
              <CPDashboardDataTile individualData={data[0]} />
              <CPDashboardSummaryCard />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default WBDashboard;
