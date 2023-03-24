import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navegacion from './components/Navegacion/Navegacion';
import PiePagina from './components/PiePagina/PiePagina';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import  Cart  from './components/Cart/Cart'

function App() {

    return (

        <CartProvider >
            <BrowserRouter>
                <Navegacion />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/libros" element={<ItemListContainer />} />
                    <Route path="/libros/:genero" element={<ItemListContainer />} />
                    <Route path="/detail/:libroId" element={<ItemDetailContainer />} />
                    {<Route path="/cart" element={<Cart />} />}
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
                <PiePagina />
            </BrowserRouter>
        </CartProvider>
        
    );
}

export default App;
