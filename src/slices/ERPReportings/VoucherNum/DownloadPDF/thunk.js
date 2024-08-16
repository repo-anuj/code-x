import { ERP_GET_VOUCHERNUM_PDF } from '../../../../helpers/fakebackend_helper';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const GET_VOUCHERNUM_PDF  = createAsyncThunk('voucherNumPDF/post',async (voucherNumID, thunkAPI)  => {
    try {

      if (voucherNumID === undefined)
        return;

      const paramData = { "voucherNumID": voucherNumID }
      const response = ERP_GET_VOUCHERNUM_PDF(paramData);
      const data = await response;

      const blob = new Blob([data], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'downloaded-file.pdf';
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      return "";
    } catch (error) {
      return  thunkAPI.rejectWithValue(error.response.data);
    }
  }
);