import { createSlice} from '@reduxjs/toolkit';
import { GET_VOUCHERNUM_PDF } from './thunk';


const DownloadPDF = createSlice({
  name: 'DownloadPDF',
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
      .addCase(GET_VOUCHERNUM_PDF.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(GET_VOUCHERNUM_PDF.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(GET_VOUCHERNUM_PDF.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState } = DownloadPDF.actions;
export default DownloadPDF.reducer;