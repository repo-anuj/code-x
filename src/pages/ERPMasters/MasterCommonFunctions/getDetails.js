export function GetDetails(formID, requestMode) {
  if (formID == "FnA.Masters.Accounting.AccountGroup") {
    if (requestMode === "title") {
      return "Account Group";
    } else if (requestMode === "saveURL") {
      return "/api/odata/MstAcAccountGroup";
    }
  } else if (formID == "FnA.Masters.Accounting.AccountLedger") {
    if (requestMode === "title") {
      return "Account Ledger";
    } else if (requestMode === "saveURL") {
      return "/api/odata/MstAcAccountLedger";
    }
  } else if (formID == "FnA.Masters.Accounting.Area") {
    if (requestMode === "title") {
      return "Area";
    } else if (requestMode === "saveURL") {
      return "/api/odata/MstAcArea";
    }
  }
}
