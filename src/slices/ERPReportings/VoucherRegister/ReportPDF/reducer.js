import { createSlice } from "@reduxjs/toolkit";
import { POST_REPORT_PDF } from "./thunk";

const ReportPDF = createSlice({
  name: "ReportPDF",
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
      .addCase(POST_REPORT_PDF.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(POST_REPORT_PDF.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(POST_REPORT_PDF.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = ReportPDF.actions;
export default ReportPDF.reducer;
