import { React, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return <div>Hey </div>;
}

export default ProfilePage;
