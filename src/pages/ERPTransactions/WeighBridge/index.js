import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  CardHeader,
  Spinner
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay, FaPause } from "react-icons/fa";
import CPTextBox from "../../../Components/CPComponents/CPInputs/CPTextBox";
import {
  POST_WEIGHBRIDGE_DATA,
  POST_CAMERA_DATA,
  POST_INTEGRATIONLIST_DATA,
} from "../../../slices/ERPTransactions/WeighBridge/thunk.js";
import * as Yup from "yup";

// Utility function to validate IP addresses
function checkIpAddress(ip) {
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  return ipv4Pattern.test(ip) || ipv6Pattern.test(ip);
}

// Validation schema using Yup
const StationSchema = Yup.object().shape({
  StationIP: Yup.string()
    .required("Station IP is required")
    .test("is-valid-ip", "Station IP is not valid", (value) =>
      checkIpAddress(value)
    ),
  StationPort: Yup.string()
    .required("Station Port is required")
    .matches(/^\d+$/, "Station Port must be a number")
    .min(1, "Station Port must be at least 1 digit")
    .max(5, "Station Port must be at most 5 digits"),
});

const WBEntry = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.WeighBridgeData.data);
  const cameraData = useSelector((state) => state.WeighBridgeData.cameraData);
  const integrationDataList = useSelector(
    (state) => state.WeighBridgeData.integrationData
  );
  const loading = useSelector((state) => state.WeighBridgeData.loading);

  const [isPaused, setIsPaused] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [stationLabel, setStationLabel] = useState("Not Configured");
  const [intervalId, setIntervalId] = useState(null);
  const [displayData, setDisplayData] = useState(0);
  const [fetchingImages, setFetchingImages] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem("isPaused") === "false";
    const savedIntervalId = localStorage.getItem("intervalId");
    const savedStationLabel = localStorage.getItem("stationLabel");

    setIsPaused(!savedState);
    setStationLabel(savedStationLabel || "Not Configured");

    if (savedState && savedIntervalId) {
      setIntervalId(parseInt(savedIntervalId, 10));
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("isPaused", isPaused);
    if (isPaused) {
      if (intervalId) {
        clearInterval(intervalId);
        localStorage.removeItem("intervalId");
        setIntervalId(null);
      }
    } else {
      if (intervalId) {
        localStorage.setItem("intervalId", intervalId);
      }
    }
    localStorage.setItem("stationLabel", stationLabel);
  }, [isPaused, intervalId, stationLabel]);

  useEffect(() => {
    if (!isPaused) {
      setDisplayData(data);
    }
  }, [data, isPaused]);

  const fetchData = useCallback(() => {
    const ip = localStorage.getItem("stationIP");
    const port = localStorage.getItem("stationPort");

    if (ip && port && !loading) {
      setFetchingImages(true); // Start loader
      const url = `http://${ip}:${port}`;

      dispatch(
        POST_CAMERA_DATA({ dataIP: url, sendData: "Front,Top,Back" })
      ).finally(() => setFetchingImages(false)); // Stop loader after fetch
    }
  }, [dispatch, loading]);

  const handleFetchIntegrationData = () => {
    const ip = localStorage.getItem("stationIP");
    const port = localStorage.getItem("stationPort");
    const url = `http://${ip}:${port}`;
    dispatch(
      POST_INTEGRATIONLIST_DATA({ dataIP: url, sendData: "IntegrationList" })
    );
  };

  const handlePlay = useCallback(() => {
    if (stationLabel === "Not Configured") {
      alert("Please configure the station first.");
      return;
    }

    setIsPaused(false);

    handleFetchIntegrationData();

    if (integrationDataList && integrationDataList.length > 0) {

      // const wbTask = integrationDataList.find(task => task.TaskType === 0)?.TaskParticulars || 'Unknown';

      const taskType0Count = integrationDataList.filter(task => task.TaskType === 0).length;
      const taskType1Count = integrationDataList.filter(task => task.TaskType === 1).length;
      const updatedLabel = `${localStorage.getItem("stationIP")}:${localStorage.getItem("stationPort")} | ${taskType0Count} WB, ${taskType1Count} Cameras Connected`;
      setStationLabel(updatedLabel);
    } else {
      const updatedLabel = `${localStorage.getItem("stationIP")}:${localStorage.getItem("stationPort")} | Stopped`;
      setStationLabel(updatedLabel);
    }


    const id = setInterval(() => {
      const ip = localStorage.getItem("stationIP");
      const port = localStorage.getItem("stationPort");
      if (ip && port && !loading) {
        const url = `http://${ip}:${port}`;
        dispatch(POST_WEIGHBRIDGE_DATA({ dataIP: url, sendData: "WB 1" }));
      }
    }, 1000);

    setIntervalId(id);
  }, [
    stationLabel,
    dispatch,
    loading,
    handleFetchIntegrationData,
    integrationDataList,
  ]);

  const handlePause = useCallback(() => {
    setIsPaused(true);
    setDisplayData(0);

    const updatedLabel = `${localStorage.getItem(
      "stationIP"
    )}:${localStorage.getItem("stationPort")} | Stopped`;
    setStationLabel(updatedLabel);
    if (intervalId) {
      clearInterval(intervalId);
      localStorage.removeItem("intervalId");
      setIntervalId(null);
    }
  }, [intervalId]);

  const toggleModal = useCallback(() => {
    setModalOpen((prevState) => !prevState);
  }, []);
  const handleModalSave = useCallback(
    (values, resetForm) => {
      const updatedLabel = `${values.StationIP}:${values.StationPort} | Stopped `;
      localStorage.setItem("stationIP", values.StationIP);
      localStorage.setItem("stationPort", values.StationPort);
      setStationLabel(updatedLabel);
      resetForm();
      toggleModal();
    },
    [toggleModal]
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xxl={4}>
              <Card className="card-height-100">
                <CardBody className="p-0">
                  <div className="p-3">
                    <Formik
                      onSubmit={(values, { resetForm }) => {
                        handleModalSave(values, resetForm);
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <Row>
                            <Col xs="12">
                              <div className="d-flex align-items-center mb-3">
                                {stationLabel !== "Not Configured" && (
                                  <Button
                                    color="info"
                                    onClick={
                                      isPaused ? handlePlay : handlePause
                                    }
                                    className="btn-sm me-2"
                                    aria-label={isPaused ? "Start" : "Pause"}
                                  >
                                    {isPaused ? <FaPlay /> : <FaPause />}
                                  </Button>
                                )}
                                <label htmlFor="station" className="me-2 mb-0">
                                  Station:
                                </label>
                                <span
                                  id="station"
                                  className="fw-bold cursor-pointer"
                                  onClick={toggleModal}
                                  aria-label="Station Information"
                                >
                                  {stationLabel}
                                </span>
                              </div>
                            </Col>
                            <Col xs="6">
                              <div className="d-flex align-items-centerd digital-text">
                                <h1
                                  style={{
                                    backgroundColor: "#003366",
                                    color: "#ffffff",
                                    padding: "0.75rem 1rem",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    fontSize: "24px",
                                    width: "100%",
                                    boxSizing: "border-box",
                                    height: "3.5rem",
                                    textAlign: "center",
                                    fontFamily: "'Roboto Mono', monospace",
                                    letterSpacing: "0.1rem",
                                    // fontWeight: "bold"
                                  }}
                                >
                                  {displayData}
                                </h1>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs="6">
                              <div className="text-start mt-3">
                                <Button
                                  onClick={fetchData}
                                  color="primary"
                                  disabled={
                                    stationLabel === "Not Configured" ||
                                    isPaused ||
                                    fetchingImages
                                  }
                                  aria-label="Fetch Camera Data"
                                >
                                  {fetchingImages ? (
                                    <span>
                                      <Spinner size="sm" /> Fetching...
                                    </span>
                                  ) : (
                                    "Fetch"
                                  )}
                                </Button>
                              </div>
                            </Col>
                          </Row>

                          <CardHeader className="align-items-center d-flex border-bottom-dashed">
                            <h4 className="card-title mb-0 flex-grow-1">
                              Camera Captures
                            </h4>
                          </CardHeader>
                          <CardBody>
                            {cameraData === null ||
                              cameraData.length === 0 ? (
                              <p>No Images</p>
                            ) : (
                              <Swiper spaceBetween={20} slidesPerView={1}>
                                {cameraData.map((item, index) => (
                                  <SwiperSlide key={index}>
                                    <img
                                      src={`data:image/jpeg;base64,${item.imageBase64}`}
                                      alt={`Camera Capture ${index}`}
                                      className="img-fluid"
                                    />
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                            )}
                          </CardBody>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Station Information</ModalHeader>
            <ModalBody>
              <Formik
                initialValues={{
                  StationIP: "",
                  StationPort: "",
                }}
                validationSchema={StationSchema}
                onSubmit={(values, { resetForm }) => {
                  handleModalSave(values, resetForm);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field
                      name="StationIP"
                      render={({ field }) => (
                        <CPTextBox
                          title={"Station IP"}
                          id="StationIP"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          error={
                            touched.StationIP && errors.StationIP
                              ? errors.StationIP
                              : ""
                          }
                        />
                      )}
                    />
                      <Field
                      name="StationPort"
                      render={({ field }) => (
                        <CPTextBox
                          title={"Station Port"}
                          id="StationPort"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          error={
                            touched.StationPort && errors.StationPort
                              ? errors.StationPort
                              : ""
                          }
                        />
                      )}
                    />
                    <Button color="primary" type="submit" className="mt-3">
                      Save
                    </Button>
                  </Form>
                )}
              </Formik>
            </ModalBody>

          </Modal>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default WBEntry;
