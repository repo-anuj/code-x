import { createSlice} from '@reduxjs/toolkit';
import { GET_VOUCHERNUM_IMAGES } from './thunk';


const CameraCaptures = createSlice({
  name: 'CameraCaptures',
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
      .addCase(GET_VOUCHERNUM_IMAGES.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(GET_VOUCHERNUM_IMAGES.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(GET_VOUCHERNUM_IMAGES.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = CameraCaptures.actions;
export default CameraCaptures.reducer;