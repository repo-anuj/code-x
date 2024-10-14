import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

// Import Images
import avatar2 from "../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../../assets/images/users/avatar-7.png";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import UtkarshAgrawal from "./UtkarshAgrawal";
import ManasAgrawal from "./ManasAgrawal";
import ManishAgrawal from "./ManishAgrawal";
import HarshitGoel from "./HarshitGoel";
import AditiAgrawal from "./AditiAgrawal";
import ArpitAgrawal from "./ArpitAgrawal";
import IleshThakkar from "./IleshThakkar";
import RitikaAgrawal from "./RitikaAgrawal";

const Team = () => {
  return (
    <React.Fragment>
      <section className="section bg-light" id="team">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h3 className="mb-3 fw-semibold">
                  Our <span className="text-danger">Team</span>
                </h3>
                <p className="text-muted mb-4 ff-secondary">
                  To achieve this, it would be necessary to have uniform
                  grammar, pronunciation and more common words. If several
                  languages coalesce the grammar.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <Link to="/UtkarshAgrawal">
                      <img
                        src={avatar1}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </Link>

                    <Link to="/utkarshagrawal" className="">
                      <div className="avatar-title bg-transparent"></div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/UtkarshAgrawal" className="text-body">
                      UtkarshAgrawal
                    </Link>
                  </h5>
                  <h6 className="mb-1">Founder & CEO</h6>
                  <p className="text-muted mb-0 ff-secondary">
                    Director: Development & Implementation
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
            <Col lg={3} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <Link to="/ManasAgrawal">
                      <img
                        src={avatar8}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </Link>
                    <Link to="/ManasAgrawal" className="">
                      <div className="avatar-title bg-transparent"></div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/ManasAgrawal" className="text-body">
                      MANAS AGRAWAL
                    </Link>
                  </h5>
                  <h6 className="mb-1">Co-Founder</h6>
                  <p className="text-muted mb-0 ff-secondary">
                    Director: Sales
                    <br />
                    <br />
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
            <Col lg={3} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <Link to="/ManishAgrawal">
                      <img
                        src={avatar2}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </Link>
                    <Link to="/ManishAgrawal" className="">
                      <div className="avatar-title bg-transparent"></div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/ManishAgrawal" className="text-body">
                      MANISH AGRAWAL
                    </Link>
                  </h5>
                  <h6 className="mb-1">FCA</h6>
                  <p className="text-muted mb-0 ff-secondary">
                    Consultant: Application\'s Financial Structure
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
            <Col lg={3} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <Link to="/HarshitGoel">
                      <img
                        src={avatar3}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </Link>
                    <Link to="/HarshitGoel" className="">
                      <div className="avatar-title bg-transparent"></div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/HarshitGoel" className="text-body">
                      HARSHIT GOEL
                    </Link>
                  </h5>
                  <h6 className="mb-1">B-Tech (Computer Science)</h6>
                  <p className="text-muted mb-0 ff-secondary">
                    Consultant: Application\'s Development
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
          </Row>

          {/* <!-- end row --> */}
          <Row>
            <Col lg={3} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <Link to="/AditiAgrawal">
                      <img
                        src={avatar4}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </Link>
                    <Link to="/AditiAgrawal" className="">
                      <div className="avatar-title bg-transparent"></div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/AditiAgrawal" className="text-body">
                      ADITI AGRAWAL
                    </Link>
                  </h5>
                  <h6 className="mb-1">BE (Computer Science)</h6>
                  <p className="text-muted mb-0 ff-secondary">
                    Consultant: Application\'s Development
                    <br />
                    <br />
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
            <Col lg={3} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <Link to="/ArpitAgrawal">
                      <img
                        src={avatar5}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </Link>
                    <Link to="/ArpitAgrawal" className="">
                      <div className="avatar-title bg-transparent"></div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/ArpitAgrawal" className="text-body">
                      ARPIT AGRAWAL
                    </Link>
                  </h5>
                  <h6 className="mb-1">M.Tech (IIT Kharagpur)</h6>
                  <p className="text-muted mb-0 ff-secondary">
                    Consultant: Business Development
                    <br />
                    <br />
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
            <Col lg={3} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <Link to="/IleshThakkar">
                      <img
                        src={avatar7}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </Link>
                    <Link to="/IleshThakkar" className="">
                      <div className="avatar-title bg-transparent"></div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/IleshThakkar" className="text-body">
                      ILESH THAKKAR
                    </Link>
                  </h5>
                  <h6 className="mb-1">Business Head</h6>
                  <p className="text-muted mb-0 ff-secondary">
                    Consultant: Business Development, Implementation and Support
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}

            <Col lg={3} sm={6}>
              <Card>
                <CardBody className="text-center p-4">
                  <div className="avatar-xl mx-auto mb-4 position-relative">
                    <Link to="/RitikaAgrawal">
                      <img
                        src={avatar6}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </Link>
                    <Link to="/RitikaAgrawal" className="">
                      <div className="avatar-title bg-transparent"></div>
                    </Link>
                  </div>

                  {/* <!-- end card body --> */}
                  <h5 className="mb-1">
                    <Link to="/RitikaAgrawal" className="text-body">
                      RITIKA AGRAWAL
                    </Link>
                  </h5>
                  <h6 className="mb-1">Design Head</h6>
                  <p className="text-muted mb-0 ff-secondary">
                    Consultant: Product & structural design
                    <br />
                    <br />
                  </p>
                </CardBody>
              </Card>

              {/* <!-- end card --> */}
            </Col>

            {/* <!-- end col --> */}
          </Row>

          {/* <!-- end row --> */}

          {/* <!-- end row --> */}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Team;
