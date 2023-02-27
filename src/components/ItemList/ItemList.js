import BookCard from '../BookCard/BookCard';
import { TextInput } from 'flowbite-react';
import './ItemList.scss'

import React from 'react';

const ItemList = ({librosPaginados}) => {
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

				/>
			</div>

			<section className='section__libros gap-3'>

				{
					librosPaginados.map(libro => (
						<BookCard
							key={libro.id}
							{...libro}
						/>
					))
				}

			</section>
			
		</main>
	);
};

export default ItemList;
