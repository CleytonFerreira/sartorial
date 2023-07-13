import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SingleProduct from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/loja" element={<ShopPage />} />
      <Route path="/loja/produto/:id" element={<SingleProduct />} />
      <Route path="/carrinho" element={<CartPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;