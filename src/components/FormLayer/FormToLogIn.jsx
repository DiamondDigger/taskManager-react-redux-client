import React from "react";
import "../styles/form/formAddTask.css";

const FormAddTask = () => {
  const linkToServer = "";
  return (
    <form action={linkToServer} method="post">
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" required />
        </li>
        <li>
          <label htmlFor="mail">Password:</label>
          <input type="email" id="mail" name="user_password" required />
        </li>
        <li className="button">
          <button type="submit">Log In</button>
          <button type="button">Cancel</button>
        </li>
      </ul>
    </form>
  );
};

export default FormAddTask;
