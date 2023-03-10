import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pedirLibrosPorId } from '../../helpers/capturarDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../../components/Spinner/Spinner'
import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {

	//estado libro por id
	const [item, setItem] = useState(null);

	const [loading, setLoading] = useState(true);

	
	//Parametro de ruta por id
	const { libroId } = useParams()

	useEffect(() => {
		setLoading(true);
		
		pedirLibrosPorId(Number(libroId))
		.then(res => {
			setItem(res)
		})
		.finally(() =>{
			setLoading(false);
		}
		)
	},[])


	/* console.log(item) */
	return (

		<>
            {
                loading
                    ? <Spinner/>
                    : <ItemDetail item={item}/>
            }
        </>

		)
};

export default ItemDetailContainer;
