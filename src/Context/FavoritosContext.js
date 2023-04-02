import React, { useState, createContext } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const notifyAgregar = () => toast.success('Libro agregado a ❤️', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notifyEliminar = () => toast.error('Libro eliminado de favoritos 💔', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <FavoritosContext.Provider
            value={{ 
                favoritos, 
                agregarFavorito, 
                quitarFavorito, 
                esFavorito,
                notifyAgregar,
                notifyEliminar
            }}
        >
            {children}
        </FavoritosContext.Provider>
    );
};