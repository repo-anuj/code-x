// Function to aggregate the data based on the given datetime range
export const GetSummary = (data, fromdatetime, todatetime) => {
  const fromDateStart = new Date(fromdatetime).setHours(0, 0, 0, 0); // Start of the day for fromdatetime
  const toDateEnd = new Date(todatetime).setHours(23, 59, 59, 999); // End of the day for todatetime

  const summary = {};

  data.forEach((entry) => {
    const { voucherType, gateWeightRecord } = entry;
    const { checkDataInTime, checkDataOutTime } = gateWeightRecord;

    const InTime = new Date(checkDataInTime);
    const OutTime = new Date(checkDataOutTime);

    if (!summary[voucherType]) {
      summary[voucherType] = {
        voucherType,
        argumentValue: [
          { argument: "Opening", value: 0 },
          { argument: "Total-In", value: 0 },
          { argument: "Processed", value: 0 },
          { argument: "Pending", value: 0 },
        ],
      };
    }

    // Opening
    if (InTime < fromDateStart) {
      summary[voucherType].argumentValue[0].value += 1;
    }

    // Inward
    if (InTime >= fromDateStart && InTime <= toDateEnd) {
      summary[voucherType].argumentValue[1].value += 1;
    }

    // Processed
    if (
      (OutTime <= toDateEnd) &
      (new Date(OutTime).toDateString() !== "Mon Jan 01 0001")
    ) {
      summary[voucherType].argumentValue[2].value += 1;
    }

    // Pending
    if (
      OutTime > toDateEnd ||
      new Date(OutTime).toDateString() === "Mon Jan 01 0001"
    ) {
      summary[voucherType].argumentValue[3].value += 1;
    }
  });

  // Convert the summary object to the required array format
  return Object.values(summary);
};

// Function to get entries for Filter
export const GetListForFilters = (data) => {
  const voucherTypes = new Set();
  const parties = new Set();
  const items = new Set();
  const stockGroups = new Set();
  const brokers = new Set();

  data.forEach((item) => {
    voucherTypes.add(item.voucherType);
    parties.add(item.account);
    brokers.add(item.broker);
    item.item.forEach((i) => {
      items.add(i.item);
    });

    item.item.forEach((i) => {
      stockGroups.add(i.stockGroup);
    });
  });

  return [
    {
      filterType: "Voucher Types",
      filterValues: Array.from(voucherTypes),
    },
    {
      filterType: "Accounts",
      filterValues: Array.from(parties),
    },
    {
      filterType: "Stock Group",
      filterValues: Array.from(stockGroups),
    },
    {
      filterType: "Items",
      filterValues: Array.from(items),
    },
    ,
    {
      filterType: "Brokers",
      filterValues: Array.from(brokers),
    },
  ];
};

// Function to get the latest 10 entries based on weighment in and out times
export const GetLatestActivity = (data) => {
  const activities = [];

  // Push both inTime and outTime as separate records
  data.forEach((entry) => {
    const { checkDataInTime, checkDataOutTime } = entry.gateWeightRecord;

    // Include the entry for inTime if it exists
    if (checkDataInTime !== "0001-01-01T00:00:00") {
      activities.push({
        entryTime: new Date(checkDataInTime),
        particulars: "First Entry",
        account: entry.account,
        item: entry.item[0].particulars,
        voucherType: entry.voucherType,
        voucherNumber: entry.voucherNumber,
        voucherNumID: entry.voucherNumID,
        weight:
          (entry.gateWeightRecord.grossWeight > 0) &
          (entry.gateWeightRecord.tareWeight === 0)
            ? entry.gateWeightRecord.grossWeight
            : entry.gateWeightRecord.tareWeight + " " + entry.item[0].unit,
      });
    }

    // Include the entry for outTime if it exists
    if (checkDataOutTime !== "0001-01-01T00:00:00") {
      activities.push({
        entryTime: new Date(checkDataOutTime),
        particulars: "Final Entry",
        account: entry.account,
        item: entry.item[0].particulars,
        voucherType: entry.voucherType,
        voucherNumber: entry.voucherNumber,
        voucherNumID: entry.voucherNumID,
        weight:
          (entry.gateWeightRecord.grossWeight > 0) &
          (entry.gateWeightRecord.tareWeight === 0)
            ? entry.gateWeightRecord.grossWeight
            : entry.gateWeightRecord.tareWeight + " " + entry.item[0].unit,
      });
    }
  });

  // Sort the activities by the latest time
  activities.sort((a, b) => b.entryTime - a.entryTime);

  // Return the top 10 latest activities
  return activities.slice(0, 10);
};

