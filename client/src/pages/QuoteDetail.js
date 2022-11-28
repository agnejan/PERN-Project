import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function QuoteDetail() {
  let { id } = useParams();
  const [quote, setQuote] = useState();

  useEffect(() => {
    const fetchData = async () => {
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

  return <div>{quote.quote}</div>;
}

export default QuoteDetail;
