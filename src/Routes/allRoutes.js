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

//career
import CareerPage from "../pages/Landing/OnePage/CareerPage";

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
  { path: "/Services_all", component: <Services_all /> },
  { path: "/IntegrationPage", component: <IntegrationPage /> },
  { path: "/CareerPage", component: <CareerPage /> },
  { path: "/ERPLogin", component: <Login /> },
];

export { authProtectedRoutes, publicRoutes };
