import { createSlice } from "@reduxjs/toolkit";
import { GET_MASTER_REGISTER } from "./thunk";

const MastersRegister = createSlice({
  name: "MastersRegister",
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
      .addCase(GET_MASTER_REGISTER.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(GET_MASTER_REGISTER.fulfilled, (state, action) => {
        state.success = true;
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(GET_MASTER_REGISTER.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = MastersRegister.actions;
export default MastersRegister.reducer;
