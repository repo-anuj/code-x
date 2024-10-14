import React from "react";
import { Navigate } from "react-router-dom";

//API5
import LicenseValidation from "../pages/API5/LicenseValidation/LicenseValidation";
import CompanySelection from "../pages/API5/CompanySelection/CompanySelection";

//ERP Login
import Login from "../pages/ERPLogin/Authentication/Login";
import Logout from "../pages/ERPLogin/Authentication/Logout";

//Dashboards
import ERPDashboard from "../pages/Dashboards/ERPDashboard";
import WBDashboard from "../pages/Dashboards/WBDashboard";
import GateDashboard from "../pages/Dashboards/GateDashboard";
//VoucherNum
import VoucherNum from "../pages/ERPReportings/VoucherNum";
import VoucherRegister from "../pages/ERPReportings/VoucherRegister";

//Master
import MasterRegister from "../pages/ERPMasters/MasterRegister";
import MasterForm from "../pages/ERPMasters/MasterTemplateForIndividualPages";

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

//Transactions
import WBEntry from "../pages/ERPTransactions/WeighBridge";

//Integration
import IntegrationPage from "../pages/Landing/OnePage/IntegrationPage";

//career
import CareerPage from "../pages/Landing/OnePage/CareerPage";

const authProtectedRoutes = [
  {
    path: "/",
    exact: true,
    component: <Navigate to="/LicenseValidation" />,
  },
  { path: "/Dashboards-ERP", component: <ERPDashboard /> },
  { path: "/Dashboards-WB", component: <WBDashboard /> },
  { path: "/Dashboards-SG", component: <GateDashboard /> },
  { path: "/VoucherNum", component: <VoucherNum /> },
  { path: "/VoucherRegister", component: <VoucherRegister /> },
  { path: "/MasterRegister", component: <MasterRegister /> },
  { path: "/MasterForm", component: <MasterForm /> },
  { path: "/Transactions-WB", component: <WBEntry /> },
  { path: "*", component: <Navigate to="/LicenseValidation" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/ERPLogout", component: <Logout /> },
  { path: "/landing", component: <OnePage /> },
  { path: "/UtkarshAgrawal", component: <UtkarshAgrawal /> },
  { path: "/ManasAgrawal", component: <ManasAgrawal /> },
  { path: "/ManishAgrawal", component: <ManishAgrawal /> },
  { path: "/HarshitGoel", component: <HarshitGoel /> },
  { path: "/AditiAgrawal", component: <AditiAgrawal /> },
  { path: "/ArpitAgrawal", component: <ArpitAgrawal /> },
  { path: "/IleshThakkar", component: <IleshThakkar /> },
  { path: "/RitikaAgrawal", component: <RitikaAgrawal /> },
  { path: "/Services_all", component: <Services_all /> },
  { path: "/IntegrationPage", component: <IntegrationPage /> },
  { path: "/CareerPage", component: <CareerPage /> },
  { path: "/ERPLogin", component: <Login /> },
  { path: "/LicenseValidation", component: <LicenseValidation /> },
  { path: "/CompanySelection", component: <CompanySelection /> },
];

export { authProtectedRoutes, publicRoutes };
