import React, { useContext, useEffect } from 'react';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FavoritosContext } from '../../Context/FavoritosContext';
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavoriteItem = (favoritos) => {

	const { esFavorito, quitarFavorito, notifyEliminar } = useContext(FavoritosContext)

	useEffect(() => {
		AOS.init({
			duration: 1500,
			once: true
		});
	}, []);

	return	(
		<>
			{/* se llama al usar notifyEliminar o notifyAgregar desde FavoritosContext */}
			<ToastContainer
				position="bottom-center"
				autoClose={700}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<div data-aos="fade-left">

				<div className='main p-2'>
					<div className='flex gap-3 shadow-lg shadow-verde rounded-lg'>
						<img className='p-5 w-96 h-72' src={favoritos.imagen} alt={favoritos.titulo}/>

						<div className='flex flex-col justify-center p-5 text-lg'>
							<h1 className='text-xl'><strong>{favoritos.titulo.toUpperCase()}</strong></h1>
							<h4><strong>Genero:</strong> {favoritos.genero}</h4>
							<h4><strong>Editorial:</strong> {favoritos.editorial}</h4>
							<h4><strong>Año:</strong> {favoritos.anio}</h4>
							<h4><strong>Autor:</strong> {favoritos.autor}</h4>
							<h4><strong>descripcion:</strong> {favoritos.descripcion}</h4>
						</div>

						<div className='flex flex-col items-center justify-center'>
							<button
								className={`favorite-btn text-4xl p-10 hover:text-red-800 ${esFavorito(favoritos.id) ? 'text-red-500' : ''
									}`}
								onClick={() => {
									if (esFavorito(favoritos.id)) {
										quitarFavorito(favoritos);
										notifyEliminar()
									}

								}}
							><MdFavorite />
							</button>
							<Link className='bg-verde p-2 rounded-lg text-white hover:bg-green-400' to={`/detail/${favoritos.id}`}>Comprar</Link>

							
						</div>
					</div>
				</div>
			</div>
		
		</>
	)
};

export default FavoriteItem;
