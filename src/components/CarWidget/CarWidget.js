import React from 'react';
import './CarWidget.scss';
import { CiShoppingCart } from "react-icons/ci";

const CarWidget = () => {
	return (
		<button className='btn-icon'>
			<CiShoppingCart size={28} />
			<span className="badge">2</span>
		</button>	
	);
};

export default CarWidget;
