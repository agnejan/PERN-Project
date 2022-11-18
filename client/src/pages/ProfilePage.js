import { React, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useContext(AuthContext);

  return <div>ProfilePage</div>;
}

export default ProfilePage;
