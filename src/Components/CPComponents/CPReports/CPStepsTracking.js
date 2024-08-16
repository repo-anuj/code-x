import React, { useState } from "react";
import { Card, CardBody, CardHeader, Collapse, Container } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";
import moment from "moment/moment";

const CPStepsTracking = ({tracking,lableTitle}) => {
  const [openSections, setOpenSections] = useState({});

  // const testingData = [
  //   {
  //     sequence: 1,
  //     isComplete: true,
  //     particulars: "Inward Order",
  //     trackingDate: "2024-07-16T13:07:43.983",
  //     trackingDetails: [
  //       {
  //         subParticulars: "An order has been placed by admin",
  //         subDate: "2024-07-16T13:07:43.983",
  //       },
  //       {
  //         subParticulars: "An order has been placed by admin",
  //         subDate: "2024-07-16T13:07:43.983",
  //       },
  //       {
  //         subParticulars: "An order has been placed by admin",
  //         subDate: "2024-07-16T13:07:43.983",
  //       },
  //     ],
  //   },
  //   {
  //     sequence: 2,
  //     isComplete: true,
  //     particulars: "Gate In",
  //     trackingDate: "2024-07-16T13:07:56",
  //     trackingDetails: [
  //       {
  //         subParticulars: "Gate In Processed by admin",
  //         subDate: "2024-07-16T13:07:56.963",
  //       },
  //     ],
  //   },
  //   {
  //     sequence: 3,
  //     isComplete: true,
  //     particulars: "Gross Weight",
  //     trackingDate: "2024-07-16T14:00:24",
  //     trackingDetails: [
  //       {
  //         subParticulars: "Gross Weight by admin",
  //         subDate: "2024-07-16T14:00:29.01",
  //       },
  //     ],
  //   },
  //   {
  //     sequence: 4,
  //     isComplete: true,
  //     particulars: "Tare Weight",
  //     trackingDate: "2024-07-16T13:07:56",
  //     trackingDetails: [
  //       {
  //         subParticulars: "Tare Weight by admin",
  //         subDate: "2024-07-16T14:34:55.243",
  //       },
  //     ],
  //   },
  //   {
  //     sequence: 5,
  //     isComplete: true,
  //     particulars: "Gate Out",
  //     trackingDate: "2024-07-16T13:07:56",
  //     trackingDetails: [
  //       {
  //         subParticulars: "Gate Out by admin",
  //         subDate: "2024-07-16T16:05:05.56",
  //       },
  //     ],
  //   },
  // ];


  const getIconClass = (particulars) => {
    switch (particulars) {
      case 'Inward Order':
        return 'ri-shopping-bag-line'; 
      case 'Gate In':
        return 'ri-vip-crown-fill';
      case 'Gross Weight':
        return ' ri-money-cny-circle-fill'; 
      case 'Tare Weight':
        return ' ri-copper-coin-line';
      case 'Gate Out':
        return ' ri-money-dollar-box-line'; 
      default:
        return 'ri-question-line'; 
    }
  };

  const toggleSection = (sequence) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [sequence]: !prevOpenSections[sequence],
    }));
  };

  return (
        <Card>
          <CardHeader>
          <div className="d-sm-flex align-items-center">
          <h5 className="card-title flex-grow-1 mb-0">
                    <i className="ri-links-line align-middle me-1 text-muted"></i>{" "}
                    {lableTitle}
                  </h5>
            </div>
          </CardHeader>
          <CardBody>
            <div className="profile-timeline">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {tracking.map((singleVoucherData) => (
                  <div
                    key={singleVoucherData.sequence}
                    className="accordion-item border-0"
                    onClick={() => toggleSection(singleVoucherData.sequence)}
                  >
                    <div className="accordion-header">
                      <Link
                        to="#"
                        className={classnames(
                          "accordion-button",
                          "p-2",
                          "shadow-none",
                          {
                            collapsed:
                              !openSections[singleVoucherData.sequence],
                          }
                        )}
                      >
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 avatar-xs">
                            <div
                              className={classnames(
                                "avatar-title rounded-circle",
                                {
                                  "bg-success": singleVoucherData.isComplete,
                                  "bg-body": !singleVoucherData.isComplete,
                                }
                              )}
                            >
                              <i className={getIconClass(singleVoucherData.particulars)}></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="fs-15 mb-0 fw-semibold">
                              {singleVoucherData.particulars}
                            </h6>
                            <span className="fs-11 text-muted">
                              {moment(singleVoucherData.trackingDate).format(
                                "DD MMM - hh:mmA"
                              )}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <Collapse
                      id={`collapse${singleVoucherData.sequence}`}
                      className="accordion-collapse"
                      isOpen={!!openSections[singleVoucherData.sequence]}
                    >
                      <div className="accordion-body ms-2 ps-5 pt-0">
                        {singleVoucherData.trackingDetails.map(
                          (subData, index) => (
                            <div key={index}>
                              <h6 className="mb-1">{subData.subParticulars}</h6>
                              <p className="text-muted">
                                {new Date(subData.subDate).toLocaleString()}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </Collapse>
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
  );
};

export default CPStepsTracking;