import { createContext, useState, useEffect } from "react";

export const QuotesContext = createContext();

export const QuotesContextProvider = (props) => {
  const [quotes, setQuotes] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:5000/quotes");
  //     const data = await response.json();
  //     setQuotes(data);
  //   };
  //   !quotes && fetchData();
  // });

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/quotes");
      const data = await response.json();
      setQuotes(data);
    } catch (err) {
      console.errror(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <QuotesContext.Provider value={{ quotes }}>
      {props.children}
    </QuotesContext.Provider>
  );
};
