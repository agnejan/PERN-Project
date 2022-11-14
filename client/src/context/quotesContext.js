import { createContext, useState, useEffect } from "react";

export const QuotesContext = createContext();

export const QuotesContextProvider = (props) => {
  const [quotes, setQuotes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setQuotes(data);
    };
    !quotes && fetchData();
  }, []); // this means that useeffect runs only the first time on intial render, but not on subsequent renders

  return (
    <QuotesContext.Provider value={{ quotes }}>
      {props.children}
    </QuotesContext.Provider>
  );
};
