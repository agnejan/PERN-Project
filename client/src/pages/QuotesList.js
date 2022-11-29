import { useContext, useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { QuotesContext } from "../context/QuotesContext";
import List from "../components/List";
// import { FilterContext } from "../context/filterContext";

function QuotesList() {
  const { quotes } = useContext(QuotesContext); // here destructuring instead of writing const products = useContext(ProductsContext.products)

  return (
    <div>
      <List data={quotes} />
    </div>
  );
}

export default QuotesList;
