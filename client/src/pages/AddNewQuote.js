import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { FormGroup, FormControl } from "@mui/material";

const ariaLabel = { "aria-label": "description" };

function AddNewQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  const [picture, setPicture] = useState("");
  const [genre, setGenre] = useState("");

  //   console.log(quote);

  const handleSubmit = async (e) => {
    // debugger; - can put this in to stop the app running and go step by step
    e.preventDefault();
    try {
      const body = { quote, author, publication, picture, genre };
      const response = await fetch("http://localhost:5000/newquote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      console.log(body);
      console.log(response);
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
          "& > :not(style)": { m: 3, width: "40ch", rowGap: "1" },
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
    </div>
  );
}

export default AddNewQuote;
