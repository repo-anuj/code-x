import React, { useState } from "react";
import { Col, Container, Row, Collapse } from "reactstrap";
import classnames from "classnames";

const Faqs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeAccordion1, setActiveAccordio1] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  const toggleAccordion1 = (index) => {
    setActiveAccordio1(activeAccordion1 === index ? null : index);
  };

  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-5">
                <h2 className="mb-3 fw-bold">Frequently Asked Questions</h2>
                <p className="text-muted">
                  Here are some of the most frequently asked questions about our
                  ERP solutions.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-lg-5 g-4">
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-shrink-0 me-1">
                  <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-0 fw-semibold">General Questions</h5>
                </div>
              </div>

              <div
                className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
                id="genques-accordion"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingOne">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: activeAccordion !== 0,
                      })}
                      type="button"
                      onClick={() => toggleAccordion(0)}
                      style={{ cursor: "pointer" }}
                    >
                      What is ERP and how can it benefit my business?
                    </button>
                  </h2>
                  <Collapse
                    isOpen={activeAccordion === 0}
                    className="accordion-collapse"
                  >
                    <div className="accordion-body ff-secondary">
                      ERP (Enterprise Resource Planning) is a comprehensive
                      software system that integrates and automates various
                      business processes, such as accounting, inventory
                      management, supply chain, and human resources, into a
                      single platform. By implementing an ERP system, businesses
                      can benefit from increased efficiency, improved data
                      accuracy, better decision-making, and enhanced
                      collaboration across different departments.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingTwo">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: activeAccordion !== 1,
                      })}
                      type="button"
                      onClick={() => toggleAccordion(1)}
                      style={{ cursor: "pointer" }}
                    >
                      How long does it typically take to implement an ERP
                      system?
                    </button>
                  </h2>
                  <Collapse
                    isOpen={activeAccordion === 1}
                    className="accordion-collapse"
                  >
                    <div className="accordion-body ff-secondary">
                      The implementation timeline can vary depending on the size
                      and complexity of your organization, the ERP system being
                      implemented, and the scope of the project. On average, a
                      successful ERP implementation can take 6 to 12 months,
                      with larger enterprises potentially requiring 12 to 18
                      months. Our experienced team works closely with you to
                      ensure a smooth and timely implementation process.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingThree">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: activeAccordion !== 2,
                      })}
                      type="button"
                      onClick={() => toggleAccordion(2)}
                      style={{ cursor: "pointer" }}
                    >
                      How much does an ERP system typically cost?
                    </button>
                  </h2>
                  <Collapse
                    isOpen={activeAccordion === 2}
                    className="accordion-collapse"
                  >
                    <div className="accordion-body ff-secondary">
                      The cost of an ERP system can vary widely depending on the
                      size of your business, the specific features and
                      functionality required, and the deployment model (on-
                      premise or cloud-based). Generally, the cost can range
                      from a few thousand dollars for small businesses to
                      hundreds of thousands or millions for large enterprises.
                      We offer flexible pricing options to fit your budget and
                      needs.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingFour">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: activeAccordion !== 3,
                      })}
                      type="button"
                      onClick={() => toggleAccordion(3)}
                      style={{ cursor: "pointer" }}
                    >
                      How do I know if my business is ready for an ERP system?
                    </button>
                  </h2>
                  <Collapse
                    isOpen={activeAccordion === 3}
                    className="accordion-collapse"
                  >
                    <div className="accordion-body ff-secondary">
                      There are a few key signs that your business may be ready
                      for an ERP system:
                      <ul>
                        <li>
                          Your business has outgrown its current manual or
                          disparate systems, leading to inefficiencies and
                          difficulties in data management.
                        </li>
                        <li>
                          You need better visibility and control over your
                          business operations, such as inventory, finances, and
                          supply chain.
                        </li>
                        <li>
                          You want to improve collaboration and information
                          sharing across different departments.
                        </li>
                        <li>
                          You're looking to streamline and automate your
                          business processes.
                        </li>
                      </ul>
                      Our team can help you assess your readiness and
                      requirements to determine the best ERP solution for your
                      business.
                    </div>
                  </Collapse>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-center mb-2">
                <div className="flex-shrink-0 me-1">
                  <i className="ri-question-line fs-24 align-middle text-success me-1"></i>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-0 fw-semibold">General Questions</h5>
                </div>
              </div>

              <div
                className="accordion custom-accordionwithicon custom-accordion-border accordion-border-box"
                id="genques-accordion"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingOne">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: activeAccordion1 !== 0,
                      })}
                      type="button"
                      onClick={() => toggleAccordion1(0)}
                      style={{ cursor: "pointer" }}
                    >
                      What is ERP and how can it benefit my business?
                    </button>
                  </h2>
                  <Collapse
                    isOpen={activeAccordion1 === 0}
                    className="accordion-collapse"
                  >
                    <div className="accordion-body ff-secondary">
                      ERP (Enterprise Resource Planning) is a comprehensive
                      software system that integrates and automates various
                      business processes, such as accounting, inventory
                      management, supply chain, and human resources, into a
                      single platform. By implementing an ERP system, businesses
                      can benefit from increased efficiency, improved data
                      accuracy, better decision-making, and enhanced
                      collaboration across different departments.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingTwo">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: activeAccordion1 !== 1,
                      })}
                      type="button"
                      onClick={() => toggleAccordion1(1)}
                      style={{ cursor: "pointer" }}
                    >
                      How long does it typically take to implement an ERP
                      system?
                    </button>
                  </h2>
                  <Collapse
                    isOpen={activeAccordion1 === 1}
                    className="accordion-collapse"
                  >
                    <div className="accordion-body ff-secondary">
                      The implementation timeline can vary depending on the size
                      and complexity of your organization, the ERP system being
                      implemented, and the scope of the project. On average, a
                      successful ERP implementation can take 6 to 12 months,
                      with larger enterprises potentially requiring 12 to 18
                      months. Our experienced team works closely with you to
                      ensure a smooth and timely implementation process.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingThree">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: activeAccordion1 !== 2,
                      })}
                      type="button"
                      onClick={() => toggleAccordion1(2)}
                      style={{ cursor: "pointer" }}
                    >
                      How much does an ERP system typically cost?
                    </button>
                  </h2>
                  <Collapse
                    isOpen={activeAccordion1 === 2}
                    className="accordion-collapse"
                  >
                    <div className="accordion-body ff-secondary">
                      The cost of an ERP system can vary widely depending on the
                      size of your business, the specific features and
                      functionality required, and the deployment model (on-
                      premise or cloud-based). Generally, the cost can range
                      from a few thousand dollars for small businesses to
                      hundreds of thousands or millions for large enterprises.
                      We offer flexible pricing options to fit your budget and
                      needs.
                    </div>
                  </Collapse>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="genques-headingFour">
                    <button
                      className={classnames("accordion-button", "fw-medium", {
                        collapsed: activeAccordion !== 3,
                      })}
                      type="button"
                      onClick={() => toggleAccordion1(3)}
                      style={{ cursor: "pointer" }}
                    >
                      How do I know if my business is ready for an ERP system?
                    </button>
                  </h2>
                  <Collapse
                    isOpen={activeAccordion1 === 3}
                    className="accordion-collapse"
                  >
                    <div className="accordion-body ff-secondary">
                      There are a few key signs that your business may be ready
                      for an ERP system:
                      <ul>
                        <li>
                          Your business has outgrown its current manual or
                          disparate systems, leading to inefficiencies and
                          difficulties in data management.
                        </li>
                        <li>
                          You need better visibility and control over your
                          business operations, such as inventory, finances, and
                          supply chain.
                        </li>
                        <li>
                          You want to improve collaboration and information
                          sharing across different departments.
                        </li>
                        <li>
                          You're looking to streamline and automate your
                          business processes.
                        </li>
                      </ul>
                      Our team can help you assess your readiness and
                      requirements to determine the best ERP solution for your
                      business.
                    </div>
                  </Collapse>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Faqs;
