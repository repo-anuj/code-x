import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Col,
  Container,
  Row,
  CardHeader,
  Input,
} from "reactstrap";
import CPBreadCrumbMasters from "../../../Components/CPComponents/CPLayouts/CPBreadCrumbMasters";
import { GET_MASTER_REGISTER } from "../../../slices/ERPMasters/Register/thunk";
import { useSelector, useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import CPTable from "../../../Components/CPComponents/CPChart/CPTable";
import { GetDetails } from "../MasterCommonFunctions/getDetails";


const MasterRegister = () => {
  const FormID = new URLSearchParams(window.location.search).get("FormID");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.MasterRegister.data || null);
  const loading = useSelector((state) => state.MasterRegister.loading);
  const error = useSelector((state) => state.MasterRegister.error);
  const success = useSelector((state) => state.MasterRegister.success);
  const navigate = useNavigate();

  // State for search input and filtered data
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    dispatch(GET_MASTER_REGISTER({ masterURL: GetDetails(FormID, "saveURL") }));
  }, [dispatch, FormID]);



  useEffect(() => {
    document.title = "Voucher Details | Infinity X";
  }, []);

  useEffect(() => {
    // Function to sanitize the search term and filter data
    const sanitizeSearchTerm = (term) => {
      return term.replace(/[^a-zA-Z0-9\s]/g, ''); // Removes everything except alphanumeric and whitespace
    };

    // Filter data based on the sanitized search term
    if (data) {
      const sanitizedSearchTerm = sanitizeSearchTerm(searchTerm).toLowerCase();
      const regex = new RegExp(sanitizedSearchTerm, 'i'); // 'i' for case-insensitive

      const filtered = data.filter(item =>
        Object.values(item).some(value =>
          regex.test(value.toString())
        )
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

  const [isInfoDetails, setIsInfoDetails] = useState(false);

  const masterFormNavigation = () => {
    navigate(`/MasterForm?FormID=${FormID}`);
  };

  const toggleInfo = () => {
    setIsInfoDetails(!isInfoDetails);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error loading data: {error.message || "Something went wrong"}</div>;
  }
  
  // if (!data.length) {
  //   return <div>No data available</div>;
  // }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <CPBreadCrumbMasters
            title={GetDetails(FormID, "title")}
            pageTitle={GetDetails(FormID, "title")}
          />
          <Row>
            <Col lg={12}>
              <Card id="leadsList" className="w-100">
                <CardHeader className="border-0">
                  <Row className="g-4 mb-4 align-items-center">
                    <Col sm={12} md={6} lg={4}>
                      <div className="search-box">
                        <Input
                          type="text"
                          className="form-control search"
                          placeholder="Search for..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </Col>
                    <Col sm={12} md={6} lg={8} className="d-flex justify-content-end">
                      <div className="hstack gap-2">
                        <button
                          type="button"
                          className="btn btn-info"
                          onClick={toggleInfo}
                        >
                          <i className="ri-filter-3-line align-bottom me-1"></i>{" "}
                          Filters
                        </button>
                        <button
                          type="button"
                          className="btn btn-success add-btn"
                          id="create-btn"
                          onClick={masterFormNavigation}
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                        </button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} className="table-responsive">
                      <CPTable dataFromAPI={filteredData} searchTerm={searchTerm} />
                    </Col>
                  </Row>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MasterRegister;
