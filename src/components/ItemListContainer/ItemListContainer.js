import { TextInput } from 'flowbite-react';
import React from 'react';
import './ItemListContainer.scss'
import { useState, useEffect } from 'react'
import BookCard from '../BookCard/BookCard';
import { capturarDatos } from '../../helpers/capturarDatos'


const ItemListContainer = () => {
	
	// estado delibros
	const [libros, setLibros] = useState([]);
	
	//estado de paginas
	const [siguientePagina, setSiguientePagina] = useState(1);
	
	//numero de libros por pagina
	const resultadoPagina = 10
	
	//Index de paginacion anterior
	const indexResultadoPasado = siguientePagina * resultadoPagina;
	
	//Index de paginacion inicial
	const indexResultadoInicial = indexResultadoPasado - resultadoPagina;
	
	//calculo de total de paginas
	const totalPaginas = Math.ceil(libros.length / resultadoPagina);

	//posicion de libros en la paginacion
	const librosPaginados = libros.slice(indexResultadoInicial, indexResultadoPasado);

	// captura de datos y llenado de datos en el estado Libros
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
	
				<h1 className='main__title'>NUESTRO CATALOGO</h1>

				<TextInput
					size={32}
					fontSize= '18px'
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
							/* titulo={libro.titulo}
							imagen={libro.imagen}
							genero={libro.genero}
							autor={libro.autor} 
							editorial={libro.editorial}
							anio={libro.anio} */
							{...libro}
						/>
					))
				}
				
			</section> 
			<div className='main__paginacion'>
				{/* <Pagination
					currentPage={1}
					totalPages={totalPaginas}
					onPageChange={onPageChange}
				/> */}
				<button onClick={() => setSiguientePagina(siguientePagina - 1)} disabled={siguientePagina === 1}>Anterior</button>
				<button onClick={() => setSiguientePagina(siguientePagina + 1)} disabled={siguientePagina === totalPaginas}>Siguiente</button>
			</div>
		</main>
	);
};

export default ItemListContainer;
