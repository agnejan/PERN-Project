import { createContext, useState, useEffect } from "react";

export const QuotesContext = createContext();

export const QuotesContextProvider = (props) => {
  const [quotes, setQuotes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/quotes");
      const data = await response.json();
      setQuotes(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUserQuote = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    };
    try {
      const deleteUserQuote = await fetch(
        `http://localhost:5000/myquotes/${id}`,
        options
      );
      console.log(deleteUserQuote);
      fetchData(); // why does this not help to refresh the data after the deletion?
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <QuotesContext.Provider value={{ quotes, deleteUserQuote }}>
      {props.children}
    </QuotesContext.Provider>
  );
};
