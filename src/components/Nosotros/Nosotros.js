import React from 'react';

const Nosotros = () => {
	return (

			<div class="flex flex-col items-center justify-center py-10 bg-gray-100">
				<img class="w-24 h-24 rounded-full mb-4" src="https://via.placeholder.com/168x168" alt="Profile Picture"/>
				<h2 class="text-lg font-bold mb-2">John Doe</h2>
				<p class="text-gray-700 text-center px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, sapien vel feugiat vestibulum, massa nibh ultricies nibh, vel porttitor risus purus non magna.</p>
				<div class="flex justify-center mt-4">
					<a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" href="#">LinkedIn</a>
					<a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" href="#">Twitter</a>
				</div>
			</div>
			)
}

export default Nosotros;
