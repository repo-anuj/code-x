import { APIClient } from "./api_helper";
import * as url from "./url_helper";

const api = new APIClient();

//License Validation
export const API5_POST_LicenseValidation = (data) =>
  api.create(url.POST_License_Validation, data);

//Compay Selection
export const API5_GET_CompanySelection = (data) =>
  api.api5_getdata(url.GET_COMPANYSELECTIONDATA, data);

//ERP Login
export const ERP_POST_Login = (data) => api.create(url.POST_ERP_Login, data);

// ERP Main Dashboard
export const ERP_GET_MainDashboard = (data) =>
  api.get(url.GET_ERP_MAIN_DASHBOARD, data);
export const ERP_GET_WBDashboard = (data) =>
  api.create(url.GET_ERP_WB_DASHBOARD, data);

//ERP VoucherNum
export const ERP_GET_VOUCHERNUM = (data) =>
  api.get(url.GET_VOUCHERNUM_DATA, data);
export const ERP_GET_VOUCHERNUM_IMAGES = (data) =>
  api.get(url.GET_VOUCHERNUM_IMAGES, data);
export const ERP_GET_VOUCHERNUM_PDF = (data) =>
  api.get(url.GET_VOUCHERNUM_PDF, data);
