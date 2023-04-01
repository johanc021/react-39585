
import './ItemListContainer.scss'
import { useState, useEffect } from 'react'
import { buscarLibrosFB, capturarDatosFB } from '../../helpers/capturarDatos'
import ItemList from '../ItemList/ItemList';
import Spinner from "../Spinner/Spinner";
import { useParams } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


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


	useEffect(() => {
		setLoading(true);
		capturarDatosFB()
			.then(res => (genero && buscarLibrosFB(genero)) || res)
			.then(setLibros)
			.catch(console.log)
			.finally(() => setLoading(false));
	}, [genero]);
	
	useEffect(() => {
		AOS.init({
			duration: 1500,
			once: true
		});
	}, []);


	return (

		<>
			{
				loading
					? <Spinner />
					: libros.length === 0
						? <div>no hay productos</div>
						: (
							<>
								<div data-aos="fade-up">
									<ItemList
										librosPaginados={librosPaginados}
										libros={libros}
										siguientePagina={siguientePagina}
										setSiguientePagina={setSiguientePagina}
										totalPaginas={totalPaginas}
									/>
								</div>
								
							</>
						)
			}
		</>
	);
};

export default ItemListContainer;
