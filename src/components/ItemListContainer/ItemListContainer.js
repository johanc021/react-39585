
import React from 'react';
import './ItemListContainer.scss'
import { useState, useEffect } from 'react'
import { capturarDatos } from '../../helpers/capturarDatos'
import ItemList from '../ItemList/ItemList';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";


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
		
		<>
			<ItemList librosPaginados={librosPaginados}/>

			<div className='main__paginacion gap-4'>
				
				<button onClick={() => setSiguientePagina(siguientePagina - 1)} disabled={siguientePagina === 1}><AiOutlineDoubleLeft/></button>

				<span>{siguientePagina + ' de ' + totalPaginas}</span>

				<button onClick={() => setSiguientePagina(siguientePagina + 1)} disabled={siguientePagina === totalPaginas}><AiOutlineDoubleRight/></button>
				
			</div>
		</>


		

	);
};

export default ItemListContainer;
