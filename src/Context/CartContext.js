import { createContext, useState } from "react";

export const CartContext = createContext()

//cargue en localstorage - inicie en estado carrito
/* const init = JSON.parse(localStorage.getItem('carrito')) || [] */

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

    const subTotal = () => {
        return cart.reduce((total, libro) => total + libro.precio * libro.cantidad, 0);
    }

    const iva = () => {
        return subTotal() * 0.19
    }

    const envio = () => {
        return 15000
    }

    const totalCompra = () => {
        return subTotal() + iva() + envio()
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const eliminarLibro = (id) => {
        setCart(cart.filter((libro) => libro.id !== id))
    }

    const actualizarCantidad = (id, cantidad) => {
        setCart(
            cart.map((libro) => {
                if (libro.id === id) {
                    return { ...libro, cantidad };
                }
                return libro;
            })
        );
    };

    //useEffect para actualizar local storage de acuerdo a eliminaciones o cargues en el carrito
    /* useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart]) */


    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            agregarCarrito,
            estaEnCarrito,
            cantidadLibros,
            iva,
            subTotal,
            totalCompra,
            envio,
            vaciarCarrito,
            eliminarLibro,
            actualizarCantidad
        }}>
            {children}
        </CartContext.Provider>
    )
}