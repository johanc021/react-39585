import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navegacion from './components/Navegacion/Navegacion';
import PiePagina from './components/PiePagina/PiePagina';

function App() {

    const mensaje = "Lista de libros"

    return (
        <>
            <Navegacion />
            <ItemListContainer greeting={mensaje}/>
            <PiePagina/>
        </>
    );
}

export default App;
