import React from "react";
import "../styles/form/formAddTask.css";

const FormAddTask = () => {
  const linkToServer = "";
  return (
    <form action={linkToServer} method="post">
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" />
        </li>
        <li>
          <label htmlFor="mail">E-mail:</label>
          <input type="email" id="mail" name="user_mail" />
        </li>
        <li>
          <label htmlFor="msg">Message:</label>
          <textarea id="msg" name="user_message" cols="30" rows="10"></textarea>
        </li>
        <li className="button">
          <button type="submit">Send your task</button>
        </li>
      </ul>
    </form>
  );
};

export default FormAddTask;
