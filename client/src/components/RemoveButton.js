import React, {useContext, useState} from "react";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import components from "../styling/components.css";
import { QuotesContext } from "../context/QuotesContext";
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

export default function BasicButtons(props) {
  const { deleteUserQuote} = useContext(QuotesContext);
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  const handleDelete = () => {
    deleteUserQuote(props.id) /// here means that the function is only fired when the click happens and not always
    handleClose();
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
    <LightTooltip title="remove" placement="top" >
      <ClearIcon
        className="DeleteButton"
        variant="text"
        color="action"
        onClick={handleOpen} // insteadof writing () => {deleteUserQuote(props.id)}
      />
    </LightTooltip>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to permanently delete this quote?
          </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: 20 }}
              onClick={handleDelete}
            >
              Yes, delete!
            </Button>
        </Box>
      </Modal>
    </div>
  );
}
