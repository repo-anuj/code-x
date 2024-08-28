import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ERP_GET_USER_NOTIFICATIONS,
  ERP_POST_USER_NOTIFICATIONS,
} from "../../helpers/fakebackend_helper";

export const GET_USER_NOTIFICATIONS = createAsyncThunk(
  "userNotifications/get",
  async (notifData, thunkAPI) => {
    try {
      const response = ERP_GET_USER_NOTIFICATIONS();
      const data = await response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const POST_USER_NOTIFICATIONS = createAsyncThunk(
  "userNotifications/post",
  async (notifData, thunkAPI) => {
    try {
      if (notifData === undefined) return;
      const response = ERP_POST_USER_NOTIFICATIONS(notifData);
      const data = await response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
