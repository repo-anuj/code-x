import { ERP_POST_REPORT_PDF } from "../../../../helpers/fakebackend_helper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const POST_REPORT_PDF = createAsyncThunk(
  "reportPDF/post",
  async (reportData, thunkAPI) => {
    try {
      if (reportData === undefined) return;

      const response = ERP_POST_REPORT_PDF(reportData);
      const data = await response;

      // Create a blob from the response data
      const blob = new Blob([data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "downloaded-report.pdf";

      // Append link to the DOM, click to download, then remove link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the object URL to free up memory
      window.URL.revokeObjectURL(link.href);

      return "";
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
