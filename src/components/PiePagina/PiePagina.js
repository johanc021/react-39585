import React from 'react';
import { Footer } from 'flowbite-react'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import Logo from '../../Logo.svg'
import './PiePagina.scss'

const PiePagina = () => {
	return (
		<div className='footer__container'>
			<Footer container={true} className="footer">
				<div className="w-full">
					<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
						<div>
							<Footer.Brand
								href="https://flowbite.com"
								src={Logo}
								alt="Logo"
								name="Magic Book"
							/>
						</div>
						<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
							<div>
								<Footer.Title title="acerca de" />
								<Footer.LinkGroup col={true}>
									<Footer.Link href="#">
										Nosotros
									</Footer.Link>
									<Footer.Link href="#">
										Trabaja con nosotros
									</Footer.Link>
								</Footer.LinkGroup>
							</div>
							<div>
								<Footer.Title title="encuentranos" />
								<Footer.LinkGroup col={true}>
									<Footer.Link href="#">
										Github
									</Footer.Link>
									<Footer.Link href="#">
										Discord
									</Footer.Link>
								</Footer.LinkGroup>
							</div>
							<div>
								<Footer.Title title="ambito legal" />
								<Footer.LinkGroup col={true}>
									<Footer.Link href="#">
										Politicas de privacidad
									</Footer.Link>
									<Footer.Link href="#">
										terminos y condiciones
									</Footer.Link>
								</Footer.LinkGroup>
							</div>
						</div>
					</div>
					<Footer.Divider />
					<div className="w-full sm:flex sm:items-center sm:justify-between">
						<Footer.Copyright
							href="#"
							by="Viewx®"
							year={2023}
						/>
						<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
							<Footer.Icon
								href="#"
								icon={BsFacebook}
							/>
							<Footer.Icon
								href="#"
								icon={BsInstagram}
							/>
							<Footer.Icon
								href="#"
								icon={BsTwitter}
							/>
							<Footer.Icon
								href="#"
								icon={BsGithub}
							/>
							<Footer.Icon
								href="#"
								icon={BsDribbble}
							/>
						</div>
					</div>
				</div>
			</Footer>
		</div>
		
	);
};

export default PiePagina;
