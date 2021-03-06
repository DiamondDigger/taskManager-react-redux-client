import React from "react";
import testData from "../../testDate.json";
import "../styles/pagination/pagination.css";

const Pagination = () => {
  const { pages } = testData;

  return (
    <div className="pagination">
      <nav>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
