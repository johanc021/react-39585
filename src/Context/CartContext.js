import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState([]);

    const agregarCarrito = (item) => {
        setCart([...cart, item])
    }

    const estaEnCarrito = (id) => {
        return cart.some(libro => libro.id === id)
    }

    const cantidadLibros = () => {
        return cart.reduce((total, libro) => total + libro.cantidad, 0);
    }

    const totalCompra = () => {
        return cart.reduce((total, libro) => total + libro.precio * libro.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarLibro = (id) => {
        setCart(cart.filter((libro) => libro.id !== id))
    }

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            agregarCarrito,
            estaEnCarrito,
            cantidadLibros,
            totalCompra,
            vaciarCarrito,
            eliminarLibro
        }}>
            {children}
        </CartContext.Provider>
    )
}