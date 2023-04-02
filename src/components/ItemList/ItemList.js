import React, { useState } from 'react';
import ItemBookCard from '../ItemBookCard/ItemBookCard';
import { TextInput } from 'flowbite-react';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import './ItemList.scss'


const ItemList = ({ librosPaginados, libros, setSiguientePagina, siguientePagina, totalPaginas }) => {

	const [busqueda, setBusqueda] = useState('');

	const librosFiltrados = libros.filter(libro => {
		const { titulo, autor, genero } = libro;
		const busquedaMinuscula = busqueda.toLowerCase();
		return titulo.toLowerCase().includes(busquedaMinuscula) ||
			autor.toLowerCase().includes(busquedaMinuscula) ||
			genero.toLowerCase().includes(busquedaMinuscula);
	});

	const librosAMostrar = busqueda.length > 0 ? librosFiltrados : librosPaginados;

	return (

		<main className='main'>
			<div className='main__container'>
				<h1 className='main__title'>NUESTRO CATALOGO</h1>
				<TextInput
					size={32}
					fontSize='18px'
					id="buscar"
					type="text"
					placeholder="Buscar por título, genero o autor"
					required={true}
					onChange={e => setBusqueda(e.target.value)}
				/>
			</div>

			<section className='section__libros gap-3'>
				{
					librosFiltrados.length === 0
						? <div className='main bg-transparent'>
							<div className='container mx-auto flex flex-col justify-center items-center bg-white h-96 rounded-md gap-4'>
								<span className='text-4xl text-center container__span '>NO HAY COINCIDENCIAS CON SU BUSQUEDA...</span>
							</div>
						</div>
						: librosAMostrar.map(libro => (
							<ItemBookCard
								key={libro.id}
								item={libro}
							/>
						))

				}

			</section>

			<div className={`main__paginacion gap-4 ${busqueda.length > 0 ? 'hidden' : 'visible'}`}>

				<button onClick={() => setSiguientePagina(siguientePagina - 1)} disabled={siguientePagina === 1}><AiOutlineDoubleLeft /></button>

				<span>{siguientePagina + ' de ' + totalPaginas}</span>

				<button onClick={() => setSiguientePagina(siguientePagina + 1)} disabled={siguientePagina === totalPaginas}><AiOutlineDoubleRight /></button>

			</div>
		</main>


	);
};

export default ItemList;