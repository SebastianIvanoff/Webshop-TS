import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import RootLayout from './Layout/RootLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<RootLayout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="products/:id"
            element={<ProductDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;