import { ERP_GET_WBDashboard } from "../../../helpers/fakebackend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET_WBDashboard = createAsyncThunk(
  "inventoryRegister/post",
  async (
    { FromDate, ToDate, VoucherTypeID, existingData, filterArray },
    thunkAPI
  ) => {
    try {
      if (existingData && filterArray) {
        return applyFilters(existingData, filterArray);
      }

      if (
        VoucherTypeID === undefined ||
        FromDate === undefined ||
        ToDate === undefined
      )
        return;

      const bodyData = {
        VoucherTypeID: VoucherTypeID,
        FromDate: FromDate,
        ToDate: ToDate,
      };
      const response = ERP_GET_WBDashboard(bodyData);
      const data = await response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const applyFilters = (existingData, filterArray) => {
  let result = existingData;

  // if (filterArray.voucherType.length > 0) {
  //   result = result.filter((item) =>
  //     filters.voucherType.includes(item.voucherType)
  //   );
  // }
  if (filterArray.Accounts.length > 0) {
    result = result.filter((item) => filterArray.Accounts.includes(item.party));
  }
  // if (filterArray.item.length > 0) {
  //   result = result.filter((item) =>
  //     item.items.some((i) => filters.item.includes(i.item))
  //   );
  // }

  return result;
};
