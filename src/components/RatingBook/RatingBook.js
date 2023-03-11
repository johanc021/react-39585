import { Rating } from 'flowbite-react';
import React from 'react';

const RatingBook = ({rating}) => {

	const filledStars = Math.floor(Number(rating) );
	const hasHalfStar = rating - filledStars >= 0.5;
	const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

	return (
		<div className="flex items-center">
			<Rating size="lg">

				{[...Array(filledStars)].map((_, index) => (
					<Rating.Star key={`filled-${index}`} />
				))}
				{hasHalfStar && <Rating.Star half key="half-filled" />}
				{[...Array(emptyStars)].map((_, index) => (
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
