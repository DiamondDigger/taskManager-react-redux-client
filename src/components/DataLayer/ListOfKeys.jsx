import React from "react";

const ListOfKeys = () => {
  const headerKeys = ["username", "email", "text", "status"];

  return (
    <tr>
      {headerKeys.map((keyName) => (
        <th key={keyName}>{keyName.toUpperCase()}</th>
      ))}
    </tr>
  );
};

export default ListOfKeys;
