import { ERP_GET_VOUCHERNUM } from '../../../helpers/fakebackend_helper';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const GET_VoucherNum  = createAsyncThunk('voucherNum/post',async (voucherNumID, thunkAPI)  => {
    try {

      if (voucherNumID === undefined)
        return;

      const paramData = { "voucherNumID": voucherNumID }
      const response = ERP_GET_VOUCHERNUM(paramData);
      const data = await response;
      return data;
    } catch (error) {
      return  thunkAPI.rejectWithValue(error.response.data);
    }
  }
);