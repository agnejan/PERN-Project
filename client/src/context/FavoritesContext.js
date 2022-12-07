import { createContext, useState, useEffect } from "react";


export const FavoritesContext = createContext();

export const FavoritesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    try {
      const response = await fetch("http://localhost:5000/wishlist", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
        }
      });
      const data = await response.json();
      setFavorites(data);
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const addToWishlist = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/quotes/${id}/addtowishlist`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
        }
      });
      fetchFavorites();
    } catch (error) {
      console.error(error.message);
    }
};

const removeFromWishlist = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/quotes/${id}/removefromwishlist`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
        }
      });
      fetchFavorites();
    } catch (error) {
      console.error(error.message);
    }
};

  return (
    <FavoritesContext.Provider value={{ favorites, addToWishlist, removeFromWishlist }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};