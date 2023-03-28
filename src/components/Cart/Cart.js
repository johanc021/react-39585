import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { BsTrash } from 'react-icons/bs'
import './Cart.scss'



const Cart = () => {

	
	const { cart, totalCompra, vaciarCarrito, eliminarLibro } = useContext(CartContext)

	const formatoPrecio = (precio) =>{
		return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(precio)
	} 
		

	const totalProducto = (precioU, cantidad) => {
		return precioU * cantidad
	}

	if (cart.length === 0){
		return (
			<div className=' main carritoContainer bg-transparent'>
				<div className='container mx-auto flex flex-col justify-center items-center bg-white h-96 rounded-md gap-4'>
					<span className='text-7xl text-center container__span '>NO HAY LIBROS EN EL CARRITO</span>
					<Link className=' p-2 bg-verde text-white rounded-md' to="/libros">Vea nuestros libros</Link>
				</div>
			</div>
			
		)
	}


	return (

		<div className='main bg-transparent'>
			<div className='main__container'>
				<h1 className='main__title'>CARRITO DE COMPRAS</h1>
			</div>
			{
				cart.map((lib) => (
					<div key={lib.id} className='mx-4 my-0 p-2 rounded-md carritoContainer'>
						<div className='max-w-2xl bg-white shadow-xl rounded-md mx-auto'>
							<div className='flex p-2 justify-center'>
								<div className='w-full sm:w-1/3 md:w-1/3 p-1 flex items-center'>
									<img
										src={lib.imagen}
										alt='Libro'
										className='w-full md:h-auto h-30 object-cover rounded-md'
									/>
								</div>
								<div className='w-full flex flex-col justify-center text-center p-5'>
									<h2 className='text-lg font-semibold'>{lib.titulo}</h2>
									<p className='my-2'>Stock en tienda: {lib.stock}</p>
									<p className='my-2'>Valor Unitario: {formatoPrecio(lib.precio)}</p>
									<p className='my-2'>Cantidad : {lib.cantidad}</p>
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
			))}

			<div className='flex flex-col gap-5 p-5 justify-center items-center'>
				<span className='text-white text-xl'>
					<strong>Total Compra: </strong> {formatoPrecio(totalCompra())}
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