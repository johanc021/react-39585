import React, { useContext, useState } from 'react';
import RatingBook from '../RatingBook/RatingBook';
import { ImUndo2 } from "react-icons/im";
import './itemDetail.scss'
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ item }) => {

	const { agregarCarrito, estaEnCarrito } = useContext(CartContext)

	const [cantidad, setCantidad] = useState(1);

	const navegacion = useNavigate()

	const handleAtras = () => {
		navegacion(-1)
	}

	const handleAgregar = () => {
		const libroEnCarrito = {
			...item,
			cantidad
		}
		agregarCarrito(libroEnCarrito)
	}

	return (
		<div className="space-y-2  bg-white detalleLibro">

				<div className=' detalleLibro__containerTitulo flex justify-between'>
					<h1>Detalles del libro: {item.titulo} </h1>

				<Link className='btnAtras' onClick={handleAtras}><ImUndo2 size={26}/></Link>
				</div>

				<div className='media m-5 sm:block md:flex detalleLibro__containerLibro items-center '>
					<img className="max-w-xs mx-auto h-auto rounded-md shadow-md m-5 detalleLibro__img" src={item.imagen} alt={item.titulo} />
					<div className="flex  flex-col gap-5 mt-3 p-7">
						<div className="product-card">
							<RatingBook rating={Number(item.calificacion)} />
						</div>

						<h4 className='gap-3 text-2xl font-bold'>Sinopsis:</h4>
						<p className="text-xl font-bold leading-relaxed text-gray-500 dark:text-gray-400">
							{item.descripcion}
						</p>
						{
							item.stock <= 5 
							? <span><strong>Hay solo {item.stock} {item.stock === 1 ? 'unidad' : 'unidades'}</strong></span>
								: <span>Stock en tienda: {item.stock}</span>
						}

						{
							estaEnCarrito(item.id)
							
							? 	<div>
									<Link to="/cart" className='link-btn text-center mx-auto'>ir al Carrito</Link>
								</div>
								
							: <ItemCount
								stockMax={item.stock}
								cantidad={cantidad}
								setCantidad={setCantidad}
								handleAgregar={handleAgregar}
								id={item.id}
							/>
						}					

					</div>
				</div>

			</div>
		
	)
};

export default ItemDetail;

