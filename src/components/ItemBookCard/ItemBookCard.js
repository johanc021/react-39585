import './ItemBookCard.scss'
import { Link } from 'react-router-dom';


function ItemBookCard({ id, titulo, imagen, genero, autor, editorial, anio, precio }) {

	const formatoPrecio = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits:0 }).format(precio)

	return (
		<div className="card">
			<div className="face front">
				<img src={imagen} alt={titulo}></img>
				<h5>{genero.toUpperCase()}</h5>
			</div>
			<div className="face back">
				<h4><strong>{titulo.toUpperCase()}</strong></h4>
				<h4>Genero: <strong>{genero}</strong></h4>
				<h4>Editorial: <strong>{editorial}</strong></h4>
				<h4>Año: <strong>{anio}</strong></h4>
				<h4>Autor: <strong>{autor}</strong></h4>
				<h4>Precio: <strong>{formatoPrecio}</strong></h4>
				
				
				<div className="link">
					<Link className='link__btn' to={`/detail/${id}`}>Mas detalles</Link>
				</div>
			</div>
		</div>
	);
}

export default ItemBookCard
