import './Navegacion.scss';
import { Navbar, Dropdown } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../Logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import UserWidget from '../UserWidget/UserWidget';
import { Link,NavLink } from 'react-router-dom';
import { capturarDatosFB } from '../../helpers/capturarDatos'
import { FavoritosContext } from '../../Context/FavoritosContext';
import { AiFillHeart } from 'react-icons/ai';

const Navegacion = () => {

	const { favoritos } = useContext(FavoritosContext)

	/* console.log(favoritos.length) */


	const [libros, setLibros] = useState([]);

	useEffect(() => {
		capturarDatosFB()
		.then((res)=>{
			setLibros(res)
		})
	},[])


	// generar generos sin repetir
	const generosUnicos = [...new Set(libros.map((lib) => lib.genero))].sort()

	return (
		<div className='header'>

			<Navbar className='navbar'
				fluid={true}
				rounded={true}
			>
				<Link className='navbar__logo' to="/">
					<img
						src={Logo}
						className="mr-3 h-6 sm:h-9"
						alt="Logo"
					/>
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						MAGIC BOOK
					</span>
				</Link>

				<div className="flex items-center md:order-2 gap-3">

					{/* Icono Carrito de compras */}
					<CartWidget/>

					{/* Icono avatar */}
					<UserWidget/>
					
					<Navbar.Toggle />
				</div>
			<Navbar.Collapse>

					<NavLink className='navbar__link' to="/libros">Libros</NavLink>

					<Dropdown className='navbar__link'
							arrowIcon={false}
							inline={true}
							label="Géneros"
						> 
						{generosUnicos.map((item) =>
							
							<Link to={`/libros/${item}`} key={item}>
								<Dropdown.Item>
									{item}
								</Dropdown.Item>
							</Link>
						)}
					</Dropdown>

						<NavLink className='navbar__link' to="/favoritos">
							Favoritos
							<AiFillHeart
							size={19}
							className={`text-${favoritos.length >= 1 ? 'red' : 'gray'}-500 inline transition-colors duration-500 hover:text-yellow-500`}
							/>
						</NavLink>

					

				</Navbar.Collapse>
			</Navbar>

		</div>
	)
};

export default Navegacion;


