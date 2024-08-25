import { ERP_POST_REPORT_PDF } from "../../../../helpers/fakebackend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const POST_REPORT_PDF = createAsyncThunk(
  "reportPDF/post",
  async (data, thunkAPI) => {
    try {
      if (data === undefined) return;

      const response = ERP_POST_REPORT_PDF(data);
      const data = await response;

      const blob = new Blob([data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "downloaded-report.pdf";
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      return "";
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
