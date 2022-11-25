import { React, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <div>
      <h3>Hey {user?.name}! </h3>
      <div>Your email: {user?.email}</div>
      <div>Upload a picture</div>
    </div>
  );
}

export default ProfilePage;
