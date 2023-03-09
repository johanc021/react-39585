import React from 'react';

function StarRating({ rating }) {
	const getStarIcon = (index) => {
		if (rating >= index) {
			// Estrella llena
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 fill-current text-yellow-500"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M10 14.335l-4.345 2.422 1.045-4.854L2.69 7.832l4.854-.42L10 3.34l2.457 4.072 4.854.42-3.01 2.071 1.045 4.854L10 14.335z"
						clipRule="evenodd"
					/>
				</svg>
			);
		} else if (rating >= index - 0.5) {
			// Mitad de estrella
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 fill-current text-yellow-500"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M17.16 8.2a.85.85 0 00-.69-.57l-4.72-.68L10.91 2.3a.85.85 0 00-1.54 0L7.31 6.95l-4.72.68a.85.85 0 00-.5 1.45l3.41 3.32-.8 4.7a.85.85 0 001.23.9L10 15.06l4.23 2.23a.85.85 0 001.23-.9l-.8-4.7 3.41-3.32a.85.85 0 00.14-.88z"
						clipRule="evenodd"
					/>
				</svg>
			);
		} else {
			// Estrella vacía
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 fill-current text-gray-400"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M10 14.335l-4.345 2.422 1.045-4.854L2.69 7.832l4.854-.42L10 3.34l2.457 4.072 4.854.42-3.01 2.071 1.045 4.854L10 14.335z"
						clipRule="evenodd"
					/>
				</svg>
			);
		}
	};

	return (
		<div className="flex items-center">
			{[1, 2, 3, 4, 5].map((i) => (
				<div key={i}>{getStarIcon(i)}</div>
			))}
		</div>
	);
}

export default StarRating;
