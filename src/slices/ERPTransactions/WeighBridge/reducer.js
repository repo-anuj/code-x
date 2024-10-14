import { createSlice } from "@reduxjs/toolkit";
import {
  POST_WEIGHBRIDGE_DATA,
  POST_INTEGRATIONLIST_DATA,
  POST_CAMERA_DATA,
} from "./thunk";

const WeighBridgeData = createSlice({
  name: "WeighBridgeData",
  initialState: {
    data: null,
    integrationData: null,
    cameraData: null,
    loading: false,
    camloading: false,
    integrationloading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.camloading = false;
      state.integrationloading = false;
      state.data = null;
      state.integrationData = null;
      state.cameraData = null;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(POST_WEIGHBRIDGE_DATA.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(POST_WEIGHBRIDGE_DATA.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(POST_WEIGHBRIDGE_DATA.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(POST_CAMERA_DATA.pending, (state) => {
        state.camloading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(POST_CAMERA_DATA.fulfilled, (state, action) => {
        state.success = true;
        state.camloading = false;
        state.cameraData = action.payload;
      })
      .addCase(POST_CAMERA_DATA.rejected, (state, action) => {
        state.camloading = false;
        state.error = action.payload;
      })
      .addCase(POST_INTEGRATIONLIST_DATA.pending, (state) => {
        state.integrationloading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(POST_INTEGRATIONLIST_DATA.fulfilled, (state, action) => {
        state.success = true;
        state.integrationloading = false;
        state.integrationData = action.payload;
      })
      .addCase(POST_INTEGRATIONLIST_DATA.rejected, (state, action) => {
        state.integrationloading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = WeighBridgeData.actions;
export default WeighBridgeData.reducer;