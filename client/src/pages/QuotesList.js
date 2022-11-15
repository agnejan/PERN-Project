import { useContext, useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { QuotesContext } from "../context/QuotesContext";
// import { FilterContext } from "../context/filterContext";

function QuotesList() {
  const { quotes } = useContext(QuotesContext); // here destructuring instead of writing const products = useContext(ProductsContext.products)

  // const [quotes, setQuotes] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/quotes");
  //     const data = await response.json();
  //     setQuotes(data);
  //     console.log(data);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div style={{ paddingBottom: "40px" }}>
      <Box sx={{ flexGrow: 1, marginTop: 3 }}>
        <Grid container spacing={3}>
          {quotes.map((quote) => {
            return (
              <Grid
                key={quote.quote_id}
                item
                xs={12}
                sm={6}
                md={3}
                display="flex"
                justifyContent="center"
              >
                <ListItem quote={quote} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default QuotesList;
