import React, { useEffect } from 'react';
import ImgHome from '../../assets/home/home.svg'
import { Link } from 'react-router-dom';
import './Home.scss'
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

	useEffect(() => {
		AOS.init({
			duration: 1500,
			once: true
		});
	}, []);

	return (
		<div data-aos="zoom-in">
			<main className="mainHome">
				<div className="main__descripcion">
					<h1 id="main__titulo">Abre tu mente, sumérgete en mundos imaginarios y crea una aventura con cada libro.</h1>
					<Link className='main__btn' to='/libros'>Dale un vistazo a nuestros libros!!</Link>
				</div>
				<div className="main__imgDescripcion">
					<img className="main__img" src={ImgHome} alt="Logo" />
				</div>
			</main>
		</div>
	)
};

export default Home;
