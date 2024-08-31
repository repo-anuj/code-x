import { ERP_GET_MASTER_REGISTER } from "../../../helpers/fakebackend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET_MASTER_REGISTER = createAsyncThunk(
  "MasterRegister/post",
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

const applyFilters = (existingData, filterArray) => {
  let result = existingData;

  if (filterArray.Accounts.length > 0) {
    result = result.filter((item) => filterArray.Accounts.includes(item.party));
  }

  return result;
};
