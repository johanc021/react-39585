import './Navegacion.scss';
import { Navbar, Dropdown } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import Logo from '../../Logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import UserWidget from '../UserWidget/UserWidget';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { generosMenu } from '../../helpers/capturarDatos'

const Navegacion = () => {

	const location = useLocation();
	
	const [libros, setLibros] = useState([]);

	useEffect(() => {
		generosMenu()
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


					{/* <Link className='navbar__link' active={location.pathname === '/libros'} to="/libros">Libros</Link> */}
					<NavLink className='navbar__link' /* activeClassName='navbar__link--active' */ to="/libros">Libros</NavLink>

					
					{/* <Navbar.Link active={location.pathname === '/recientes'} >
						<Link className='navbar__link' to="/recientes">Recientes</Link>
					</Navbar.Link> */}

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

				</Navbar.Collapse>
			</Navbar>

		</div>
	)
};

export default Navegacion;
