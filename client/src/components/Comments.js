import { React, useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import Divider from '@mui/material/Divider';
import { display } from "@mui/system";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { hover } from "@testing-library/user-event/dist/hover";
import Box from '@mui/material/Box';


function Comments(props) {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState("");
  const [show, setShow] = useState(false);

  //COMMENT DIVIDER HOVER
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };


  const readComments = async () => {
    try {
      const response = await fetch(`http://localhost:5000/quotes/${props.id}/comment`);
      const data = await response.json();
      setComments(data);
      console.log((data));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    readComments();
  }, []);

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const sendComment = async (e) => {
    e.preventDefault()
   try {
     const body = {comment}
    const response = await fetch(`http://localhost:5000/quotes/${props.id}/comment`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    readComments();
    setComment("")
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <Box
      style={{
        // maxWidth: "500px",
        // height: "70%",
        marginBottom: "10vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Divider className="commentsDivider" style={{marginBottom: "3vh", marginTop:"3vw", cursor:isHover ? "pointer":"auto"}} onClick={() => setShow(prev => !prev)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {show ? "Hide Comments" : "Show Comments"}
      </Divider>
      {show &&
      <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "2vw",
          // position: "fixed",
          // bottom: "20px",
          width: "100%",
          marginBottom: "10px"
        }}
      >
        <form style={{display:"flex", justifyContent:"center"}}>
        <TextField
          id="outlined-basic"
          label="Post a comment..."
          variant="standard"
          value={comment}
          onChange={handleComment}
          style={{ width: "70%", backgroundColor: "white", padding: "0"}}
         inputProps={{minLength: 2}}
         required
        />
        <Button
          type="submit"
          variant="text"
          size="large"
          onClick={sendComment}
          endIcon={<SendIcon />}
        ></Button>
        </form>
      </div>
        {comments &&
        comments.map((item) => (
          <div
            style={{
              // boxShadow: "0 2px 15px rgba(0, 0, 0, 0.3)",
              borderRadius: "20px",
              // margin: "10px",
              padding: " 5px",
            }}
            className="comments"
          >
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <div style={{marginTop: "5px"}}>
              <p style={{ margin: "0", marginLeft: "5px", fontSize: "13px"}}>
                <span style={{ fontWeight: "bold" }}>{item.name}</span> wrote:{" "}
              </p>
              <p
                style={{
                  fontSize: "10px",
                  margin: "0",
                  color: "grey",
                  marginLeft: "10px",
                }}
              >
                {new Date(item.timestamp).toDateString('DE',{})}
              </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "5px",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  margin: "0",
                  flexWrap: "wrap",
                  display: "flex",
                  marginRight: "10px",
                }}
              >
                {item.comment}
              </p>
            </div>
          </div>
        ))}
        </div>}
      </Box>
  );
}

export default Comments;