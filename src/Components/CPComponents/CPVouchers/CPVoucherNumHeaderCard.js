import React from "react";
import { Card, CardHeader, CardBody, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const CPVoucherNumHeaderCard = ({ data, labelTitle }) => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <div className="d-flex">
            <h5 className="card-title flex-grow-1 mb-0">
              <i className="ri-secure-payment-line align-bottom me-1 text-muted"></i>{" "}
              {labelTitle}
            </h5>
            <div className="flex-shrink-0">
              <Link className="badge bg-primary-subtle text-primary fs-11">
                {" "}
                {data.status}
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <div className="d-flex align-items-center mb-2">
            <div className="flex-shrink-0">
              <p className="text-muted mb-0">Entity:</p>
            </div>
            <div className="flex-grow-1 ms-2">
              <p className="text-muted mb-0">
                <b>
                  {data.entity} | {data.division} | {data.center}
                </b>
              </p>
            </div>
          </div>
          <br />
          <div className="d-flex align-items-center mb-2">
            <div className="flex-shrink-0">
              <p className="text-muted mb-0">Voucher :</p>
            </div>
            <div className="flex-grow-1 ms-2">
              <p className="text-muted mb-0">
                <b>{data.voucherNumber}</b> |{" "}
                {moment(data.voucherDate).format("DD-MM-yyyy")}
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center mb-2">
            <div className="flex-shrink-0">
              <p className="text-muted mb-0">Purchase:</p>
            </div>
            <div className="flex-grow-1 ms-2">
              <p className="text-muted mb-0">
                <b>{data.purchaseNumber}</b> |{" "}
                {moment(data.purchaseDate).format("DD-MM-yyyy")}
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center mb-2">
            <div className="flex-shrink-0">
              <p className="text-muted mb-0">Narration:</p>
            </div>
            <div className="flex-grow-1 ms-2">
              <p className="text-muted mb-0">{data.narration}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default CPVoucherNumHeaderCard;
