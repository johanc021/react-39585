import React from 'react';
import './CartWidget.scss';
import { CiShoppingCart } from "react-icons/ci";

const CartWidget = () => {
	return (
		<button className='btn-icon'>
			<CiShoppingCart size={28} />
			<span className="badge">2</span>
		</button>	
	);
};

export default CartWidget;
