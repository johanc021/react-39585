import React, { useContext, useState } from 'react';
import RatingBook from '../RatingBook/RatingBook';
import { ImUndo2 } from "react-icons/im";
import './itemDetail.scss'
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail = ({ item }) => {

	const { agregarCarrito, estaEnCarrito } = useContext(CartContext)

	const [cantidad, setCantidad] = useState(1);

	const navegacion = useNavigate()

	const notifySuccess = () => toast.success('Producto agregado al carrito!', {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});

	const handleAtras = () => {
		navegacion(-1)
	}

	const handleAgregar = () => {
		const libroEnCarrito = {
			...item,
			cantidad
		}
		agregarCarrito(libroEnCarrito)
		notifySuccess()
		
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
							item.stock <= 0
								? <span className='text-xl text-red-600'><strong>Sin stock</strong></span>
								: item.stock <= 5
									? <span><strong>Hay {item.stock} {item.stock === 1 ? 'unidad' : 'unidades'}</strong></span>
									: <span>Stock en tienda: {item.stock}</span>

						}

						{
							estaEnCarrito(item.id)
							
							? 	<div>
									<Link to="/cart" className='link-btn text-center mx-auto'>ir al Carrito</Link>
								</div>
								
							:	item.stock === 0
									? <div className='hidden'></div>
									: <ItemCount
										stockMax={item.stock}
										cantidad={cantidad}
										setCantidad={setCantidad}
										handleAgregar={handleAgregar}
										id={item.id}
										estaEnCarrito={estaEnCarrito}
									/>
						}					

					</div>
				</div>

				{/* Toast de producto agregado */}		
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				{/* Same as */}
				<ToastContainer />
			</div>
		
	)
};

export default ItemDetail;

