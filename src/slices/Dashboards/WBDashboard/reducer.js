import { createSlice } from "@reduxjs/toolkit";
import { GET_VOUCHERNUM_IMAGES } from "./thunk";

const CameraCaptures = createSlice({
  name: "CameraCaptures",
  initialState: {
    data: null,
    AVGTimedata: null,
    ItemSummarydata: null,
    AccountSummarydata: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.data = null;
      state.AVGTimedata = null;
      state.ItemSummarydata = null;
      state.AccountSummarydata = null;
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
        state.AVGTimedata = GetAverageTime(action.payload);
        state.ItemSummarydata = GetItemSummaryData(action.payload);
        state.AccountSummarydata = GetAccountSummaryData(action.payload);
      })
      .addCase(GET_VOUCHERNUM_IMAGES.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

function GetAverageTime(data) {
  return "a";
}

function GetAccountSummaryData(data) {
  return "a";
}

function GetItemSummaryData(data) {
  return "a";
}

export const { resetState } = CameraCaptures.actions;
export default CameraCaptures.reducer;

//Write a Function Pass Parameter in that function of raw data and release output as per tile

//GetAverageTime : Return Average Time as Per Voucher Type C1: VoucherType C2: AverageTime

//GetItemSummary : Return Summary Of Data as Per Voucher Type and Item C0: VoucherType C1: Item C2: PendingVehicles C3: PROCESSED VEHICLES C4 : GrossWeightProcessed C5 : TareWeightProcessed C6 : NetWeightProcessed C7 : ChallanWeightProcessed C8 : ShortageWeightProcessed

//GetPartySummary : Return Summary Of Data as Per Voucher Type and Accounts C0: VoucherType C1: Item C2: PendingVehicles C3: PROCESSED VEHICLES C4 : GrossWeightProcessed C5 : TareWeightProcessed C6 : NetWeightProcessed C7 : ChallanWeightProcessed C8 : ShortageWeightProcessed

//GetTransporterWiseShotage : Return Summary Of Data as Per Voucher Type and Accounts C0: VoucherType C1: Item C2: PendingVehicles C3: PROCESSED VEHICLES C4 : GrossWeightProcessed C5 : TareWeightProcessed C6 : NetWeightProcessed C7 : ChallanWeightProcessed C8 : ShortageWeightProcessed
