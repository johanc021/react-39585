import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navegacion from './components/Navegacion/Navegacion';
import PiePagina from './components/PiePagina/PiePagina';

function App() {


    return (

        <BrowserRouter>
            <Navegacion />
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/libros" element={<ItemListContainer />} />
                    <Route path="/libros/:genero" element={<ItemListContainer />} />
                    {/* <ItemListContainer/> */}
                </Routes>
            <PiePagina/>
        </BrowserRouter>


    );
}

export default App;
