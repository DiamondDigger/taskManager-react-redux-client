import React from "react";
import testData from "../../testDate.json";

const MainSection = () => {
  const { tasks } = testData;
  console.log("tasks", tasks);

  return tasks.map((task, index) => (
    <tr key={task.id}>
      <td>{task.username}</td>
      <td>{task.email}</td>
      <td>{task.text}</td>
      <td>{task.status}</td>
    </tr>
  ));
};

export default MainSection;
