import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

const CPVoucherNumBillingShippingCard = ({ billingShipping, labelTitle }) => {
  return (
    <React.Fragment>
      <Card>
        <CardHeader>
          <h5 className="card-title mb-0">
            <i className="ri-map-pin-line align-middle me-1 text-muted"></i>{" "}
            {labelTitle}
          </h5>
        </CardHeader>
        <CardBody>
          <ul className="list-unstyled vstack fs-13 mb-0">
            <li className="fw-medium fs-14">{billingShipping?.name}</li>
            <li>{billingShipping?.address}</li>
            <li>{billingShipping?.cityPinState}</li>
            <li>PAN: {billingShipping?.pan}</li>
            <li>
              <b>GSTIN: {billingShipping?.gstin}</b>
            </li>
            <li>POS: {billingShipping?.placeOfSupply}</li>
          </ul>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default CPVoucherNumBillingShippingCard;
