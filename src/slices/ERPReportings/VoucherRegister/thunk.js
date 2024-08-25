import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET_VoucherRegisterData = createAsyncThunk(
  "voucherRegister/post",
  async ({ dashboardData }, thunkAPI) => {
    try {
      const data = dashboardData;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
