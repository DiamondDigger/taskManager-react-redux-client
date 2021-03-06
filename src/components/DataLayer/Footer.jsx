import React from "react";
import testData from "../../testDate.json";

const Footer = () => {
  const { total_task_count } = testData;
  const footerHeader = "Total tasks";
  return (
    <tr>
      <th scope="row" colSpan="2">
        {footerHeader.toUpperCase()}
      </th>
      <td colSpan="2">{total_task_count}</td>
    </tr>
  );
};

export default Footer;
