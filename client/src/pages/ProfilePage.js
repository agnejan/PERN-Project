import { React, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';



function ProfilePage() {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <Box style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
      <Stack direction="row" spacing={2}  style={{display: "flex", justifyContent:"center"}}>
      <Avatar
        alt="profile picture"
        src={user?.profile_picture}
        sx={{ width: 80, height: 80 }}

      />
      </Stack>
      <h3>Hey {user?.name}! </h3>
      <div>Your email: {user?.email}</div>
    </Box>
  );
}

export default ProfilePage;
