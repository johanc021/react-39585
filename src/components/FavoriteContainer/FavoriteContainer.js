import { Button } from 'flowbite-react';
import React, { useContext } from 'react';
import { FavoritosContext } from '../../Context/FavoritosContext';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

const FavoriteContainer = () => {

	const { favoritos } = useContext(FavoritosContext)

	if (favoritos.length === 0) {
		return (
			<div className='main flex flex-col items-center h-45vh' alt={favoritos.titulo}>
				<h1 className='text-6xl'>No hay libros favoritos!!!....</h1>
				<Button className='p-2 bg-verde text-white rounded-lg w-40'>Ver libros</Button>
			</div>
		)
	}

	return (


		<div className='main p-5'>
			<div className='p-5'>
				<h1 className='text-2xl font-bold'>FAVORITOS</h1>
			</div>
			{
				favoritos.map(product => (
					<FavoriteItem
						key={product.id}
						{...product}
						favoritos={favoritos}
						
					/>
				))
			}
		</div>
	)


};

export default FavoriteContainer;
