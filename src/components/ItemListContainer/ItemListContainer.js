import { TextInput } from 'flowbite-react';
import React from 'react';
import './ItemListContainer.scss'

const ItemListContainer = () => {

	return (
		<main className='main'>
			<div className='main__container'>
	
				<h1 className='main__title'>Lista de libros</h1>


				<TextInput size={31}
					id="buscar"
					type="text"
					placeholder="Buscar..."
					required={true}
				/>
			</div>
		</main>
	);
};

export default ItemListContainer;
