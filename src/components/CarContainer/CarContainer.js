import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { formatoPrecio } from '../../helpers/formatoPrecio';

const CarContainer = () => {

	const { cart, totalProducto, subTotal, vaciarCarrito, actualizarCantidad, eliminarLibro } = useContext(CartContext)

	if (cart.length === 0) {
		return <div className='main carritoContainer bg-transparent'>
			<div className='container mx-auto flex flex-col justify-center items-center bg-white h-96 rounded-md gap-4'>
				<span className='text-4xl text-center container__span '>NO HAY LIBROS EN EL CARRITO</span>
				<Link className=' p-2 bg-verde text-white rounded-md' to="/libros">Vea nuestros libros</Link>
			</div>
		</div>
	}


	return (
		<>
			{

				<div className='main bg-white rounded-lg'>
					<div className='main__container'>
						<h1 className='main__title'>CARRITO DE COMPRAS</h1>
					</div>

					<div data-aos="zoom-in-right">
						{
							cart.map((lib) => (

								<CartItem
									key={lib.id}
									{...lib}
									totalProducto={totalProducto}
									actualizarCantidad={actualizarCantidad}
									eliminarLibro={eliminarLibro}
								/>
							))
						}
					</div>
					<div className='flex flex-col gap-5 p-5 justify-center items-center'>
						<span className='text-green-500 text-xl'>
							Subtotal de la Compra: <strong> {formatoPrecio(subTotal())}</strong>
						</span>
						<div className='flex gap-2'>
							<Link className='p-2 rounded-md bg-white w-40 text-center text-verde border border-gray-500 hover:bg-green-500 hover:text-white' to={"/checkout"}>
								Finalizar compra
							</Link>
							<Link className='p-2 rounded-md bg-white w-40 text-center text-verde border border-gray-500 hover:bg-red-600 hover:text-white' onClick={vaciarCarrito}>
								Vaciar Carrito
							</Link>
						</div>
					</div>
				</div>
			}
		</>
	)
};

export default CarContainer;
