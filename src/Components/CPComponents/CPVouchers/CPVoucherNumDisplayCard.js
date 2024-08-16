import React, { useState } from 'react';
import {
  Card, CardHeader, CardBody, Col, Row, Spinner, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter, Button
} from "reactstrap";
import { GET_VOUCHERNUM_PDF } from '../../../slices/ERPReportings/VoucherNum/DownloadPDF/thunk';
import { useSelector, useDispatch } from "react-redux";
import CPVoucherNumBillingShippingCard from './CPVoucherNumBillingShippingCard';

const CPVoucherNumDisplayCard = (voucher) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.VoucherNumPDF.data);
  const loading = useSelector((state) => state.VoucherNumPDF.loading);
  const error = useSelector((state) => state.VoucherNumPDF.error);
  const success = useSelector((state) => state.VoucherNumPDF.success);
  const [modal, setModal] = useState(false);

  const handleDownload = async () => {
    dispatch(GET_VOUCHERNUM_PDF(voucher.voucher.voucherNumID));
  };

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

                <div className="d-flex align-items-center flex-shrink-0">
                  <button className="btn btn-success btn-sm me-2" onClick={handleDownload}>
                    {loading ? (<Spinner size="sm" />) : (<i className="ri-download-2-fill align-middle me-0 fs-6"></i>)}
                  </button>
                  <UncontrolledDropdown className="sm">
                    <DropdownToggle tag="button" className="btn btn-info btn-sm dropdown" type="button">
                      <i className="ri-more-fill"></i>
                    </DropdownToggle>
                    <DropdownMenu>
                      <li><DropdownItem><i className="ri-check-fill align-bottom me-2 text-success"></i> Approve</DropdownItem></li>
                      <li><DropdownItem><i className="ri-close-fill align-bottom me-2 text-danger"></i> Reject</DropdownItem></li>
                      <li><DropdownItem><i className="ri-whatsapp-fill align-bottom me-2 text-success"></i> Whatsapp</DropdownItem></li>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div className="flex-grow-1">
                <p className="text-muted">Purchase Order (Raw Materials)</p>
                <div className="d-flex gap-4 mb-3">
                  <div>
                    <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>001 | SMS
                  </div>
                  <div>
                    <i className="ri-time-line text-primary me-1 align-bottom"></i>RM/PO/1223 13-Aug-2024
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="table-responsive table-card">
                <table className="table table-borderless align-middle mb-0 table-sm">
                  <thead className="table-light text-muted">
                    <tr>
                      <th colSpan="2" scope="col">Particulars</th>
                      <th scope="col" className="text-end">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {voucher.voucher.item.map((item, index) => (
                      <tr key={index}>
                        <td colSpan="2">
                          <h5 className="fs-14">{item.particulars} </h5>
                          <p className="text-muted mb-0">{voucher.voucher.currencyDetails.symbol} {item.exclusiveRate} x {item.quantity}</p>
                        </td>
                        <td className="text-end">{voucher.voucher.currencyDetails.symbol} {item.exclusiveAmount}</td>
                      </tr>
                    ))}
                    <tr className="table-active">
                      <th colSpan="2">Total (INR) :</th>
                      <td className="text-end">
                        <span className="fw-semibold">$353.15</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Modal */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Billing Shipping Details</ModalHeader>
        <ModalBody>
        <CPVoucherNumBillingShippingCard billingShipping={voucher.voucher.billing} labelTitle ={"Billing Details"}  />
        <CPVoucherNumBillingShippingCard billingShipping={voucher.voucher.shipping} labelTitle ={"Shipping Details"}  />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

const styles = {
  modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
  },
  modalContent: {
      backgroundColor: 'transparent', // Transparent modal background
      borderRadius: '8px',
      width: '500px',
      padding: 0,
      position: 'relative',
  },
  modalHeader: {
      backgroundColor: 'white', // White background for header
      padding: '15px',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  modalBody: {
      padding: '20px',
      backgroundColor: 'transparent', // Transparent body background
  },
  close: {
      cursor: 'pointer',
      fontSize: '24px',
  },
};


export default CPVoucherNumDisplayCard;

