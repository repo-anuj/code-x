import { APIClient } from "./api_helper";
import * as url from "./url_helper";

const api = new APIClient();

//License Validation
export const API5_POST_LicenseValidation = data => api.create(url.POST_License_Validation , data);

//Compay Selection
export const API5_GET_CompanySelection = data => api.api5_getdata(url.GET_COMPANYSELECTIONDATA,data);

//ERP Login
export const ERP_POST_Login = data => api.create(url.POST_ERP_Login, data);

// ERP Main Dashboard
export const ERP_GET_MainDashboard = data => api.get(url.GET_ERP_MAIN_DASHBOARD, data);