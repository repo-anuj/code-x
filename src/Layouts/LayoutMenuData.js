import { click } from "@testing-library/user-event/dist/cjs/convenience/click.js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isRM, setIsRM] = useState(false);
  const [isWB, setIsWB] = useState(false);
  const [isSG, setIsSG] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [isBaseUi, setIsBaseUi] = useState(false);
  const [isAdvanceUi, setIsAdvanceUi] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isTables, setIsTables] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  const [isLanding, setIsLanding] = useState(false);

  //Raw Materials
  const [isTransactions, setIsTransactions] = useState(false);
  const [isMasters, setIsMasters] = useState(false);
  const [isRWDashboard, setIsRWDashboard] = useState(false);
  const [isInventory, setIsInventory] = useState(false);
  const [isAccounting, setIsAccounting] = useState(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);
  const [isLevel3, setIsLevel3] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "RM") {
      setIsRM(false);
    }
    if (iscurrentState !== "WB") {
      setIsWB(false);
    }
    if (iscurrentState !== "SG") {
      setIsSG(false);
    }
    if (iscurrentState !== "Auth") {
      setIsAuth(false);
    }
    if (iscurrentState !== "Pages") {
      setIsPages(false);
    }
    if (iscurrentState !== "BaseUi") {
      setIsBaseUi(false);
    }
    if (iscurrentState !== "AdvanceUi") {
      setIsAdvanceUi(false);
    }
    if (iscurrentState !== "Forms") {
      setIsForms(false);
    }
    if (iscurrentState !== "Tables") {
      setIsTables(false);
    }
    if (iscurrentState !== "Charts") {
      setIsCharts(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Maps") {
      setIsMaps(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (iscurrentState === "Widgets") {
      history("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
    if (iscurrentState !== "Landing") {
      setIsLanding(false);
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isRM,
    isAuth,
    isPages,
    isBaseUi,
    isAdvanceUi,
    isForms,
    isTables,
    isCharts,
    isIcons,
    isMaps,
    isMultiLevel,
  ]);

  const menuItems = [
    {
      id: "FNA",
      label: "Finance And Accounts",
      icon: "ri-calculator-fill",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsMultiLevel(!isMultiLevel);
        setIscurrentState("MuliLevel");
        updateIconSidebar(e);
      },
      stateVariables: isMultiLevel,
      subItems: [
        {
          id: "FNA.Transactions",
          label: "Transactions",
          link: "/#",
          parentId: "multilevel",
        },
        {
          id: "FNA.Masters",
          label: "Masters",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsLevel1(!isLevel1);
          },
          stateVariables: isLevel1,
          childItems: [
            {
              id: "FNA.Masters.Accounting",
              label: "Accounting",
              link: "/#",
              isChildItem: true,
              click: function (e) {
                e.preventDefault();
                setIsLevel2(!isLevel2);
              },
              stateVariables: isLevel2,
              childItems: [
                {
                  id: "FnA.Masters.Accounting.Account-Group",
                  label: "Account Group",
                  link: "/MasterRegister?FormID=FnA.Masters.Accounting.AccountGroup",
                },
                {
                  id: "FnA.Masters.Accounting.Area",
                  label: "Area",
                  link: "/MasterRegister?FormID=FnA.Masters.Accounting.Area",
                },
                {
                  id: "FnA.Masters.Accounting.Account-Ledger",
                  label: "Account Ledger",
                  link: "/MasterRegister?FormID=FnA.Masters.Accounting.AccountLedger",
                },
              ],
            },
            {
              id: "FnA.Masters.Inventory",
              label: "Inventory",
              link: "/#",
              isChildItem: true,
              click: function (e) {
                e.preventDefault();
                setIsLevel3(!isLevel3);
              },
              stateVariables: isLevel3,
              childItems: [
                {
                  id: "FnA.Masters.Inventory.StockGroup",
                  label: "Stock Group",
                  link: "/#",
                },
                {
                  id: "FnA.Masters.Inventory.StockCategory",
                  label: "Stock Category",
                  link: "/#",
                },
                { id: "FnA.Masters.Inventory.Unit", label: "Unit", link: "/#" },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "RM",
      label: "Raw Materials",
      icon: "ri-shopping-cart-fill",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsRM(!isRM);
        setIscurrentState("RM");
        updateIconSidebar(e);
      },
      stateVariables: isRM,
      subItems: [
        {
          id: "RM.Dashboard",
          label: "Dashboard",
          link: "/dashboards-RM",
          parentId: "RM",
        },
        {
          id: "RM.Transactions",
          label: "Transactions",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsTransactions(!isTransactions);
          },
          parentId: "RM",
          stateVariables: isTransactions,
          childItems: [
            {
              id: "RM.Transactions.InwardOrder",
              label: "Inward Order",
              link: "/MastersRegister?formID=RM.Transactions.InwardOrder",
            },
            {
              id: "RM.Transactions.PurchaseOrder",
              label: "Purchase Order",
              link: "/MastersRegister?formID=RM.Transactions.PurchaseOrder",
            },
          ],
        },
        {
          id: "RM.Masters",
          label: "Masters",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsMasters(!isMasters);
          },
          parentId: "RM",
          stateVariables: isMasters,
          childItems: [
            {
              id: "RM.Masters.Inventory",
              label: "Inventory",
              link: "/apps-invoices-create",
              isChildItem: true,
              click: function (e) {
                e.preventDefault();
                setIsInventory(!isInventory);
              },
              parentId: "RM.Masters",
              stateVariables: isInventory,
              childItems: [
                {
                  id: "RM.Masters.Inventory.StockGroup",
                  label: "Stock Group",
                  link: "/MastersRegister?formID=RM.Masters.Inventory.StockGroup",
                },
                {
                  id: "RM.Masters.Inventory.StockItems",
                  label: "Stock Item",
                  link: "/MastersRegister?formID=RM.Masters.Inventory.StockItems",
                },
              ],
            },
            {
              id: "RM.Masters.Accounting",
              label: "Accounting",
              link: "/apps-invoices-create",
              isChildItem: true,
              click: function (e) {
                e.preventDefault();
                setIsAccounting(!isAccounting);
              },
              parentId: "RM.Masters",
              stateVariables: isAccounting,
              childItems: [
                {
                  id: "RM.Masters.Accounting.AccountGroup",
                  label: "Account Group",
                  link: "/MastersRegister?formID=RM.Masters.Accounting.AccountGroup",
                },
                {
                  id: "RM.Masters.Accounting.LedgerAccount",
                  label: "Ledger Account",
                  link: "/MastersRegister?formID=FnA.Masters.Accounting.LedgerAccount",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "WB",
      label: "Weight Bridge",
      icon: "ri-truck-fill",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsWB(!isWB);
        setIscurrentState("WB");
        updateIconSidebar(e);
      },
      stateVariables: isWB,
      subItems: [
        {
          id: "WB.Dashboard",
          label: "Dashboard",
          link: "/Dashboards-WB",
          parentId: "WB",
        },
      ],
    },
    {
      id: "SG",
      label: "Security Gate",
      icon: "ri-npmjs-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsSG(!isSG);
        setIscurrentState("SG");
        updateIconSidebar(e);
      },
      stateVariables: isSG,
      subItems: [
        {
          id: "SG.Dashboard",
          label: "Dashboard",
          link: "/Dashboards-SG",
          parentId: "SG",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
