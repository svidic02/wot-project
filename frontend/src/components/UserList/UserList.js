import React from "react";
import classes from "./userList.module.css";
import Title from "../Title/Title";

export default function UserList({ users }) {
  return (
    <div className={classes.userList}>
      <Title title="Users" />
      {users.map((user) => (
        <div key={user._id} className={classes.userItem}>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>Address : {user.address}</p>
          <p>Type of user : {user.isAdmin ? "Admin" : "Regular User"}</p>
          <p>Date joined : {extractDate(user.createdAt)}</p>
        </div>
      ))}
    </div>
  );
}

function extractDate(timestamp) {
  const dateObj = new Date(timestamp);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1; // Months are 0-indexed, so add 1
  const day = dateObj.getDate();

  return `${day}/${month}/${year}`;
}
