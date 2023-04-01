import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritosContext } from '../../Context/FavoritosContext';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

const FavoriteContainer = () => {

	const { favoritos } = useContext(FavoritosContext)

	if (favoritos.length === 0) {
		return (
			<div className='main bg-transparent'>
				<div className='container mx-auto flex flex-col justify-center items-center bg-white h-96 rounded-md gap-4'>
					<span className='text-4xl text-center container__span '>NO HAY FAVORITOS!...</span>
					<Link className=' p-2 bg-verde text-white rounded-md' to="/libros">Vea nuestros libros</Link>
				</div>
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
