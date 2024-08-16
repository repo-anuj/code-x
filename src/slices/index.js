import { combineReducers } from "redux";

import CompanySelectionReducer from "./API5/CompanySelection/reducer"
import AccountReducer from "./ERPLogin/auth/register/reducer";
// Front
import LayoutReducer from "./layouts/reducer";
// Authentication

 import ERPLoginReducer from "./ERPLogin/auth/login/reducer";

//LicenseValidation
import LicenseReducer from "./API5/LicenseValidation/reducer";

import ProfileReducer from "./ERPLogin/auth/profile/reducer";
//LicenseValidation
import ERPDashboardReducer from "./Dashboards/ERPDashboard/reducer";

import VoucherNumReducer from "./ERPReportings/VoucherNum/reducer";
import VoucherNumCameraCaptureReducer from "./ERPReportings/VoucherNum/CameraCaptures/reducer";
import VoucherNumPDFReducer from "./ERPReportings/VoucherNum/DownloadPDF/reducer";

const rootReducer = combineReducers({
    Layout: LayoutReducer,
    ERPLogin: ERPLoginReducer,
    Account: AccountReducer,
    ERPDashboard: ERPDashboardReducer,
    Profile: ProfileReducer,
    CompanySelection: CompanySelectionReducer,
    LicenseValidation : LicenseReducer,
    VoucherNum:VoucherNumReducer,
    VoucherNumCameraCapture:VoucherNumCameraCaptureReducer,
    VoucherNumPDF:VoucherNumPDFReducer,
});

export default rootReducer;

//const store = createStore(rootReducer, applyMiddleware(thunk));

//export default store;