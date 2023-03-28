import React from 'react';
import {Button, Checkbox, Label, Select, TextInput} from 'flowbite-react'
import "./Chekout.scss"

const Chekout = () => {
	return (
		<main className='main'>

			<div className='main__formulario'>

				<h1 className='main__title'>TERMINA TU COMPRA</h1>
				
				<div className='flex flex-row justify-center p-10'>
					{/* <div className="detalleCompra w-3/5 flex justify-center p-5">
						<table className="table-auto w-full rounded-lg border border-green-500">
							<caption className="text-lg font-bold text-white bg-green-500 rounded-t-lg py-2 px-4">DETALLE DE LA COMPRA</caption>
							<thead>
								<tr className="bg-green-500 text-white">
									
									<th className="px-4 py-2">Libro</th>
									<th className="px-4 py-2">Cantidad</th>
									<th className="px-4 py-2">Precio</th>
								</tr>
							</thead>
							<tbody>
								<tr>
								
									<td className="border px-4 py-2">Producto 1</td>
									<td className="border px-4 py-2">2</td>
									<td className="border px-4 py-2">$20</td>
								</tr>
								<tr>
									
									<td className="border px-4 py-2">Producto 2</td>
									<td className="border px-4 py-2">1</td>
									<td className="border px-4 py-2">$15</td>
								</tr>
								<tr>
									
									<td className="border px-4 py-2">Producto 3</td>
									<td className="border px-4 py-2">3</td>
									<td className="border px-4 py-2">$15</td>
								</tr>
							</tbody>
							<tfoot>

								<hr/>
								<tr>
									
									<td className="border px-4 py-2"></td>
									<td className="border px-4 py-2 font-bold">Subtotal</td>
									<td className="border px-4 py-2">$50</td>
								</tr>
								<tr>
									
									<td className="border px-4 py-2"></td>
									<td className="border px-4 py-2 font-bold">IVA (16%)</td>
									<td className="border px-4 py-2">$8</td>
								</tr>
								<tr>
									
									<td className="border px-4 py-2"></td>
									<td className="border px-4 py-2 font-bold">Envío</td>
									<td className="border px-4 py-2">$5</td>
								</tr>
								<tr>
									<td className="border px-4 py-2"></td>
									<td className="border px-4 py-2 font-bold">Total</td>
									<td className="border px-4 py-2 font-bold">$63</td>
								</tr>
							</tfoot>
						</table>
					</div> */}

					<div className="detalleCompra w-3/5 flex justify-center p-10">
						<table className="table-auto w-full rounded-lg border">
							<caption className="text-lg font-bold text-white bg-green-500 rounded-t-lg py-2 px-4">DETALLE DE LA COMPRA</caption>
							<thead>
								<tr className="bg-green-500 text-white">
									<th className="px-4 py-2">Libro</th>
									<th className="px-4 py-2">Precio Unitario</th>
									<th className="px-4 py-2">Cantidad</th>
									<th className="px-4 py-2">Precio</th>
								</tr>
							</thead>
							<tbody>
								<tr className='text-center'>
									<td className=" px-4 py-2">Producto 1</td>
									<td className=" px-4 py-2">20000</td>
									<td className=" px-4 py-2">2</td>
									<td className=" px-4 py-2">$20</td>
								</tr>
								<tr className='text-center'>
									<td className=" px-4 py-2">Producto 2</td>
									<td className=" px-4 py-2">20000</td>
									<td className=" px-4 py-2">1</td>
									<td className=" px-4 py-2">$15</td>
								</tr>
								<tr className='text-center'>
									<td className=" px-4 py-2">Producto 3</td>
									<td className=" px-4 py-2">20000</td>
									<td className=" px-4 py-2">3</td>
									<td className=" px-4 py-2">$15</td>
								</tr>

							</tbody>
							<tfoot >

								<tr>
									<td colSpan="4" className=" px-4 py-2  text-right">Subtotal: <strong>$50</strong></td>
								</tr>
								<tr>
									<td colSpan="4" className=" px-4 py-2 text-right">IVA (16%): <strong>$8</strong></td>
								</tr>
								<tr>
									<td colSpan="4" className=" px-4 py-2 text-right">Envío: <strong>$5</strong></td>
								</tr>
								<tr>
									<td colSpan="4" className=" px-4 py-2  text-right">Total: <strong>$63</strong></td>
								</tr>

							</tfoot>
						</table>
						
					</div>
					<div className='datosCliente w-96'>
						<form className="flex flex-col gap-4">
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="nombre"
										value="Nombre"
									/>
								</div>
								<TextInput
									id="nombre"
									type="text"
									sizing="sm"
									placeholder="John Doe"
									required={true}
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="direccion"
										value="Dirección"
									/>
								</div>
								<TextInput
									id="direccion"
									type="text"
									sizing="sm"
									placeholder="Cra 152 # 25- 30"
									required={true}
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="celular"
										value="Celular"
									/>
								</div>
								<TextInput
									id="celular"
									type="text"
									sizing="sm"
									placeholder="315658427"
									required={true}
								/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="email"
										value="Email"
									/>
								</div>
								<TextInput
									id="email"
									type="email"
									sizing="sm"
									placeholder="admin@admin.com"
									required={true}
								/>
							</div>
							<div id="select">
								<div className="mb-2 block">
									<Label
										htmlFor="medPago"
										value="Metodo de pago"
									/>
								</div>
								<Select
									id="medPago"
									sizing="sm"
									required={true}
								>
									<option>
										Mastercard
									</option>
									<option>
										Visa
									</option>
									<option>
										Pay
									</option>
								</Select>
							</div>
							<div>
								<div className="mb-2 block">
									<Label
										htmlFor="NumeroTarjeta"
										value="Numero de tarjeta"
									/>
								</div>
								<TextInput
									id="NumeroTarjeta"
									type="text"
									sizing="sm"
									placeholder="5687-5654-6354-1487"
									required={true}
								/>
							</div>


							<Button className='bg-green-500' type="submit">
								PAGAR
							</Button>
						</form>
					</div>
				</div>
				
			</div>
		</main>
	)
	
	
	
};

export default Chekout;
