import React, { useEffect, useState } from 'react';
import { formatoPrecio } from '../../helpers/formatoPrecio'
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import './CartItem.scss';

const CartItem = ({id, imagen, titulo, stock, precio, cantidad, totalProducto, eliminarLibro, actualizarCantidad}) => {

	const cantidadInicial = 1

	const [cantidadMod, setCantidadMod] = useState(cantidad);

	const incrementar = () => {
		cantidadInicial < stock && setCantidadMod(cantidadMod + 1);
	};

	const decrementar = () => {
		cantidad > 1 && setCantidadMod(cantidadMod - 1);
	};

	useEffect(() => {
		actualizarCantidad(id, cantidadMod)
	}, [cantidadMod])

	return (
		<div key={id} className='mx-4 my-0 p-2 rounded-md carritoContainer'>
			<div className='max-w-5xl bg-white rounded-md mx-auto shadow shadow-verde'>
				<div className='flex p-2 justify-center'>
					<div className='w-full sm:w-1/3 md:w-1/3 p-1 flex items-center'>
						<img
							src={imagen}
							alt='Libro'
							className='w-full md:h-auto h-30 object-cover rounded-md'
						/>
					</div>
					<div className='w-full flex flex-col justify-center items-center text-center p-5'>
						<h2 className='text-lg font-semibold'><strong>{titulo}</strong></h2>
						<p className='my-2'>Stock en tienda: {stock}</p>
						<p className='my-2'>Valor Unitario: {formatoPrecio(precio)}</p>
						<div className="flex items-center">
							<label className="mr-4">Cantidad:</label>
							<button
								className={`px-2 py-1 rounded-l-lg ${cantidadMod === 1 ? "bg-red-600" : "bg-gray-200"} text-gray-700 focus:outline-none focus:bg-gray-300`}
								onClick={decrementar}
								disabled={cantidadMod === 1}
							>
								-
							</button>

							<span className="px-4 py-1 bg-gray-200 text-gray-700">{cantidadMod}</span>

							<button
								className={`px-2 py-1 rounded-r-lg ${cantidadMod === stock ? "bg-red-600" : "bg-gray-200"} text-gray-700  focus:outline-none focus:bg-gray-300`}

								onClick={incrementar}
								disabled={cantidadMod === stock}
							>
								+
							</button>

						</div>
						<p className='my-2'>
							Total de libro seleccionado: {formatoPrecio(totalProducto(precio, cantidad))}
						</p>

					</div>
					<div className='flex justify-center items-center p-5'>
						<Link onClick={() => eliminarLibro(id)}>
							<BsTrash
								size={28}
								className="text-orange-400 hover:text-red-700"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>								
	)
};

export default CartItem;
