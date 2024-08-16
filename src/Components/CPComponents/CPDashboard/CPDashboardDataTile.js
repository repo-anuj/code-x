import React from "react";
import { Card, CardHeader, Col, Row } from "reactstrap";
import CountUp from "react-countup";

const CPDashboardDataTile = ({individualData}) => {
 

  return (
        <Card key={individualData.key}>
          <CardHeader className="border-0 align-items-center d-flex">
            <h4 className="card-title mb-0 flex-grow-1">{individualData.item.voucherType}</h4>
          </CardHeader>
          <CardHeader className="p-0 border-0 bg-light-subtle">
            <Row className="g-0 text-center">
              
              {individualData.item.argumentValue.map((arg, idx) => (
                <Col xs={6} sm={6} lg={6} key={idx}>
                  <div className="p-3 border border-dashed border-start-0">
                    <h5 className="mb-1">
                      <span className="counter-value" data-target={arg.argument}>
                        <CountUp start={0} end={parseFloat(arg.value)} separator="," duration={4}
                        />
                      </span>
                    </h5>
                    <p className="text-muted mb-0">{arg.argument}</p>
                  </div>
                </Col>
              ))}

            </Row>
          </CardHeader>
        </Card>
  );
};

export default CPDashboardDataTile;