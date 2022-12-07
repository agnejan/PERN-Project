import React, { useState, useEffect, useContext } from "react";
import List from "../components/List";
import {FavoritesContext} from "../context/FavoritesContext"

function FavoriteQuotes() {

const {favorites} = useContext(FavoritesContext);

  return (
    <div>
      <h2>My Favorites:</h2>
      <List
        data={favorites}
        showDeleteButton={false}
        // onClickDeleteButton={deleteUserQuote}
      />
    </div>
  );
}

export default FavoriteQuotes;