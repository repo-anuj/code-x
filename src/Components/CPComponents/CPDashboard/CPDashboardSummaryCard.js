import React, { useState } from 'react';
import SimpleBar from "simplebar-react";
import '../CPSCSS/setPageScale.css'

import {
  Card, CardHeader, CardBody, Col, Row, Spinner, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter, Button
} from "reactstrap";

const CPDashboardSummaryCard = (voucher) => {

  const toggleModal = () => setModal(!modal);


  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <div className="align-items-center d-flex">
                <h5 className="flex-grow-1" onClick={toggleModal} style={{ cursor: 'pointer' }}>
                  South East Coal Fields Limited
                </h5>
              </div>
            </CardHeader>
            <CardBody>
              
              <div className="table-responsive table-card">
                <table className="table align-middle mb-3 table-sm">
                  <thead className="table-light text-muted">
                    <tr>
                      <th colSpan="2" scope="col">Particulars</th>
                      <th scope="col" className="text-end">
                        Net Weight
                      </th>
                    </tr>
                  </thead>
                  </table>
                  </div>
                  <SimpleBar style={{ height: "225px"}}  >
                  <div className="table-responsive table-card">
                  <table className="table align-middle mb-0 table-sm">      
                  <thead className="table-light text-muted" style={{visibility:"hidden"}}>
                    <tr>
                    <th colSpan="2" scope="col">Particulars</th>
                      <th scope="col" className="text-end">
                        Net Weight
                      </th>
                      </tr>                      
                  </thead>            
                  <tbody>
                      <tr>
                        <td colSpan="2">
                          <h5 className="fs-14">Sponge Iron </h5>
                          <p className="text-muted mb-0">
                            <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>120 | <text className="text-danger">5 Pending</text>
                           </p>
                        </td>
                        <td className="text-end">
                        <h5 className="fs-14">1,250.20 MTS</h5>
                        <p className="text-danger mb-0">.240 MTS</p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <h5 className="fs-14">Sponge Iron </h5>
                          <p className="text-muted mb-0">
                            <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>120 | <text className="text-danger">5 Pending</text>
                           </p>
                        </td>
                        <td className="text-end">
                        <h5 className="fs-14">1,250.20 MTS</h5>
                        <p className="text-danger mb-0">.240 MTS</p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <h5 className="fs-14">Sponge Iron </h5>
                          <p className="text-muted mb-0">
                            <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>120 | <text className="text-danger">5 Pending</text>
                           </p>
                        </td>
                        <td className="text-end">
                        <h5 className="fs-14">1,250.20 MTS</h5>
                        <p className="text-danger mb-0">.240 MTS</p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <h5 className="fs-14">Sponge Iron </h5>
                          <p className="text-muted mb-0">
                            <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>120 | <text className="text-danger">5 Pending</text>
                           </p>
                        </td>
                        <td className="text-end">
                        <h5 className="fs-14">1,250.20 MTS</h5>
                        <p className="text-danger mb-0">.240 MTS</p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <h5 className="fs-14">Sponge Iron </h5>
                          <p className="text-muted mb-0">
                            <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>120 | <text className="text-danger">5 Pending</text>
                           </p>
                        </td>
                        <td className="text-end">
                        <h5 className="fs-14">1,250.20 MTS</h5>
                        <p className="text-danger mb-0">.240 MTS</p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <h5 className="fs-14">Sponge Iron </h5>
                          <p className="text-muted mb-0">
                            <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>120 | <text className="text-danger">5 Pending</text>
                           </p>
                        </td>
                        <td className="text-end">
                        <h5 className="fs-14">1,250.20 MTS</h5>
                        <p className="text-danger mb-0">.240 MTS</p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    </div>
</SimpleBar>
                    <div className="table-responsive table-card">
                  <table className="table align-middle mb-0 table-sm">      
                  <thead className="table-light text-muted" style={{visibility:"hidden"}}>
                    <tr>
                    <th colSpan="2" scope="col">Particulars</th>
                      <th scope="col" className="text-end">
                        Net Weight
                      </th>
                      </tr>
                  </thead>  
                  <tbody>
                      <tr className="table-active">
                      <th colSpan="2">Total :
                      <p className="text-muted mb-0">
                            <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>120 | <text className="text-danger">5 Pending</text>
                           </p>
                      </th>
                      
                      <td className="text-end">
                        <span className="fw-semibold">5,353.15 MTS</span>
                        <p className="text-danger mb-0">.240 MTS</p>
                      </td>
                    </tr> 
                    </tbody>          
                    </table>
                        </div>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};


export default CPDashboardSummaryCard;