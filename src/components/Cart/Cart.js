import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { formatoPrecio } from '../../helpers/formatoPrecio'
import { BsTrash } from 'react-icons/bs'
import './Cart.scss'
import AOS from "aos";
import "aos/dist/aos.css";

const Cart = () => {

	const { cart, subTotal, vaciarCarrito, eliminarLibro, actualizarCantidad, obtenerCantidadPorId } = useContext(CartContext)

	const totalProducto = (precioU, cantidad) => {
		return precioU * cantidad
	}

	

	useEffect(() => {
		AOS.init({
			duration: 1500,
			once: true
		});
	}, []);


	if (cart.length === 0) {
		return (
			<div className='main carritoContainer bg-transparent'>
				<div className='container mx-auto flex flex-col justify-center items-center bg-white h-96 rounded-md gap-4'>
					<span className='text-4xl text-center container__span '>NO HAY LIBROS EN EL CARRITO</span>
					<Link className=' p-2 bg-verde text-white rounded-md' to="/libros">Vea nuestros libros</Link>
				</div>
			</div>

		)
	}

	
	return (
		<div data-aos="zoom-in-right">
			<div className='main bg-white rounded-lg'>
				<div className='main__container'>
					<h1 className='main__title'>CARRITO DE COMPRAS</h1>
				</div>
				<div data-aos="fade-right">
					{
						cart.map((lib) => (
							<div key={lib.id} className='mx-4 my-0 p-2 rounded-md carritoContainer'>
								<div className='max-w-5xl bg-white rounded-md mx-auto shadow shadow-verde'>
									<div className='flex p-2 justify-center'>
										<div className='w-full sm:w-1/3 md:w-1/3 p-1 flex items-center'>
											<img
												src={lib.imagen}
												alt='Libro'
												className='w-full md:h-auto h-30 object-cover rounded-md'
											/>
										</div>
										<div className='w-full flex flex-col justify-center text-center p-5'>
											<h2 className='text-lg font-semibold'><strong>{lib.titulo}</strong></h2>
											<p className='my-2'>Stock en tienda: {obtenerCantidadPorId(lib.id)}</p>
											<p className='my-2'>Valor Unitario: {formatoPrecio(lib.precio)}</p>
											<p className='my-2'>cantidad: {lib.cantidad}</p>
											<p className='my-2'>
												Precio total: {formatoPrecio(totalProducto(lib.precio, lib.cantidad))}
											</p>
										</div>
										<div className='flex justify-center items-center p-5'>
											<Link onClick={() => eliminarLibro(lib.id)}>
												<BsTrash
													size={28}
													className="text-orange-400 hover:text-red-700"
												/>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
		</div>

			<div className='flex flex-col gap-5 p-5 justify-center items-center'>
				<span className='text-white text-xl'>
					<strong>Subtotal de la Compra: </strong> {formatoPrecio(subTotal())}
				</span>
				<div className='flex gap-2'>
					<Link className='p-2 rounded-md bg-white w-40 text-center border border-white hover:bg-green-500 hover:text-white' to={"/checkout"}>
						Finalizar compra
					</Link>
					<Link className='p-2 rounded-md bg-white w-40 text-center border border-white hover:bg-red-600 hover:text-white' onClick={vaciarCarrito}>
						Vaciar Carrito
					</Link>
				</div>
			</div>
		</div>

	)
};

export default Cart;