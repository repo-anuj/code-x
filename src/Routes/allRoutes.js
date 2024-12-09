import React from "react";
import { Navigate } from "react-router-dom";

//query register
import QueryRegister from "./../pages/Dashboards/Register/QueryRegister";
//ERP Login
import Login from "../pages/ERPLogin/Authentication/Login";
import Logout from "../pages/ERPLogin/Authentication/Logout";
import Registration from "../pages/ERPLogin/jhaki/Registration";
import UserOnboarding from "../pages/ERPLogin/jhaki/UserOnboarding";

//Dashboards
import ERPDashboard from "../pages/Dashboards/ERPDashboard";
//landing
import OnePage from "../pages/Landing/OnePage";
import Services_all from "../pages/Landing/OnePage/Services_all";

//ManasAgrawal
import ManasAgrawal from "../pages/Landing/OnePage/ManasAgrawal";

//ManishAgrawal
import ManishAgrawal from "../pages/Landing/OnePage/ManishAgrawal";

//HarshitGoel
import HarshitGoel from "../pages/Landing/OnePage/HarshitGoel";

//AditiAgrawal
import AditiAgrawal from "../pages/Landing/OnePage/AditiAgrawal";

//ArpitAgrawal
import ArpitAgrawal from "../pages/Landing/OnePage/ArpitAgrawal";

//IleshThakkar
import IleshThakkar from "../pages/Landing/OnePage/IleshThakkar";

//RitikaAgrawal
import RitikaAgrawal from "../pages/Landing/OnePage/RitikaAgrawal";

//UtkarshAgrawal
import UtkarshAgrawal from "../pages/Landing/OnePage/UtkarshAgrawal";

//Integration
import IntegrationPage from "../pages/Landing/OnePage/IntegrationPage";
//footer things
import PrivacyPolicy from "../pages/Landing/OnePage/footer/PrivacyPolicy";
import TermsOfService from "../pages/Landing/OnePage/footer/TermsOfService";
import FeedBack from "../pages/Landing/OnePage/footer/FeedBack";
import Cookies from "../pages/Landing/OnePage/footer/Cookies";
import LegalDisclosure from "../pages/Landing/OnePage/footer/LegalDisclosure";
import EULA from "../pages/Landing/OnePage/footer/EULA";

//career
import CareerPage from "../pages/Landing/OnePage/CareerPage";
import AboutUs from "../pages/Landing/OnePage/AboutUs";
//BlogsPage
import BlogsPage from "../pages/Landing/OnePage/Blogs/BlogsPage";
import Blog_1 from "../pages/Landing/OnePage/Blogs/blog_1";
import Blog_2 from "../pages/Landing/OnePage/Blogs/blog_2";
import Blog_3 from "../pages/Landing/OnePage/Blogs/blog_3";
import Blog_4 from "../pages/Landing/OnePage/Blogs/blog_4";
import Blog_5 from "../pages/Landing/OnePage/Blogs/blog_5";
//CaseStudies
import CaseStudiesPage from "../pages/Landing/OnePage/CaseStudy/CaseStudyPage";
import Case_1 from "../pages/Landing/OnePage/CaseStudy/Case1";
import Case_2 from "../pages/Landing/OnePage/CaseStudy/Case2";
import Case_3 from "../pages/Landing/OnePage/CaseStudy/Case3";
import Case_4 from "../pages/Landing/OnePage/CaseStudy/Case_4";
import Case_5 from "../pages/Landing/OnePage/CaseStudy/Case5";

const authProtectedRoutes = [
  {
    path: "/queryRegister",
    component: <QueryRegister />,
  },
  { path: "/Dashboards-ERP", component: <ERPDashboard /> },
];

const publicRoutes = [
  // Authentication Page
  {
    path: "/",
    exact: true,
    component: <Navigate to="/landing" />,
  },
  { path: "*", component: <Navigate to="/landing" /> },
  { path: "/ERPLogout", component: <Logout /> },
  // { path: "/GSTIn", component: <GSTIn /> },
  { path: "/Registration", component: <Registration /> },
  { path: "/UserOnboarding", component: <UserOnboarding /> },
  { path: "/landing", component: <OnePage /> },
  { path: "/UtkarshAgrawal", component: <UtkarshAgrawal /> },
  { path: "/ManasAgrawal", component: <ManasAgrawal /> },
  { path: "/ManishAgrawal", component: <ManishAgrawal /> },
  { path: "/HarshitGoel", component: <HarshitGoel /> },
  { path: "/AditiAgrawal", component: <AditiAgrawal /> },
  { path: "/ArpitAgrawal", component: <ArpitAgrawal /> },
  { path: "/IleshThakkar", component: <IleshThakkar /> },
  { path: "/RitikaAgrawal", component: <RitikaAgrawal /> },
  { path: "/PrivacyPolicy", component: <PrivacyPolicy /> },
  { path: "/TermsOfService", component: <TermsOfService /> },
  { path: "/FeedBack", component: <FeedBack /> },
  { path: "/Cookies", component: <Cookies /> },
  { path: "/LegalDisclosure", component: <LegalDisclosure /> },
  { path: "/EULA", component: <EULA /> },
  { path: "/Services_all", component: <Services_all /> },
  { path: "/IntegrationPage", component: <IntegrationPage /> },
  { path: "/CareerPage", component: <CareerPage /> },
  { path: "/AboutUs", component: <AboutUs /> },
  { path: "/BlogsPage", component: <BlogsPage /> },
  { path: "/Blog_1", component: <Blog_1 /> },
  { path: "/Blog_2", component: <Blog_2 /> },
  { path: "/Blog_3", component: <Blog_3 /> },
  { path: "/Blog_4", component: <Blog_4 /> },
  { path: "/Blog_5", component: <Blog_5 /> },
  //CaseStudies
  { path: "/CaseStudiesPage", component: <CaseStudiesPage /> },
  { path: "/Case_1", component: <Case_1 /> },
  { path: "/Case_2", component: <Case_2 /> },
  { path: "/Case_3", component: <Case_3 /> },
  { path: "/Case_4", component: <Case_4 /> },
  { path: "/Case_5", component: <Case_5 /> },
  { path: "/ERPLogin", component: <Login /> },
];

export { authProtectedRoutes, publicRoutes };
