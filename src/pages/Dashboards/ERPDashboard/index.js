import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import DataOverview from './DataOverview';
import CPVoucherNumDisplayCard from '../../../Components/CPComponents/CPVouchers/CPVoucherNumDisplayCard';
import CPDashboardDataTile from '../../../Components/CPComponents/CPDashboard/CPDashboardDataTile';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import {  useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

const ERPDashboard = () => {
    const navigate = useNavigate();

    document.title = "Infinity X | ERP";

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


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="ERP Dashboard" pageTitle="Infinity X" />
                    <DataOverview />
                    <CPDashboardDataTile individualData={data[0]}/>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ERPDashboard;
