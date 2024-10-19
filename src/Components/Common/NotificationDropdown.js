import React, { useState, useEffect } from "react";
import {
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";

import { GET_USER_NOTIFICATIONS } from "../../slices/UserNotifications/thunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NotificationModal from "../../pages/UserNotifications/NotificationModal";
//import images
import avatar3 from "../../assets/images/users/avatar-3.jpg";
//SimpleBar
import SimpleBar from "simplebar-react";

const NotificationDropdown = () => {
  const dispatch = useDispatch(); // Used for API connection
  const data = useSelector((state) => state.UserNotifications.data);
  const loading = useSelector((state) => state.UserNotifications.loading);
  const error = useSelector((state) => state.UserNotifications.error);
  const success = useSelector((state) => state.UserNotifications.success);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    dispatch(GET_USER_NOTIFICATIONS());
  }, [dispatch]);

  const [isNotificationDropdown, setIsNotificationDropdown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [activeTab, setActiveTab] = useState("1");
  const [checkedItems, setCheckedItems] = useState({}); // Track checked items

  const toggleNotificationDropdown = () =>
    setIsNotificationDropdown(!isNotificationDropdown);
  const toggleModal = () => setModalOpen(!modalOpen);

  if (data === null) return "";

  const handleItemClick = (notification) => {
    setSelectedNotification(notification);
    toggleModal();
  };

  const onChecked = (notificationID, event) => {
    const isChecked = event.target.checked;
    setCheckedItems((prev) => ({
      ...prev,
      [notificationID]: isChecked,
    }));
    if (isChecked) {
      console.log(`Checkbox for ${notificationID} is checked.`);
    }
  };

  return (
    <React.Fragment>
      <Dropdown
        isOpen={isNotificationDropdown}
        toggle={toggleNotificationDropdown}
        className="topbar-head-dropdown ms-1 header-item"
      >
        <DropdownToggle
          type="button"
          tag="button"
          className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle shadow-none"
        >
          <i className="bx bx-bell fs-22"></i>
          <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
            3<span className="visually-hidden">unread messages</span>
          </span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
          <div className="dropdown-head bg-primary bg-pattern rounded-top">
            <div className="p-3">
              <Row className="align-items-center">
                <Col>
                  <h6 className="m-0 fs-16 fw-semibold text-white">
                    {" "}
                    Notifications{" "}
                  </h6>
                </Col>
                <div className="col-auto dropdown-tabs">
                  <span className="badge bg-light-subtle text-body fs-13">
                    {" "}
                    {data.length} New
                  </span>
                </div>
              </Row>
            </div>

            <div className="px-2 pt-2">
              <Nav className="nav-tabs dropdown-tabs nav-tabs-custom">
                <NavItem>
                  <NavLink
                    href="#"
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      setActiveTab("1");
                    }}
                  >
                    Special Requests
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" className="py-2 ps-2">
              {data==null?(<div>
                <p>No data available</p>
              </div>):(
                  <SimpleBar style={{ maxHeight: "300px" }} className="pe-2">
                    {data.map((notification) => (
                      <div
                        key={notification.NotificationID}
                        className="text-reset notification-item d-block dropdown-item"
                      >
                        <div className="d-flex">
                          <img
                            src={avatar3}
                            className="me-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div
                            className="flex-grow-1"
                            onClick={() => handleItemClick(notification)}
                          >
                            <Link to="#" className="stretched-link">
                              <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                {notification.notificationTitle}
                              </h6>
                            </Link>
                            <div className="fs-13 text-muted">
                              <p className="mb-1">
                                {notification.notificationSubTitle}
                              </p>
                            </div>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span>{notification.notificationNarration}</span>
                            </p>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span>{notification.notificationFor}</span>
                            </p>
                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                              <span>
                                <i className="mdi mdi-clock-outline"></i>{" "}
                                {notification.notificationOn} |{" "}
                                {notification.Module}
                              </span>
                            </p>
                          </div>
                          <div className="px-2 fs-15">
                            <div className="form-check notification-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                checked={
                                  !!checkedItems[notification.notificationID]
                                }
                                onChange={(event) =>
                                  onChecked(notification.notificationID, event)
                                }
                                id={`messages-notification-check${notification.notificationID}`}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`messages-notification-check${notification.notificationID}`}
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </SimpleBar>
              )};
              
            </TabPane>
          </TabContent>
        </DropdownMenu>
      </Dropdown>

      {/* Render NotificationModal */}
      <NotificationModal
        isOpen={modalOpen}
        toggle={toggleModal}
        notification={selectedNotification}
      />
    </React.Fragment>
  );
};

export default NotificationDropdown;
