import { useState } from "react";
import { Link } from 'react-router-dom';

const ItemCount = ({ stockMax, cantidad, setCantidad, handleAgregar }) => {

	

	const incrementar = (  ) => {
		cantidad < stockMax && setCantidad(cantidad + 1);
	};

	const decrementar = () => {
		cantidad > 1 && setCantidad(cantidad - 1);
	};

	/* const handleAgregar = () => {
		const libroEnCarrito = {
			...item,
			cantidad
		}
		console.log(libroEnCarrito)
	} */

	return (
		<>
			<div className="flex items-center">
				<label className="mr-4">Cantidad:</label>
				<button
					className="px-2 py-1 rounded-l-lg bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
					onClick={decrementar}
				>
					-
				</button>
				<span className="px-4 py-1 bg-gray-200 text-gray-700">{cantidad}</span>
				<button
					className="px-2 py-1 rounded-r-lg bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
					onClick={incrementar}
				>
					+
				</button>
			</div>
			<div className="flex">
				<Link className='link-btn' onClick={handleAgregar}>Agregar al Carrito</Link>

				{/* onClick={handleAgregar} */}
			</div>
		</>
	);
};

export default ItemCount;
