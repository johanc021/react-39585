import { Link } from 'react-router-dom';
import { formatoPrecio } from '../../helpers/formatoPrecio'
import { MdFavorite } from 'react-icons/md'
import './ItemBookCard.scss'


function ItemBookCard({ id, titulo, imagen, genero, autor, editorial, anio, precio }) {

	return (
		<div className="card">
			<div className="face front">
				<img src={imagen} alt={titulo}></img>
				<h5>{genero.toUpperCase()}</h5>
			</div>
			<div className="face back">
				<button className="favorite-btn absolute top-0 right-0 m-4">
					<MdFavorite />
				</button>
				<h4><strong>{titulo.toUpperCase()}</strong></h4>
				<h4>Genero: <strong>{genero}</strong></h4>
				<h4>Editorial: <strong>{editorial}</strong></h4>
				<h4>Año: <strong>{anio}</strong></h4>
				<h4>Autor: <strong>{autor}</strong></h4>
				<h4>Precio: <strong>{formatoPrecio(precio)}</strong></h4>
				
				
				<div className="link">
					<Link className='link__btn' to={`/detail/${id}`}>Mas detalles</Link>
				</div>
			</div>
		</div>
	);
}

export default ItemBookCard
