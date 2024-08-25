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
} from "reactstrap";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { GET_VoucherNum } from "../../../slices/ERPReportings/VoucherNum/thunk";
import { useSelector, useDispatch } from "react-redux";
import CPVoucherNumDisplayCard from "../../../Components/CPComponents/CPVouchers/CPVoucherNumDisplayCard";
import CPStepsTracking from "../../../Components/CPComponents/CPReports/CPStepsTracking";
import CPVoucherNumBillingShippingCard from "../../../Components/CPComponents/CPVouchers/CPVoucherNumBillingShippingCard";
import CPVoucherNumHeaderCard from "../../../Components/CPComponents/CPVouchers/CPVoucherNumHeaderCard";
import CPVoucherNumLogisticsCard from "../../../Components/CPComponents/CPVouchers/CPVoucherNumLogisticsCard";
import CPVoucherNumOrderDetailsCard from "../../../Components/CPComponents/CPVouchers/CPVoucherNumOrderDetailsCard";
import CPVoucherNumAttachments from "../../../Components/CPComponents/CPVouchers/CPVoucherNumAttachments";
import CPVoucherNumCameraCaptures from "../../../Components/CPComponents/CPVouchers/CPVoucherNumCameraCaptures";
// import { FaWhatsapp } from "./react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";

// import VoucherImages from "./Images";

const EcommerceOrderDetail = (props) => {
  const voucherNumID = new URLSearchParams(window.location.search).get(
    "VoucherNumID"
  );
  const dispatch = useDispatch(); // Used for API connection
  const data = useSelector((state) => state.VoucherNum.data);
  const loading = useSelector((state) => state.VoucherNum.loading);
  const error = useSelector((state) => state.VoucherNum.error);
  const success = useSelector((state) => state.VoucherNum.success);
  const navigate = useNavigate(); // Initialize useNavigate

  const [accordionState, setAccordionState] = useState([]);

  const toggleAccordion = (index) => {
    setAccordionState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => {
    dispatch(GET_VoucherNum(voucherNumID));
  }, [dispatch]);

  if (loading | (data === null)) {
    return <div>Loading...</div>;
  }

  document.title = "Voucher Details | Infinity X";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
            <BreadCrumb title={data.voucherType} pageTitle={data.voucherNumber} />

          <Row>
            <Col xl={9}>
              <CPVoucherNumDisplayCard voucher={data} />
              <CPStepsTracking
                tracking={data.trackingDetails}
                labelTitle={"Voucher Tracking"}
              />
            </Col>

            <Col xl={3}>
              <CPVoucherNumLogisticsCard
                logistics={data.logistics}
                labelTitle={"Logistic Details"}
              />
              <CPVoucherNumHeaderCard
                data={data}
                labelTitle={"Voucher Details"}
              />
              <CPVoucherNumBillingShippingCard
                billingShipping={data.billing}
                labelTitle={"Billing Details"}
              />
              <CPVoucherNumBillingShippingCard
                billingShipping={data.shipping}
                labelTitle={"Shipping Details"}
              />
              <CPVoucherNumOrderDetailsCard voucher={data.shipping} />
              <CPVoucherNumAttachments voucherNumID={voucherNumID} />
              <CPVoucherNumCameraCaptures voucherdata={data} />

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">
                    <i className=" ri-flag-2-fill align-bottom me-1 text-muted"></i>{" "}
                    Time Taken
                  </h5>
                </CardHeader>
                <CardBody>
                  <div className="mb-2 text-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/kbtmbyzy.json"
                      trigger="loop"
                      colors="primary:#405189,secondary:#02a8b5"
                      style={{ width: "90px", height: "90px" }}
                    ></lord-icon>
                  </div>
                  <h3 className="mb-1 text-center">9 hrs 13 min</h3>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EcommerceOrderDetail;
