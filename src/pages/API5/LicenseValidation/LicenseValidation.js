import React, { useEffect, useState } from "react";
import {Card,CardBody,Col,Container,Input,Label,Row,Button,Form,FormFeedback,Alert,Spinner,} from "reactstrap"; // Used for UI Components
import ParticlesAuth from "../../ERPLogin/AuthenticationInner/ParticlesAuth";

// redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import withRouter from "../../../Components/Common/withRouter";
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import {POST_LicenseValidation,resetState} from "../../../slices/API5/LicenseValidation/thunk"
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// type it
import TypeIt from "typeit";

import infinity3 from "../../../assets/INFINITY.png";
import { infinity } from 'ldrs';

infinity.register();
// import images

const LicenseValidation = (props) => {
   const dispatch = useDispatch(); // Used for API connection
   const data = useSelector((state) => state.LicenseValidation.data);
   const loading = useSelector((state) => state.LicenseValidation.loading);
   const error = useSelector((state) => state.LicenseValidation.error);
   const success = useSelector((state) => state.LicenseValidation.success);
   const navigate = useNavigate(); // Initialize useNavigate

   
  const [showPassword, setShowPassword] = useState(false); //Set Show Password
  const [userLogin, setUserLogin] = useState([]); //Data is sent to userLogin Variable
  const [autoSubmitted, setAutoSubmitted] = useState(false); // Track auto submission

  useEffect(() => {
    
    // Check if email and password are stored in cookies
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email && password) {
      // Set the userLogin state with stored credentials
      setUserLogin({ email, password });

      // Automatically submit the form after 2 seconds if not already auto-submitted
      if (!autoSubmitted) {
        setAutoSubmitted(true);
        setTimeout(() => {validation.handleSubmit();}, 500); // Delay of 2 seconds

      }
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
      // Store credentials in session storage
    
      dispatch(POST_LicenseValidation(values));
    },    
  });


  useEffect(() => {
    if (success) {
         navigate("/CompanySelection");
    }
}, [success, navigate]);


  // TYPE_IT
  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      const typeItInstance = new TypeIt(".text-description", {
        strings: ["ERP on your Fingertips."],
        speed: 50,
        waitUntilVisible: true,
      }).go();

      return () => {typeItInstance.destroy();};
    });

    return () => cancelAnimationFrame(handle);
  }, []);

  document.title = "Infinity-X | CODEPLAYERS Business System Private Limited";
  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          {(loading) && (
            <div className="loader-overlay">
              <l-infinity
                size="55"
                stroke="4"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="1.3"
                color="white"
              ></l-infinity>
              <p className="validating-message">Validating...</p>
            </div>
          )}
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <img src={infinity3} alt="infinityLogo" height="60" width="212" />
                  </div>
                  <p className="text-description mt-3 fs-15 fw-medium"></p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome</h5>
                      <p className="text-muted">
                        Login to continue to Infinity-X
                      </p>
                    </div>
                    {error && (<Alert color="danger"> {error} </Alert>)}
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
                            invalid={validation.touched.email && !!validation.errors.email }
                          />
                          {validation.touched.email &&
                          validation.errors.email && (
                            <FormFeedback type="invalid">
                              {validation.errors.email}
                            </FormFeedback>
                          )}
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
                              invalid={validation.touched.password && !!validation.errors.password }
                            />
                            {validation.touched.password &&
                            validation.errors.password && (
                              <FormFeedback type="invalid">
                                {validation.errors.password}
                              </FormFeedback>
                            )}
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
                            disabled={loading}
                            className="btn btn-success w-100"
                            type="submit"
                          >
                            {loading && (
                              <Spinner size="sm" className="me-2">
                                Loading...
                              </Spinner>
                            )}
                            Login
                          </Button>
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
              flex-direction: column;
              justify-content: center;
              align-items: center;
              z-index: 9999;
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

export default withRouter(LicenseValidation);