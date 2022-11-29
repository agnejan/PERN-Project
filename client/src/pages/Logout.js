import { React, useContext } from "react";
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    try {
      logout();
      navigate("/home");
      handleOpen();
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
        onClick={handleLogout}
      >
        Log Out
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
          
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You have logged out!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Logout;
