import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Comments from "../components/Comments.js"

function QuoteDetail() {
  let { id } = useParams();

  const [quote, setQuote] = useState();

  useEffect(() => {
    const fetchData = async () => {
      console.log("id", id);
      try {
        const response = await fetch(`http://localhost:5000/quotes/${id}`);
        const data = await response.json();
        setQuote(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    quote && (
      <Box sx={{ margin: 3 }}>
        <img
          style={{
            width: "50%",
            maxHeight: "30%",
            borderRadius: "10px",
            border: "10px",
            boxShadow: "0 2px 15px rgba(0, 0, 0, 0.3)",
          }}
          srcSet={quote.picture}
        />
        <p style={{ fontStyle: "italic" }}>Author: {quote.author}</p>
        <p style={{ fontStyle: "italic" }}>Publication: {quote.publication}</p>
        <p>{quote.quote}</p>
        <p style={{ fontStyle: "italic", fontSize:"13px" }}>Genre: {quote.genre}</p>
        <Comments id={quote.id}/>
      </Box>
    )
  );
}

export default QuoteDetail;
