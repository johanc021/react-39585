import { Rating } from 'flowbite-react';
import React from 'react';

const RatingBook = ({rating}) => {

	const estrellasCompletas = Math.floor(Number(rating) );
	const estrellasMitad = rating - estrellasCompletas >= 0.5;
	const estrellasVacias = 5 - estrellasCompletas - (estrellasMitad ? 1 : 0);

	return (
		<div className="flex items-center">
			<Rating size="lg">

				{[...Array(estrellasCompletas)].map((_, index) => (
					<Rating.Star key={`filled-${index}`} />
				))}
				{estrellasMitad && <Rating.Star half key="half-filled" />}
				{[...Array(estrellasVacias)].map((_, index) => (
					<Rating.Star filled={false} key={`empty-${index}`} />
				))}
				<p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
					Calificado en {rating.toFixed(2)} de 5 estrellas
				</p>
			</Rating>
			
		</div>
	)
	
};

export default RatingBook;
