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
      console.log(favorites, 'favorites');
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const addToFavorites = async (id) => {
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

const removeFromFavorites = async (id) => {
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

const favoritesAction = (quote) => {
  if (
    favorites.filter((item)=> item.id === quote.id).length > 0
    ) {
    const removeQuote = favorites.filter(
      (item) => item.id !== quote.id
      );
    removeFromFavorites(quote.id);
    // setFavorites(removeQuote);// this shouldnot be needed? right?
} else {
    addToFavorites(quote.id);
    // setFavorites([...favorites, quote])// this shouldnot be needed? right?
  }
};

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, favoritesAction }}>
      {props.children}
    </FavoritesContext.Provider>
  );
};