import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment/moment";

const CPVoucherNumLogisticsCard = ({ logistics, labelTitle }) => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <div className="d-flex">
            <h5 className="card-title flex-grow-1 mb-0">
              <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>
              {labelTitle}
            </h5>
          </div>
        </CardHeader>
        <CardBody>
          <div className="text-center">
            <lord-icon
              src="https://cdn.lordicon.com/uetqnvvg.json"
              trigger="loop"
              colors="primary:#405189,secondary:#0ab39c"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>

            <h5 className="fs-16 mt-2">{logistics.vehicleNumber}</h5>
            <p className="text-muted mb-0">{logistics.transporterName}</p>
            <p className="text-muted mb-0">
              LR : <b>{logistics.lrNumber}</b> dt.{" "}
              {moment(logistics.lrDate).format("DD-MM-yyyy") === "01-01-0001"
                ? ""
                : moment(logistics.lrDate).format("DD-MM-yyyy")}
            </p>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default CPVoucherNumLogisticsCard;
