import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export function useFavorites() {
    const [favorites, setFavorites] = useState([]);

    console.log(favorites)
    function toggleFavorite(id) {
        if (favorites.includes(id)) {
            setFavorites(favorites.filter(favId => favId !== id));
        } else {
            setFavorites([...favorites, id]);
        }
    }

    return { favorites, toggleFavorite };
}

export function FavoritesProvider({ children }) {
    const favorites = useFavorites();
    return <FavoritesContext.Provider 
                value={
                    favorites
                }>
                    {children}
            </FavoritesContext.Provider>;
}

export default FavoritesContext;
