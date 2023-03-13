import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navegacion from './components/Navegacion/Navegacion';
import PiePagina from './components/PiePagina/PiePagina';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';

function App() {


    return (

        <BrowserRouter>
            <Navegacion />
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/libros" element={<ItemListContainer />} />
                    <Route path="/libros/:genero" element={<ItemListContainer />} />
                    <Route path="/detail/:libroId" element={<ItemDetailContainer/>} />
                    <Route path="*" element={ <Navigate to = {"/"}/>}/>
                    {/* <Route path="/nosotros" element={<Nosotros />} /> */}
                </Routes>
            <PiePagina/>
        </BrowserRouter>


    );
}

export default App;
