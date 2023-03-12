import React from 'react';
import { Button } from 'flowbite-react';
import RatingBook from '../RatingBook/RatingBook';

import './itemDetail.scss'
import { Link, useNavigate } from 'react-router-dom';

const ItemDetail = ({ item }) => {

	const navegacion = useNavigate()

	const handleComprar = () => {
		console.log("comprando")
	}

	const handleAtras = () => {
		navegacion(-1)
	}

	return (
		
		<div className="space-y-6 gap-4 bg-white detalleLibro">
			<div className='detalleLibro__containerTitulo'>
				<h1>Detalles del libro: {item.titulo} </h1>
			</div>

			<div className='flex m-5 detalleLibro__containerLibro'>
				<img className="max-w-xs h-auto rounded-md shadow-md m-5 detalleLibro__img" src={item.imagen} alt={item.titulo} />
				<div className="flex flex-col gap-5 mt-3 p-7">
					<div className="product-card">
						<RatingBook rating={Number(item.calificacion)} />
					</div>
					{/* <h1>Calificación: <RatingBook rating={item.calificacion}/></h1> */}
					<h4 className='gap-3 text-2xl font-bold'>Sinopsis:</h4>
					<p className="text-xl font-bold leading-relaxed text-gray-500 dark:text-gray-400">
						{item.descripcion}
					</p>

					<div className='flex'>
						<Link className='mx-auto link-btn' onClick={handleComprar}>Comprar</Link>
						<Link className='mx-auto link-btn' onClick={handleAtras}>Atrás</Link>
					</div>

				</div>
			</div>

		</div>
	)
};

export default ItemDetail;
