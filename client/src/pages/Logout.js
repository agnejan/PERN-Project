import { React, useContext, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Logout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    try {
      logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: 20 }}
        onClick={handleOpen}
      >
        Log Out
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to log out?
          </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: 20 }}
              onClick={handleLogout}
            >
              Log out
            </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Logout;
