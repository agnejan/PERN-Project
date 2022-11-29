import { useContext, useEffect, useState } from "react";
import ListItem from "./ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { QuotesContext } from "../context/QuotesContext";
// import { FilterContext } from "../context/filterContext";

function QuotesList(props) {
  //   const { quotes } = useContext(QuotesContext); // here destructuring instead of writing const products = useContext(ProductsContext.products)

  const { data } = props;
  console.log("data", data);

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: 3, paddingBottom: "40px" }}>
        <Grid container spacing={3}>
          {data?.map((item, index) => {
            return (
              <Grid
                key={item.id}
                item
                xs={12}
                sm={6}
                md={3}
                display="flex"
                justifyContent="center"
              >
                <ListItem item={item} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default QuotesList;
