import { createSlice } from "@reduxjs/toolkit";
import { GET_USER_NOTIFICATIONS, POST_USER_NOTIFICATIONS } from "./thunk";

const UserNotifications = createSlice({
  name: "UserNotifications",
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
      .addCase(GET_USER_NOTIFICATIONS.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(GET_USER_NOTIFICATIONS.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(GET_USER_NOTIFICATIONS.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(POST_USER_NOTIFICATIONS.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(POST_USER_NOTIFICATIONS.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(POST_USER_NOTIFICATIONS.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = UserNotifications.actions;
export default UserNotifications.reducer;
