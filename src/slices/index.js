import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";
// Authentication

import ERPLoginReducer from "./ERPLogin/auth/login/reducer";

import ProfileReducer from "./ERPLogin/auth/profile/reducer";

//Dashboard
import ERPDashboardReducer from "./Dashboards/ERPDashboard/reducer";

//Users
import UserNotificationsReducer from "./UserNotifications/reducer";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  ERPLogin: ERPLoginReducer,
  ERPDashboard: ERPDashboardReducer,
  Profile: ProfileReducer,
  UserNotifications: UserNotificationsReducer,
});

export default rootReducer;

//const store = createStore(rootReducer, applyMiddleware(thunk));

//export default store;
