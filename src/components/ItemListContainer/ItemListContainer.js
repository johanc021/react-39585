
import './ItemListContainer.scss'
import { useState, useEffect } from 'react'
import { buscarLibrosFB, capturarDatosFB } from '../../helpers/capturarDatos'
import ItemList from '../ItemList/ItemList';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

	// estado delibros
	const [libros, setLibros] = useState([]);

	//Estado Spinner
	const [loading, setLoading] = useState(true);

	//Parametros de ruta por genero
	const { genero } = useParams()

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
	/* useEffect(() => {
		setLoading(true);

		capturarDatosFB()
			.then((res) => {
				if (genero) {
					
					buscarLibrosFB(genero)
						.then((res) =>	{
							setLibros(res)
						})
				}  else {
					setLibros(res);
				}
			})
			.catch((err) => {
				console.log(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [genero]) */

	useEffect(() => {
		setLoading(true);
		capturarDatosFB()
			.then(res => (genero && buscarLibrosFB(genero)) || res)
			.then(setLibros)
			.catch(console.log)
			.finally(() => setLoading(false));
	}, [genero]);

	

	return (
		
		<>
			{
				loading
					? <Spinner />
					: libros.length === 0
						? <div>no hay productos</div>
						: (
							<>
								<ItemList librosPaginados={librosPaginados}/>

								<div className='main__paginacion gap-4'>

									<button onClick={() => setSiguientePagina(siguientePagina - 1)} disabled={siguientePagina === 1}><AiOutlineDoubleLeft /></button>

									<span>{siguientePagina + ' de ' + totalPaginas}</span>

									<button onClick={() => setSiguientePagina(siguientePagina + 1)} disabled={siguientePagina === totalPaginas}><AiOutlineDoubleRight /></button>

								</div>
							</>
						) 
			}
		</>
	);
};

export default ItemListContainer;
