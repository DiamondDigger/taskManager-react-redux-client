import React from "react";
//components
import ListOfKeys from "./ListOfKeys";
import MainSection from "./MainSection";
import Footer from "./Footer";
//styles
import "../styles/table/tableOfData.css";

const TableOfData = () => {
  return (
    <table>
      <caption>List of available tasks</caption>
      <thead>
        <ListOfKeys />
      </thead>
      <tbody>
        <MainSection />
      </tbody>
      <tfoot>
        <Footer />
      </tfoot>
    </table>
  );
};

export default TableOfData;
