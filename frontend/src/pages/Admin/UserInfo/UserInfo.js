import React from "react";
import { useParams } from "react-router-dom";
import UserInput from "../../../components/UserInput/UserInput";

export default function UserInfo({ shouldEdit }) {
  return (
    <>
      {/* <h1>{shouldEdit ? "true" : "false"}</h1> */}
      <UserInput edit={shouldEdit} />
    </>
  );
}
