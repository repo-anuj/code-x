import { ERP_POST_INTEGRATIONDATA } from "../../../helpers/fakebackend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const POST_WEIGHBRIDGE_DATA = createAsyncThunk(
  "WEIGHBRIDGE/post",
  async ({ dataIP, sendData }, thunkAPI) => {
    try {
      if (dataIP === undefined) return;

      const paramData = {
        integrationIP: dataIP,
        textToSend: sendData,
        taskType: 0,
      };
      const response = ERP_POST_INTEGRATIONDATA(paramData);
      const data = await response;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const POST_CAMERA_DATA = createAsyncThunk(
  "CameraData/post",
  async ({ dataIP, sendData }, thunkAPI) => {
    try {
      if (dataIP === undefined) return;

      const paramData = {
        integrationIP: dataIP,
        textToSend: sendData,
        taskType: 1,
      };
      const response = ERP_POST_INTEGRATIONDATA(paramData);
      const data = await response;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const POST_INTEGRATIONLIST_DATA = createAsyncThunk(
  "INTEGRATIONLIST/post",
  async ({ dataIP, sendData }, thunkAPI) => {
    try {
      if (dataIP === undefined) return;

      const paramData = {
        integrationIP: dataIP,
        textToSend: sendData,
        taskType: 0,
      };
      const response = ERP_POST_INTEGRATIONDATA(paramData);
      const data = await response;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
