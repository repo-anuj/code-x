import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  Spinner,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { GET_VOUCHERNUM_PDF } from "../../../slices/ERPReportings/VoucherNum/DownloadPDF/thunk";
import { useSelector, useDispatch } from "react-redux";
import CPVoucherNumBillingShippingCard from "./CPVoucherNumBillingShippingCard";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import FeatherIcon from "feather-icons-react";
import { size } from "lodash";

const NumberFormatter = ({ number }) => {
  const formattedNumber = Number(number).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
};

const CPVoucherNumDisplayCard = ({ voucher }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.VoucherNumPDF.data);
  const loading = useSelector((state) => state.VoucherNumPDF.loading);
  const error = useSelector((state) => state.VoucherNumPDF.error);
  const success = useSelector((state) => state.VoucherNumPDF.success);

  const [isExpanded, setIsExpanded] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate(); // Access the history object for navigation

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDownload = async () => {
    dispatch(GET_VOUCHERNUM_PDF(voucher.voucherNumID));
  };
  const handleWhatsAppClick = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  const toggleModal = () => {
    if (voucher.billing) {
      setModal(!modal);
    } else {
      navigate("/VoucherNum?VoucherNumID=" + voucher.voucherNumID);
    }
  };

  return (
    <React.Fragment>
      <Col>
        <Card>
          <CardHeader>
            <div className="align-items-center d-flex">
              <h5
                className="flex-grow-1"
                onClick={toggleModal}
                style={{ cursor: "pointer" }}
              >
                {voucher.account}
              </h5>

              <div className="d-flex align-items-center flex-shrink-0">
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={handleDownload}
                >
                  {loading ? (
                    <Spinner size="sm" />
                  ) : (
                    <i className="ri-download-2-fill align-middle me-0 fs-6"></i>
                  )}
                </button>
                <UncontrolledDropdown className="sm">
                  <DropdownToggle
                    tag="button"
                    className="btn btn-info btn-sm dropdown"
                    type="button"
                  >
                    <i className="ri-more-fill"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <li>
                      <DropdownItem>
                        <i className="ri-check-fill align-bottom me-2 text-success"></i>{" "}
                        Approve
                      </DropdownItem>
                    </li>
                    <li>
                      <DropdownItem>
                        <i className="ri-close-fill align-bottom me-2 text-danger"></i>{" "}
                        Reject
                      </DropdownItem>
                    </li>
                    <li>
                      <DropdownItem
                        onClick={() => {
                          handleWhatsAppClick("testing");
                        }}
                      >
                        <i className="ri-whatsapp-fill align-bottom me-2 text-success"></i>{" "}
                        Whatsapp  
                      </DropdownItem>
                    </li>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
            <div className="flex-grow-1">
              <p className="text-muted">{voucher.voucherType}</p>
              <div className="d-flex gap-4 mb-3">
                <div>
                  <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>
                  {voucher.entity} | {voucher.division}
                </div>
                <div>
                  <i className="ri-time-line text-primary me-1 align-bottom"></i>
                  {voucher.voucherNumber} |{" "}
                  {moment(voucher.voucherDate).format("DD-MM-yyyy")}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div className="table-responsive table-card">
              <table className="table table-borderless align-middle mb-0 table-sm">
                <thead className="table-light text-muted">
                  <tr>
                    <th colSpan="2" scope="col">
                      {voucher.item?.length + voucher.financial?.length > 1 ? (
                        <i
                          className={
                            isExpanded ? "text-danger" : "text-success"
                          }
                          onClick={handleToggle}
                          style={{ cursor: "pointer" }}
                        >
                          {isExpanded ? (
                            <FeatherIcon
                              style={{ width: "16px", height: "16px" }}
                              icon="minus"
                            />
                          ) : (
                            <FeatherIcon
                              style={{ width: "16px", height: "16px" }}
                              icon="plus"
                            />
                          )}
                        </i>
                      ) : (
                        ""
                      )}{" "}
                      Particulars
                    </th>
                    <th scope="col" className="text-end">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {voucher.item
                    .slice(0, isExpanded ? voucher.item.length : 1)
                    .map((item, index) => (
                      <tr key={index}>
                        <td colSpan="2">
                          <h5 className="fs-14">{item.particulars} </h5>
                          <p className="text-muted mb-0">
                            {voucher.currencyDetails?.symbol}{" "}
                            <NumberFormatter number={item.exclusiveRate} /> x{" "}
                            {item.quantity} {item.unit}
                          </p>
                        </td>
                        <td className="text-end">
                          {voucher.currencyDetails?.symbol}{" "}
                          <NumberFormatter number={item.exclusiveAmount} />
                        </td>
                      </tr>
                    ))}
                  {isExpanded && voucher.financial
                    ? voucher.financial.map((item, index) =>
                        item.type === "Item" ? null : (
                          <tr key={index}>
                            <td colSpan="2" className="text">
                              {item.particulars}
                            </td>
                            <td className="text-end">
                              {/* {voucher.currencyDetails?.symbol}{" "} */}
                              <NumberFormatter number={item.exclusiveAmount} />
                            </td>
                          </tr>
                        )
                      )
                    : null}

                  <tr className="table-active">
                    <th colSpan="2">
                      Total ({voucher.currencyDetails?.symbol}) :
                    </th>
                    <td className="text-end">
                      <span className="fw-semibold">
                        {voucher.currencyDetails?.symbol}{" "}
                        <NumberFormatter number={voucher.grandTotal} />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </Col>

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Billing Shipping Details</ModalHeader>
        <ModalBody>
          <CPVoucherNumBillingShippingCard
            billingShipping={voucher.billing}
            labelTitle={"Billing Details"}
          />
          <CPVoucherNumBillingShippingCard
            billingShipping={voucher.shipping}
            labelTitle={"Shipping Details"}
          />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default CPVoucherNumDisplayCard;
