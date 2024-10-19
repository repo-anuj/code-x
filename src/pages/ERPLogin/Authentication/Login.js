import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
  Alert,
  Spinner,
} from "reactstrap"; // Used for UI Components
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

// redux
import { useSelector, useDispatch } from "react-redux";

//comment for git
import { Link } from "react-router-dom";
import withRouter from "../../../Components/Common/withRouter";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// actions
import {
  logoutLicenseUser,
  POST_Login,
} from "../../../slices/ERPLogin/auth/login/thunk"; // Used for API Logics

import infinity3 from "../../../assets/INFINITY.png";
import clientLogo from "../../../assets/client.png";
import { infinity } from "ldrs";

infinity.register();

const Login = (props) => {
  const dispatch = useDispatch(); // Used for API connection
  const data = useSelector((state) => state.ERPLogin.data);
  const loading = useSelector((state) => state.ERPLogin.loading);
  const error = useSelector((state) => state.ERPLogin.error);
  const success = useSelector((state) => state.ERPLogin.success);
  const navigate = useNavigate(); // Initialize useNavigate

  const [showPassword, setShowPassword] = useState(false); //Set Show Password
  const [userLogin, setUserLogin] = useState([]); //Data is sent to userLogin Variable
  const [autoSubmitted, setAutoSubmitted] = useState(false); // Track auto submission

  useEffect(() => {
    // Check if email and password are stored in cookies
    const email = localStorage.getItem("email2");
    const password = localStorage.getItem("password2");
    if (email && password) {
      // Set the userLogin state with stored credentials
      setUserLogin({ email, password });

      // Automatically submit the form after 2 seconds if not already auto-submitted
      // if (!autoSubmitted) {
      //   setAutoSubmitted(true);
      //   setTimeout(() => {
      //     validation.handleSubmit();
      //   }, 500); // Delay of 2 seconds
      // }
    }
  }, []);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: userLogin.email || "" || "",
      password: userLogin.password || "" || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      dispatch(POST_Login(values));
    },
  });

  useEffect(() => {
    if (success) {
      navigate("/Dashboards-ERP");
    }
  }, [success, navigate]);

  document.title = "Infinity-X | CODEPLAYERS Business System Private Limited";
  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          {loading && (
            <div className="loader-overlay">
              <div className="loader-container">
                <l-infinity
                  size="55"
                  stroke="4"
                  stroke-length="0.15"
                  bg-opacity="0.1"
                  speed="1.3"
                  color="white"
                ></l-infinity>
                <p className="validating-message">Validating the User...</p>
              </div>
            </div>
          )}
          <Container style={{ marginBottom: "-5%" }}>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    {/* <img src={clientLogo} alt="" height="50" width="212" /> */}
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4" style={{ marginBottom: "-3.5rem" }}>
                    <div className="text-center mt-2">
                      {/* <h5 className="text-primary">{companyName}</h5> */}
                      {/* <p className="text-muted">Company Code: {companyCode}</p> */}
                    </div>

                    {error && <Alert color="danger"> {error} </Alert>}
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          validation.handleSubmit();
                          return false;
                        }}
                        action="#"
                      >
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Username
                          </Label>
                          <Input
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            type="text"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email || ""}
                            invalid={
                              validation.touched.email &&
                              validation.errors.email
                                ? true
                                : false
                            }
                          />
                          {validation.touched.email &&
                          validation.errors.email ? (
                            <FormFeedback type="invalid">
                              {validation.errors.email}
                            </FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <div className="float-end">
                            <Link to="/forgot-password" className="text-muted">
                              Forgot password?
                            </Link>
                          </div>
                          <Label
                            className="form-label"
                            htmlFor="password-input"
                          >
                            Password
                          </Label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <Input
                              name="password"
                              value={validation.values.password || ""}
                              type={showPassword ? "text" : "password"}
                              className="form-control pe-5"
                              placeholder="Enter Password"
                              onChange={validation.handleChange}
                              onBlur={validation.handleBlur}
                              invalid={
                                validation.touched.password &&
                                validation.errors.password
                                  ? true
                                  : false
                              }
                            />
                            {validation.touched.password &&
                            validation.errors.password ? (
                              <FormFeedback type="invalid">
                                {validation.errors.password}
                              </FormFeedback>
                            ) : null}
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted shadow-none"
                              onClick={() => setShowPassword(!showPassword)}
                              type="button"
                              id="password-addon"
                            >
                              <i className="ri-eye-fill align-middle"></i>
                            </button>
                          </div>
                        </div>

                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="auth-remember-check"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="auth-remember-check"
                          >
                            Remember me
                          </Label>
                        </div>

                        <div className="mt-4">
                          <Button
                            color="success"
                            disabled={error ? null : loading ? true : false}
                            className="btn btn-success w-100"
                            type="submit"
                          >
                            {loading ? (
                              <Spinner size="sm" className="me-2">
                                {" "}
                                Loading...{" "}
                              </Spinner>
                            ) : null}
                            Login
                          </Button>

                          <div className="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                              <img
                                src={infinity3}
                                alt="infinityLogo"
                                height="60"
                                width="212"
                                style={{
                                  "@media (max-width: 767px)": {
                                    marginTop: "0.5rem",
                                  },
                                }}
                              />
                            </div>

                            {/* <p className="text-description mt-3 fs-15 fw-medium"></p> */}
                          </div>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          <style jsx>{`
            .loader-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #092537;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 9999;
            }
            .loader-container {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .validating-message {
              margin-top: 15px;
              color: white;
              font-size: 1.2rem;
              font-weight: bold;
            }
          `}</style>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default withRouter(Login);
