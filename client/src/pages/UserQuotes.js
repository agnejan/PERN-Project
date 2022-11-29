import React, { useState, useEffect } from "react";
import List from "../components/List";

function UserQuotes() {
  const [userQuotes, setUserQuotes] = useState();

  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      };
      const response = await fetch("http://localhost:5000/myquotes", options);
      const data = await response.json();
      setUserQuotes(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>My Quotes:</h2>
      <List data={userQuotes} />
    </div>
  );
}

export default UserQuotes;
