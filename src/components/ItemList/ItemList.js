import React, { useState } from 'react';
import ItemBookCard from '../ItemBookCard/ItemBookCard';
import { TextInput } from 'flowbite-react';
import './ItemList.scss'

const ItemList = ({librosPaginados}) => {

	const [busqueda, setBusqueda] = useState('');

	const librosFiltrados = librosPaginados.filter((libro) => {
		return libro.titulo.toLowerCase().includes(busqueda.toLowerCase());
	});

	return (
		
			<main className='main'>

				<div className='main__container'>

					<h1 className='main__title'>NUESTRO CATALOGO</h1>

					<TextInput
						size={32}
						fontSize='18px'
						id="buscar"
						type="text"
						placeholder="Buscar..."
						required={true}
						value={busqueda}
						onChange={(e) => setBusqueda(e.target.value)}
					/>
				</div>
				
				<section className='section__libros gap-3'>
					
					{
						librosFiltrados.length === 0
							?
								librosPaginados.map(libro => (
									<ItemBookCard
										key={libro.id}
										/* {...libro} */
										item = {libro}
									/>
								))
							: 
								librosFiltrados.map((libro) => (
									<ItemBookCard key={libro.id} item={libro} />
								))
					}

				</section>

			</main>
		
	);
};

export default ItemList;
