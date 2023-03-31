import { Link } from 'react-router-dom';


const ItemCount = ({ stockMax, cantidad, setCantidad, handleAgregar, estaEnCarrito, id }) => {


	/* si llega id */
	/* console.log(estaEnCarrito(id)) */

	const incrementar = (  ) => {
		cantidad < stockMax && setCantidad(cantidad + 1);
	};

	const decrementar = () => {
		cantidad > 1 && setCantidad(cantidad - 1);
	};

	return (
		<>
			<div className="flex items-center">
				<label className="mr-4">Cantidad:</label>
				<button
					className={`px-2 py-1 rounded-l-lg ${cantidad === 1 ? "bg-red-600" : "bg-gray-200"} text-gray-700 focus:outline-none focus:bg-gray-300`}
					onClick={decrementar}
					disabled={cantidad === 1}
				>
					-
				</button>

				<span className="px-4 py-1 bg-gray-200 text-gray-700">{cantidad}</span>

				<button
					className={`px-2 py-1 rounded-r-lg ${cantidad === stockMax ? "bg-red-600" : "bg-gray-200"} text-gray-700  focus:outline-none focus:bg-gray-300`}

					onClick={incrementar}
					disabled={cantidad === stockMax}
				>
					+
				</button>

			</div>

			<div className="flex mt-3">
				<Link className='link-btn' onClick={handleAgregar}>Agregar al Carrito</Link>
			</div>
		</>
	);
};

export default ItemCount;
