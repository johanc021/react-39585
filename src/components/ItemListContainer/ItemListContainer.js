import { TextInput } from 'flowbite-react';
import React from 'react';
import './ItemListContainer.scss'
import { useState, useEffect } from 'react'
import BookCard from '../BookCard/BookCard';
import data from '../../data/data.json'


const ItemListContainer = ({greeting}) => {
	
	const [libros, setLibros] = useState([]);
	
	const resultadoPagina = 12
	
	const [siguientePagina, setSiguientePagina] = useState(1);

	const indexResultadoPasado = siguientePagina * resultadoPagina;
	const indexResultadoInicial = indexResultadoPasado - resultadoPagina;
	const currentResults = libros.slice(indexResultadoInicial, indexResultadoPasado);

	const capturarDatos = () => {
		return new Promise((resolve, reject) => {
			resolve(data)
		})
	}

	useEffect(() => {
		capturarDatos()
			.then((res) =>{
				setLibros(res)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])



	return (
		<main className='main'>

			<div className='main__container'>
	
				<h1 className='main__title'>{greeting}</h1>

				<TextInput 
					size={32}
					fontSize= '18px'
					id="buscar"
					type="text"
					placeholder="Buscar..."
					required={true}

				/>
			</div>

			<div className='main__libros gap-3'>

				{
					currentResults.map(libro => (
						<BookCard
							key={libro.id}
							titulo={libro.titulo}
							imagen={libro.imagen}
							genero={libro.genero}
							autor={libro.autor}
							editorial={libro.editorial}
							anio={libro.año}

						/>
					
					))
				}
				
				{/* {libros.map( libro => (
					<BookCard 
						key={libro.id} 
						titulo={libro.titulo} 
						imagen={libro.imagen} 
						genero={libro.genero} 
						autor={libro.autor} 
						editorial={libro.editorial} 
						anio={libro.año}
			
			/>
					))
				} */}

			</div> 
			<div>
				<button onClick={() => setSiguientePagina(siguientePagina - 1)}>Anterior</button>
				<button onClick={() => setSiguientePagina(siguientePagina + 1)}>Siguiente</button>

			</div>
		</main>
	);
};

export default ItemListContainer;
