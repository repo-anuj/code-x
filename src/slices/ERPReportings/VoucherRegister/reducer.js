import { createSlice } from "@reduxjs/toolkit";
import { GET_VoucherRegisterData } from "./thunk";

const VoucherRegister = createSlice({
  name: "VoucherRegister",
  initialState: {
    data: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GET_VoucherRegisterData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(GET_VoucherRegisterData.fulfilled, (state, action) => {
        state.success = true;
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(GET_VoucherRegisterData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = VoucherRegister.actions;
export default VoucherRegister.reducer;
