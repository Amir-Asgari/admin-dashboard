import React from "react";
import {
  GridComponent,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  Edit,
  Inject,
  PdfExport,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  return <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category = 'page' title='Orders' />
  </div>;
};

export default Orders;