// Function to get Summary For Item
export const GetItemSummaryData = function getItemSummaryData(data) {
  const summary = {};

  data.forEach((entry) => {
    const { voucherType, gateWeightRecord, item } = entry;

    if (!summary[voucherType]) {
      summary[voucherType] = [];
    }

    item.forEach((itementry) => {
      const existingItem = summary[voucherType].find(
        (i) => i.item === itementry.particulars
      );

      let processed = 0;
      let pending = 0;

      if (gateWeightRecord.grossWeight > 0 && gateWeightRecord.tareWeight > 0) {
        processed += 1;
      } else {
        pending += 1;
      }

      if (existingItem) {
        existingItem.pending += pending;
        existingItem.processed += processed;
        existingItem.grossWeight += gateWeightRecord.grossWeight;
        existingItem.tareWeight += gateWeightRecord.tareWeight;
        existingItem.netWeight += gateWeightRecord.netWeight;
        existingItem.challanWeight += gateWeightRecord.challanWeight;
        existingItem.shortageWeight += gateWeightRecord.shortageWeight;
      } else {
        summary[voucherType].push({
          item: itementry.particulars,
          pending: pending,
          processed: processed,
          grossWeight: gateWeightRecord.grossWeight,
          tareWeight: gateWeightRecord.tareWeight,
          netWeight: gateWeightRecord.netWeight,
          challanWeight: gateWeightRecord.challanWeight,
          shortageWeight: gateWeightRecord.shortageWeight,
        });
      }
    });
  });

  // Transform the summary object into the desired array format
  return Object.keys(summary).map((voucherType) => ({
    voucherType,
    data: summary[voucherType],
  }));
};

// Function to get Summary For Account
export const GetAccountSummaryData = function getAccountSummaryData(data) {
  const summary = {};

  data.forEach((entry) => {
    const { voucherType, gateWeightRecord, item } = entry;

    if (!summary[voucherType]) {
      summary[voucherType] = [];
    }

    item.forEach((item) => {
      const existingItem = summary[voucherType].find(
        (i) => i.item === entry.account
      );

      let processed = 0;
      let pending = 0;

      if (gateWeightRecord.grossWeight > 0 && gateWeightRecord.tareWeight > 0) {
        processed += 1;
      } else {
        pending += 1;
      }

      if (existingItem) {
        existingItem.pending += pending;
        existingItem.processed += processed;
        existingItem.grossWeight += gateWeightRecord.grossWeight;
        existingItem.tareWeight += gateWeightRecord.tareWeight;
        existingItem.netWeight += gateWeightRecord.netWeight;
        existingItem.challanWeight += gateWeightRecord.challanWeight;
        existingItem.shortageWeight += gateWeightRecord.shortageWeight;
      } else {
        summary[voucherType].push({
          item: entry.account,
          pending: pending,
          processed: processed,
          grossWeight: gateWeightRecord.grossWeight,
          tareWeight: gateWeightRecord.tareWeight,
          netWeight: gateWeightRecord.netWeight,
          challanWeight: gateWeightRecord.challanWeight,
          shortageWeight: gateWeightRecord.shortageWeight,
        });
      }
    });
  });

  // Transform the summary object into the desired array format
  return Object.keys(summary).map((voucherType) => ({
    voucherType,
    data: summary[voucherType],
  }));
};

//Function to GetAverageProcessTime
export const GetAverageTime = function avgTimeForEachVoucherType(data) {
  // Helper function to convert ISO date string to Date object
  function parseISODateString(dateString) {
    return new Date(dateString);
  }

  // Helper function to calculate difference in minutes between two Date objects
  function getTimeDifferenceInMinutes(startDate, endDate) {
    const diffInMs = endDate - startDate;
    return diffInMs / 1000 / 60; // convert milliseconds to minutes
  }

  // Helper function to convert minutes to time string
  function convertMinutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    return `${hours} Hours ${mins} Mins`;
  }

  const processData = [];

  data.map((item) => {
    const voucherType = item.voucherType; // Assuming items are in the format [{ "itemName": value }]
    const gateWeightRecord = item.gateWeightRecord;

    if (
      (gateWeightRecord.grossWeight > 0) &
      (gateWeightRecord.tareWeight > 0)
    ) {
      const inTime = parseISODateString(gateWeightRecord.checkDataInTime);
      const outTime = parseISODateString(gateWeightRecord.checkDataOutTime);
      const timeInMinutes = Math.abs(
        getTimeDifferenceInMinutes(inTime, outTime)
      );

      const dataExists = processData.find((item) => item[0] === voucherType);

      if (dataExists != undefined) {
        dataExists[1] = dataExists[1] + timeInMinutes;
        dataExists[2] = dataExists[2] + 1;
      } else {
        processData.push([voucherType, timeInMinutes, 1]);
      }
    }
  });

  const convertMinToHours = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);

    return hours + "h " + minutes + "m";
  };

  const convertData = (data) => {
    return {
      voucherType: "Average Process Time",
      argumentValue: data.map(([voucherType, minutes, vechile]) => ({
        argument: voucherType,
        value: convertMinToHours(minutes / vechile),
      })),
    };
  };

  const result = convertData(processData);

  return result;
};
