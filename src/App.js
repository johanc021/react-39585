import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navegacion from './components/Navegacion/Navegacion';
import PiePagina from './components/PiePagina/PiePagina';

function App() {

    const mensaje = "NUESTRO CATALOGO"

    return (
        <>
            <Navegacion />
            <ItemListContainer/>
            <PiePagina/>
        </>
    );
}

export default App;
