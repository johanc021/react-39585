import React, { useContext } from 'react';
import './CartWidget.scss';
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom'
const CartWidget = () => {

	const { cantidadLibros } = useContext(CartContext)

		return (

			<Link to="/cart" className='btn-icon flex items-center'>
				<CiShoppingCart size={28} />
				<span className="badge">{cantidadLibros()}</span>
			</Link>	

		

		
	);
};

export default CartWidget;
