import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

const FavoriteContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites((favorite) => [...favorites, item]);
    console.log(item);
  };

  const removeFromFavorites = (index) => {
    setFavorites(favorites.filter((_, i) => i !== index));
  };

  return (
    <setFavorites.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {props.children}
    </setFavorites.Provider>
  );
};

export default FavoriteContextProvider;
