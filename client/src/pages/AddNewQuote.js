import React from "react";
import { useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { FormGroup, FormControl } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import bookgif from '../images/book.gif'

const ariaLabel = { "aria-label": "description" };

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
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
};

function AddNewQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  const [picture, setPicture] = useState("");
  const [genre, setGenre] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    // debugger; - can put this in to stop the app running and go step by step
    e.preventDefault();
    try {
      const body = { quote, author, publication, picture, genre };
      const response = await fetch("http://localhost:5000/newquote", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      handleOpen();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <h2>Add New Quote:</h2>
      <Box
        // component="form"
        sx={{
          "& > :not(style)": { m: 3, rowGap: "1" },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Quote..."
            inputProps={ariaLabel}
            fullWidth
            multiline
            rows={5}
            onChange={(e) => setQuote(e.target.value)}
            required
          />

          <Input
            id="author"
            placeholder="Author"
            variant="outlined"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            fullWidth
          />
          <Input
            id="publication"
            placeholder="Publication"
            variant="outlined"
            value={publication}
            onChange={(e) => setPublication(e.target.value)}
            required
            fullWidth
          />
          <Input
            id="genre"
            placeholder="Genre"
            variant="outlined"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            fullWidth
          />
          <Input
            id="picture"
            placeholder="Link to picture"
            variant="outlined"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ marginTop: 20 }}
          >
            ADD
          </Button>
        </form>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2"> */}
            <img src={bookgif} style={{ height:"40px", marginRight: "5px"}}></img>
          {/* </Typography> */}
          <Typography id="modal-modal-description" >
            You have added a quote:{" "}
            <span style={{ fontStyle: "italic" }}>"{quote}"</span> by {author}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default AddNewQuote;
