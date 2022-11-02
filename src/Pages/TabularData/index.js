import React from "react";
import { Table } from "../../Component/TabularData/Table";
import { TabularDataProvider } from "./TabularDataProvider";

const TabularPage = () => {
  return (
    <TabularDataProvider>
      <Table />
    </TabularDataProvider>
  );
};

export default TabularPage;
