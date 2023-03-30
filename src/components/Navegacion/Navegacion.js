import './Navegacion.scss';
import { Navbar, Dropdown } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import Logo from '../../Logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import UserWidget from '../UserWidget/UserWidget';
import { Link,NavLink } from 'react-router-dom';
import { capturarDatosFB} from '../../helpers/capturarDatos'

const Navegacion = () => {


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

				<div className="flex md:order-2 gap-3">

					{/* Icono Carrito de compras */}
					<CartWidget/>

					{/* Icono avatar */}
					<UserWidget/>
					
					<Navbar.Toggle />
				</div>
			<Navbar.Collapse>

					<NavLink className='navbar__link' /* activeClassName='navbar__link--active' */ to="/libros">Libros</NavLink>

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

					<NavLink className='navbar__link' to="/favoritos">Favoritos</NavLink>

				</Navbar.Collapse>
			</Navbar>

		</div>
	)
};

export default Navegacion;


