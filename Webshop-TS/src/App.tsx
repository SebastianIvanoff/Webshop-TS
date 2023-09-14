
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import RootLayout from './Layout/RootLayout';
import Cart from './Pages/Cart';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider> 
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
