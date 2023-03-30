import React, { useState, createContext } from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
    
    const [favoritos, setFavoritos] = useState([]);

    /* console.log(favoritos) */
    const agregarFavorito = (libro) => {
        if (!esFavorito(libro.id)) {
            setFavoritos([...favoritos, libro]);
        }
    };

    const quitarFavorito = (libro) => {
        setFavoritos(favoritos.filter((fav) => fav.id !== libro.id));
    };

    const esFavorito = (id) => {
        return favoritos.some((libro) => libro.id === id);
    };

    return (
        <FavoritosContext.Provider
            value={{ 
                favoritos, 
                agregarFavorito, 
                quitarFavorito, 
                esFavorito
            }}
        >
            {children}
        </FavoritosContext.Provider>
    );
};