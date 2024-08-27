import { createSlice } from "@reduxjs/toolkit";
import { GET_GateDashboard } from "./thunk";
import moment from "moment";
import {
  GetSummary,
  GetListForFilters,
  GetLatestActivity,
  GetItemSummaryData,
  GetAccountSummaryData,
  GetAverageTime,
} from "../GateWB/CommonFunctions.js";

const GateDashboard = createSlice({
  name: "GateDashboard",
  initialState: {
    data: null,
    LatestActivityData: null,
    StatusData: null,
    AvgTimeData: null,
    ItemSummaryData: null,
    AccountSummaryData: null,
    ListForFilterData: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.data = null;
      state.LatestActivityData = null;
      state.StatusData = null;
      state.AvgTimeData = null;
      state.ItemSummaryData = null;
      state.AccountSummaryData = null;
      state.ListForFilterData = null;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GET_GateDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(GET_GateDashboard.fulfilled, (state, action) => {
        state.success = true;
        state.data = action.payload;
        state.LatestActivityData = GetLatestActivity(action.payload);
        state.StatusData = GetSummary(
          action.payload,
          moment(
            new Date(JSON.parse(sessionStorage.getItem("selectedRange"))[0])
          ).format("yyyy-MM-DD"),
          moment(
            new Date(JSON.parse(sessionStorage.getItem("selectedRange"))[1])
          ).format("yyyy-MM-DD")
        );
        state.AvgTimeData = GetAverageTime(action.payload);
        state.ItemSummaryData = GetItemSummaryData(action.payload);
        state.AccountSummaryData = GetAccountSummaryData(action.payload);
        state.ListForFilterData = GetListForFilters(action.payload);
        state.loading = false;
      })
      .addCase(GET_GateDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = GateDashboard.actions;
export default GateDashboard.reducer;
