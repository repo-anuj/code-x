import { ERP_POST_Login } from '../../../../helpers/fakebackend_helper';
import { loginSuccess, logoutUserSuccess, apiError, reset_login_flag } from './reducer';


export const POST_Login = (user, history) => async (dispatch) => {
  const companyCode = JSON.parse(localStorage.getItem("selectedCompany"))?.companyCode;
  try {
    let response;
    
      response = ERP_POST_Login({Username: user.email,password: user.password,CompanyCode: companyCode,});

    var data = await response;

    if (data) {
      localStorage.setItem("authUser2", JSON.stringify(data));
      
        var finallogin = JSON.stringify(data);
        finallogin = JSON.parse(finallogin)
        data = finallogin.data;
        if (finallogin.status === "success") {
          dispatch(loginSuccess(data));
          history('/Dashboards-ERP')
        } else {
          dispatch(apiError(finallogin));
        }
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("authUser");
          dispatch(logoutUserSuccess(true));
    
  } catch (error) {
    dispatch(apiError(error));
  }
};