// import React, { useEffect,useState } from 'react';
// import { Card,CardHeader, CardBody, Col, Row, Spinner,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from "reactstrap";
// import { GET_VOUCHERNUM_PDF } from '../../../slices/ERPReportings/VoucherNum/DownloadPDF/thunk';
// import { useSelector, useDispatch } from "react-redux";
// const CPVoucherNumDisplayCard = (voucher) => {
//   const dispatch = useDispatch(); // Used for API connection
//   const data = useSelector((state) => state.VoucherNumPDF.data);
//   const loading = useSelector((state) => state.VoucherNumPDF.loading);
//   const error = useSelector((state) => state.VoucherNumPDF.error);
//   const success = useSelector((state) => state.VoucherNumPDF.success);
//   const [modal, setModal] = useState(false);



//   const handleDownload = async () => {
//     dispatch(GET_VOUCHERNUM_PDF(voucher.voucher.voucherNumID));
//   };

//   const handleShareWhatsApp = async () => {

//   };
//     return (
//     <React.Fragment>

//       <Row>
//       <Col>
//               <Card>
//                 <CardHeader>
//                 <div class="align-items-center d-flex">

//                     <h5 class="flex-grow-1">South East Coal Fields Limited</h5>
                  
//                     <div className="d-flex align-items-center flex-shrink-0">
//                       <button className="btn btn-success btn-sm me-2" onClick={handleDownload}>
//                         { loading ? (<Spinner size="sm" />) : (<i className="ri-download-2-fill align-middle me-0 fs-6"></i>)}
//                       </button>
//                         <UncontrolledDropdown className="sm">
//                           <DropdownToggle tag="button" className="btn btn-info btn-sm dropdown" type="button">
//                             <i className="ri-more-fill"></i>
//                           </DropdownToggle>
//                           <DropdownMenu>
//                             <li><DropdownItem><i className="ri-check-fill align-bottom me-2 text-success"></i> Approve</DropdownItem></li>
//                             <li><DropdownItem><i className="ri-close-fill align-bottom me-2 text-danger"></i> Reject</DropdownItem></li>
//                             <li><DropdownItem><i className="ri-whatsapp-fill align-bottom me-2 text-success"></i> Whatsapp</DropdownItem></li>
//                           </DropdownMenu>
//                         </UncontrolledDropdown>
//                       </div>
//                     </div>
//                     <div className="flex-grow-1">
//                         <p className="text-muted">Purchase Order (Raw Materials)</p>
//                  <div className="d-flex gap-4 mb-3">
//                    <div>
//                      <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>001 | SMS
//                    </div>
//                    <div>
//                      <i className="ri-time-line text-primary me-1 align-bottom"></i>RM/PO/1223 13-Aug-2024
//                    </div>

//                     </div>

//                   </div>
//                 </CardHeader>
//                 <CardBody>
//                   <div className="table-responsive table-card">
//                     <table className="table table-borderless align-middle mb-0 table-sm">
//                       <thead className="table-light text-muted">
//                         <tr>
//                           <th colspan="2" scope="col">Particulars</th>
//                           <th scope="col" className="text-end">
//                             Amount
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                           {voucher.voucher.item.map((item, index) => (
//                             <tr key={index}>
//                               <td colspan="2">
//                                 <h5 className="fs-14">{item.particulars} </h5>
//                                 <p className="text-muted mb-0">{voucher.voucher.currencyDetails.symbol} {item.exclusiveRate} x {item.quantity}</p>
//                               </td>
//                               <td className="text-end">{voucher.voucher.currencyDetails.symbol} {item.exclusiveAmount}</td>
//                             </tr>
//                               ))}
//                             {/* {voucher.voucher.financial.map((financial, index) => (
//                               <tr key={index}>
//                             <td colspan="2">
//                                 <h5 className="fs-14">{financial.particulars} </h5>
//                               </td>
//                               <td className="text-end">{financial.exclusiveAmount}</td>
//                               </tr>
//                             ))}                        */}

//                         <tr className="table-active">
//                           <th colSpan="2">Total (INR) :</th>
//                           <td className="text-end">
//                             <span className="fw-semibold">$353.15</span>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>

//                   </div>

//                  {/* <div className="mt-4 hstack gap-2">
//                  <Link to="#!" className="btn btn-soft-success w-100">
//                      Approve
//                    </Link>
//                    <Link to="#!" className="btn btn-soft-primary w-100">
//                      Reject
//                    </Link>
//                  </div> */}

//                 </CardBody>
//               </Card>
//             </Col>
//       </Row>
//     </React.Fragment>
//   );
// };

// export default CPVoucherNumDisplayCard;