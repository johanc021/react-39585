import React from 'react'
import './BookCard.scss'
import { Button } from 'flowbite-react'
/* import Img  from '../../assets/img/card/Cien años de soledad.jpg' */


function BookCard( { key, titulo, imagen, genero, autor, editorial, anio }) {

	return (
		<div class="card" key={key}>
			<div class="face front">
				<img src={imagen} alt={titulo}></img>
				<h3>{titulo}</h3>
			</div>
			<div class="face back">
				<h3>{titulo}</h3>
				<h4>Genero: <strong>{genero}</strong></h4>
				<h4>Editorial: <strong>{editorial}</strong></h4>
				<h4>Año: <strong>{anio}</strong></h4>
				<h4>Autor: <strong>{autor}</strong></h4>
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
