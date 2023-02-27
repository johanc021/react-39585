import { Navbar} from 'flowbite-react';
import React from 'react';
import Logo from '../../Logo.svg';
import './Navegacion.scss';
import CartWidget from '../CartWidget/CartWidget';
import UserWidget from '../UserWidget/UserWidget';

const Navegacion = () => {
	return (
		<div className='header'>

			<Navbar className='navbar'
				fluid={true}
				rounded={true}
			>
				<Navbar.Brand href="https://viewx.com.co/">
					<img
						src={Logo}
						className="mr-3 h-6 sm:h-9"
						alt="Logo"
					/>
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						MAGIC BOOK
					</span>
				</Navbar.Brand>

				<div className="flex md:order-2 gap-3">

					{/* Icono Carrito de compras */}
					<CartWidget/>

					{/* Icono avatar */}
					<UserWidget/>
					
					<Navbar.Toggle />
				</div>


				<Navbar.Collapse>
					<Navbar.Link
						href="/navbars"
						active={true}
					>
						Libros
					</Navbar.Link>
					<Navbar.Link href="/navbars">
						Recientes
					</Navbar.Link>
					<Navbar.Link href="/navbars">
						Vende
					</Navbar.Link>
					<Navbar.Link href="/navbars">
						Contacto
					</Navbar.Link>
					<Navbar.Link href="/navbars">
						Acerca de
					</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>

		</div>
	)
};

export default Navegacion;
