import React from 'react';

const Incrementador = () => {
	return (
		<div>
			<label for="Quantity" className="sr-only"> Quantity </label>

			<div className="flex items-center rounded border border-gray-200">
				<button
				type="button"
				className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
				>
				&minus;
				</button>

				<span>
				<input
					type="number"
					id="Quantity"
					value="1"
					className="h-10 w-16 border-y-0 border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
				/>
				</span>

				<button
				type="button"
				className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75"
				>
				&plus;
				</button>
			</div>
		</div>
	);
};

export default Incrementador;
