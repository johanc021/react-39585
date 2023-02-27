import React from 'react'
import './BookCard.scss'
import { Button } from 'flowbite-react'
/* import Img  from '../../assets/img/card/Cien años de soledad.jpg' */


function BookCard( { titulo, imagen, genero, autor, editorial, anio, precio }) {

	const formatoPrecio = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(precio)

	return (
		<div class="card">
			<div class="face front">
				<img src={imagen} alt={titulo}></img>
				<h3>{genero.toUpperCase()}</h3>
			</div>
			<div class="face back">
				<h4><strong>{titulo.toUpperCase()}</strong></h4>
				<h4>Genero: <strong>{genero}</strong></h4>
				<h4>Editorial: <strong>{editorial}</strong></h4>
				<h4>Año: <strong>{anio}</strong></h4>
				<h4>Autor: <strong>{autor}</strong></h4>
				<h4>Precio: <strong>{formatoPrecio}</strong></h4>
				<div class="link">
					<Button className='link__btn' color="gray">
						Mas detalles
					</Button>
				</div>
			</div>
		</div>
	);
}

export default BookCard
