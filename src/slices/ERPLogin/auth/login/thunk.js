import { ERP_POST_Login } from '../../../../helpers/fakebackend_helper';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const POST_Login  = createAsyncThunk('login/post',async (user, thunkAPI)  => {
    try {
      const response = ERP_POST_Login({Username: user.email,password: user.password,CompanyCode: user.company});
      const data = await response;
      localStorage.setItem("authUser2", JSON.stringify(data));
      console.log(localStorage.getItem("authUser2"));

      localStorage.setItem("email2", user.email);
      localStorage.setItem("password2", user.password);
      return data;
    } catch (error) {
      return  thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const logoutUser = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("authUser2");
          //dispatch(logoutUserSuccess(true));
    
  } catch (error) {
    //dispatch(error);
  }
};