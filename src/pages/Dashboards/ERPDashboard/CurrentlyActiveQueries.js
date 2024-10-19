import React from "react";
import { Card, CardBody, CardHeader, Col,Row } from "reactstrap";
import IconsForVoucherType from "../../../Components/CPComponents/CPIcons/IconsForVoucherType";
import SimpleBar from "simplebar-react";
import moment from "moment";

const CurrentlyActiveQueries = ({ queries }) => {
    // Filter the queries to include only "Active" or "In Progress" statuses
    const activeQueries = queries.filter(query =>
        query.CurrentStatus != "Done" 
    );

    // Check if there are any active queries
    if (activeQueries.length === 0) {
        return <p className="text-muted">No active queries at the moment.</p>;
    }

    return (
        <Col xxl={12}>
            <Card className="card-height-100">
                <CardHeader className="card-header align-items-center d-flex">
                    {IconsForVoucherType("Active Queries")}
                    <h4 className="card-title mb-0 flex-grow-1">Currently Active Queries</h4>
                </CardHeader>
                <CardBody className="p-0">
                    <SimpleBar style={{ height: "435px" }}>
                        <div className="p-3">
                            {activeQueries.map((individualData, index) => (
                                <div key={index} className="text-muted mb-3 fs-11">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar-xs flex-shrink-0">
                                            <span className="avatar-title bg-light rounded-circle">
                                                {IconsForVoucherType(
                                                    individualData.Module !== "NULL"
                                                        ? individualData.Module
                                                        : "N/A"
                                                )}
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 ms-2">
                                            {/* Module */}
                                            <h6 className="fs-14 mb-1">
                                                {individualData.Module !== "NULL"
                                                    ? individualData.Module
                                                    : "N/A"}
                                            </h6>
                                            <Col>
                                                <Row className="mb-0">
                                                    {" "}
                                                    {/* No bottom margin for Row */}
                                                    {/* Date and Time */}
                                                    <span
                                                        className="text-muted fs-12 d-flex align-items-center mb-0"
                                                        style={{ lineHeight: "1.1" }}
                                                    >
                                                        {" "}
                                                        {/* Reduced line height */}
                                                        <i className="mdi mdi-circle-medium text-success fs-15 me-1"></i>
                                                        Date:{" "}
                                                        {moment(
                                                            individualData.StatusDateTime,
                                                            "MM/DD/YY"
                                                        ).format("DD MMM - hh:mm A")}
                                                    </span>
                                                </Row>
                                                <Row className="mb-0">
                                                    {" "}
                                                    {/* No bottom margin for Row */}
                                                    {/* Username as Bullet Point */}
                                                    <span
                                                        className="text-muted fs-12 d-flex align-items-center mb-0"
                                                        style={{ lineHeight: "1.1" }}
                                                    >
                                                        {" "}
                                                        {/* Reduced line height */}
                                                        <i className="mdi mdi-circle-medium text-success fs-15 me-1"></i>
                                                        User: {individualData.UserName}
                                                    </span>
                                                </Row>
                                                <Row className="mb-0">
                                                    {" "}
                                                    {/* No bottom margin for Row */}
                                                    {/* Subject with Ellipsis */}
                                                    <span
                                                        className="text-muted fs-12 text-truncate mb-0 d-flex align-items-center"
                                                        style={{
                                                            maxWidth: "250px", // Adjust width as needed
                                                            overflow: "hidden",
                                                            whiteSpace: "nowrap",
                                                            textOverflow: "ellipsis",
                                                            lineHeight: "1.1", // Reduced line height
                                                        }}
                                                    >
                                                        <i className="mdi mdi-circle-medium text-success fs-15 me-1"></i>
                                                        Subject: {individualData.QuerySubject}
                                                    </span>
                                                </Row>
                                                <br />

                                                <Row className="mb-0">
                                                    {" "}
                                                    {/* No bottom margin for Row */}
                                                    {/* Support User */}
                                                    <span
                                                        className="text-muted fs-12 d-flex align-items-center mb-0"
                                                        style={{ lineHeight: "1.1" }}
                                                    >
                                                        {" "}
                                                        {/* Reduced line height */}
                                                        <i className="mdi mdi-circle-medium text-success fs-15 me-1"></i>
                                                        Support User: {individualData.SupportUser}
                                                    </span>
                                                </Row>
                                                <Row className="mb-0">
                                                    {" "}
                                                    {/* No bottom margin for Row */}
                                                    {/* Status */}
                                                    <span
                                                        className="text-muted fs-12 d-flex align-items-center mb-0"
                                                        style={{ lineHeight: "1.1" }}
                                                    >
                                                        {" "}
                                                        {/* Reduced line height */}
                                                        <i className="mdi mdi-circle-medium text-success fs-15 me-1"></i>
                                                        Status: {individualData.CurrentStatus}
                                                    </span>
                                                </Row>
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SimpleBar>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CurrentlyActiveQueries;
