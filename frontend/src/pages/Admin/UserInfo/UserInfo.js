import React from "react";
import UserInput from "../../../components/UserInput/UserInput";

export default function UserInfo({ shouldEdit }) {
  return (
    <>
      <UserInput edit={shouldEdit} />
    </>
  );
}
