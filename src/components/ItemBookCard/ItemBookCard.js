import { Link } from 'react-router-dom';
import { formatoPrecio } from '../../helpers/formatoPrecio'
import { MdFavorite } from 'react-icons/md'
import './ItemBookCard.scss'
import React, { useContext } from 'react';
import { FavoritosContext } from '../../Context/FavoritosContext';


function ItemBookCard({ item }) {

	const { agregarFavorito, quitarFavorito, esFavorito } = useContext(FavoritosContext);

	return (
		<div className="card">
				
			<div className="face front">
				<img src={item.imagen} alt={item.titulo}></img>
				<h5>{item.genero.toUpperCase()}</h5>
			</div>
			<div className="face back">
				<button
					className={`favorite-btn absolute top-0 right-0 m-4 ${esFavorito(item.id) ? 'text-red-500' : ''
						}`}
					onClick={() => {
						if (esFavorito(item.id)) {
							quitarFavorito(item);
						} else {
							agregarFavorito(item);
						}
					}}
				>
					<MdFavorite />
				</button>
				<h4><strong>{item.titulo.toUpperCase()}</strong></h4>
				<h4>Genero: <strong>{item.genero}</strong></h4>
				<h4>Editorial: <strong>{item.editorial}</strong></h4>
				<h4>Año: <strong>{item.anio}</strong></h4>
				<h4>Autor: <strong>{item.autor}</strong></h4>
				<h4>Precio: <strong>{formatoPrecio(item.precio)}</strong></h4>
				
				
				<div className="link">
					<Link className='link__btn' to={`/detail/${item.id}`}>Mas detalles</Link>
				</div>
			</div>
		</div>
	);
}

export default ItemBookCard
