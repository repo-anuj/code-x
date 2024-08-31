import React, { useEffect, useState } from "react";

import { Col, Container, Row, Card, CardHeader, Input } from "reactstrap";
import CPBreadCrumbReporting from "../../../Components/CPComponents/CPLayouts/CPBreadCrumbReporting";
import { POST_REPORT_PDF } from "../../../slices/ERPReportings/VoucherRegister/ReportPDF/thunk.js";

import { GET_VoucherRegisterData } from "../../../slices/ERPReportings/VoucherRegister/thunk.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import CPVoucherRegisterAccordian from "../../../Components/CPComponents/CPAccordian/CPVoucherRegisterAccordian.js";

const VoucherRegister = ({ dashboardData }) => {
  const dispatch = useDispatch(); // Used for API connection
  const loc = useLocation();

  const data = useSelector((state) => state.VoucherRegister.data);
  const loading = useSelector((state) => state.VoucherRegister.loading);
  const error = useSelector((state) => state.VoucherRegister.error);
  const success = useSelector((state) => state.VoucherRegister.success);
  const navigate = useNavigate(); // Initialize useNavigate
  const groupBy = new URLSearchParams(window.location.search).get("GroupBy");
  const title = new URLSearchParams(window.location.search).get("title");

  const onDownload = async () => {
    dispatch(POST_REPORT_PDF(data));
  };

  // Handle date range change and store in sessionStorage
  const onClick = (filters) => {
    // dispatch(
    //   GET_WBDashboard({
    //     existingData: data,
    //     filterArray: filters,
    //   })
    // );
  };

  const dateChange = (newRange) => {
    // if (newRange.length === 2) {
    //   setSelectedRange(newRange);
    //   sessionStorage.setItem("selectedRange", JSON.stringify(newRange));
    //   dispatch(
    //     GET_WBDashboard({
    //       FromDate: moment(newRange[0]).format("yyyy-MM-DD"),
    //       ToDate: moment(newRange[1]).format("yyyy-MM-DD"),
    //     })
    //   );
    // }
  };
  const [selectedRange, setSelectedRange] = useState([null, null]);

  useEffect(() => {
    dispatch(
      GET_VoucherRegisterData({
        dashboardData: loc.state,
      })
    );
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <CPBreadCrumbReporting
            title={title}
            pageTitle="Data"
            selectedRange={selectedRange}
            onDateRangeChange={dateChange}
            onClickSetFilter={onClick}
            onClickDownload={onDownload}
          />
          <CPVoucherRegisterAccordian data={data} groupBy={groupBy} />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default VoucherRegister;
