import { combineReducers } from "redux";

import CompanySelectionReducer from "./API5/CompanySelection/reducer"
import AccountReducer from "./ERPLogin/auth/register/reducer";
// Front
import LayoutReducer from "./layouts/reducer";
// Authentication
import LoginReducer from "./ERPLogin/auth/login/reducer";
//LicenseValidation
import licenseReducer from "./API5/LicenseValidation/reducer";

import ProfileReducer from "./ERPLogin/auth/profile/reducer";
//LicenseValidation
import ERPDashboardReducer from "./Dashboards/ERPDashboard/reducer";


const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Login: LoginReducer,
    Account: AccountReducer,
    ERPDashboard: ERPDashboardReducer,
    Profile: ProfileReducer,
    CompanySelection: CompanySelectionReducer,
    LicenseValidation : licenseReducer,
});

export default rootReducer;