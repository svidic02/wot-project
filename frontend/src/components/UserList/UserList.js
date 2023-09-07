import React from "react";
import classes from "./userList.module.css";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

export default function UserList({ users }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    
  };
  const handleEdit = (user) => {
    navigate(`/user/${user._id}`);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.headerWrapper}>
        <Title title="Users" className={classes.title} />
        {/* <Button
          className={classes.button}
          text="Add users"
          onClick={() => handleAdd()}
        /> */}
      </div>
      <div className={classes.itemsWrapper}>
        {users.map((user) => (
          <div key={user._id} className={classes.items}>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Address : {user.address}</p>
            <p>Type of user : {user.isAdmin ? "Admin" : "Regular User"}</p>
            <p>Date joined : {extractDate(user.createdAt)}</p>
            <Button text="Edit" onClick={() => handleEdit(user)} />
            <Button
              backgroundColor="red"
              color='black'
              text="Delete"
              onClick={() => handleDelete(user)}
            />
          </div>
        ))}
      </div>
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
