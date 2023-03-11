import { Button, Modal } from 'flowbite-react'
import React, { useState } from 'react'

const ItemDetail = ({ tituloLibro, imagenLibro, autorLibro, editorialLibro, anioLibro, precioLibro, descripcionLibro }) => {

	const [showModal, setShowModal] = useState(false);

	const handleAbrirModal = () => {
		setShowModal(!showModal);
	};

	const handleCerrarModal = () => {
		setShowModal(false);
	};

	const handleComprar = () => {
		handleCerrarModal();
	};

/* 	const handleDecline = () => {
		handleCerrarModal();
	}; */

	return (
		<React.Fragment>
			<Button onClick={handleAbrirModal}>
				Mas detalles
			</Button>
			<Modal
				show={showModal
				}
				size="4xl"
				onClose={handleCerrarModal}
			>
				<Modal.Header>
					Detalles del libro: {tituloLibro}
				</Modal.Header>
				<Modal.Body>
					<div className="space-y-6 p-6 flex gap-4">
						<img className="max-w-xs h-auto rounded-md shadow-md" src={imagenLibro} alt={tituloLibro} />
						<div className="flex flex-col gap-5">
							<h4 className='gap-3 text-2xl font-bold'>Sinopsis:</h4>
							<p className="text-xl font-bold leading-relaxed text-gray-500 dark:text-gray-400">
								{descripcionLibro}
							</p>

							<Button className='mx-auto' onClick={handleComprar}>
								Comprar
							</Button>
						</div>
					</div>
				</Modal.Body>
				{/* <Modal.Footer>
					<Button className='mx-auto' onClick={handleComprar}>
						Comprar
					</Button>
					{<Button
						color="gray"
						onClick={handleDecline}
					>
						Decline
					</Button>}

				</Modal.Footer> */}
			</Modal>
		</React.Fragment>
	);
};

export default ItemDetail;
