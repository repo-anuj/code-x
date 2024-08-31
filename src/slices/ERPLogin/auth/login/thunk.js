import { ERP_POST_Login } from "../../../../helpers/fakebackend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const POST_Login = createAsyncThunk(
  "login/post",
  async (user, thunkAPI) => {
    try {
      const response = ERP_POST_Login({
        Username: user.email,
        password: user.password,
        CompanyCode: user.company,
      });
      const data = await response;
      localStorage.setItem("authUser2", JSON.stringify(data));

      localStorage.setItem("email2", user.email);
      localStorage.setItem("password2", user.password);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logoutLicenseUser = async () => {
  try {
    await removeLocalStorageItemsForLogout();
    window.location.href = "/LicenseValidation";
    // dispatch(logoutUserSuccess(true));
  } catch (error) {
    //dispatch(error);
  }
};

function removeLocalStorageItemsForLogout() {
  return new Promise((resolve) => {
    const keysToRemove = [
      "authUser2",
      "authUser",
      "selectedCompany",
      "authUser2",
      "email",
      "email2",
      "password2",
      "password",
    ];
    keysToRemove.forEach((key) => {
      localStorage.removeItem(key);
    });
    resolve();
  });
}

const removeLocalStorageItemsForLock = () => {
  return new Promise((resolve) => {
    const keysToRemove = ["authUser2", "password2", "email2"];

    keysToRemove.forEach((key) => {
      localStorage.removeItem(key);
    });

    resolve();
  });
};

export const logoutERPUser = async () => {
  try {
    await removeLocalStorageItemsForLock();

    window.location.replace("/ERPLogin");
  } catch (error) {
    console.error("Error during lockScreen operation:", error);
  }
};
