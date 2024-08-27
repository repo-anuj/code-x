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
  { path: "*", component: <Navigate to="/LicenseValidation" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/ERPLogout", component: <Logout /> },
  { path: "/ERPLogin", component: <Login /> },
  { path: "/LicenseValidation", component: <LicenseValidation /> },
  { path: "/CompanySelection", component: <CompanySelection /> },
];

export { authProtectedRoutes, publicRoutes };
