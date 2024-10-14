import { ERP_GET_MASTER_REGISTER, ERP_PATCH_MASTER_REGISTER, ERP_POST_MASTER_REGISTER } from "../../../helpers/fakebackend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET_MASTER_REGISTER = createAsyncThunk(
  "MasterRegister/get",
  async ({ masterURL, existingData, filterArray }, thunkAPI) => {
    try {
      if (existingData && filterArray) {
        return applyFilters(existingData, filterArray);
      }

      if (masterURL === undefined) return;

      const response = ERP_GET_MASTER_REGISTER(masterURL);
      const data = await response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const POST_MASTER_REGISTER = createAsyncThunk(
  "MasterRegister/post",
  async ({ masterURL, body}, thunkAPI) => { // Added thunkAPI as an argument
    try {
      if (masterURL === undefined || body === undefined) {
        return thunkAPI.rejectWithValue("Missing parameters");
      }
      const response = await ERP_POST_MASTER_REGISTER(masterURL, body);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

export const PATCH_MASTER_REGISTER = createAsyncThunk(
  "MasterRegister/patch",
  async ({ masterURL, body}) => {
    try {
      if (masterURL === undefined) return;
      const response = ERP_PATCH_MASTER_REGISTER(masterURL, body);
      const data = await response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const applyFilters = (existingData, filterArray) => {
  let result = existingData;
  if (filterArray.Accounts.length > 0) {
    result = result.filter((item) => filterArray.Accounts.includes(item.party));
  }
  return result;
};
