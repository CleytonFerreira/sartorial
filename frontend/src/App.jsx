import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SingleProduct from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccess from './pages/OrderSuccess';
import OrderCancel from './pages/OrderCancel';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/loja' element={<ShopPage />} />
      <Route path='/loja/produto/:id' element={<SingleProduct />} />
      <Route path='/carrinho' element={<CartPage />} />
      <Route path='/pedido' element={<CheckoutPage />} />
      <Route path='/success' element={<OrderSuccess />} />
      <Route path='/canceled' element={<OrderCancel />} />
      <Route path='/cadastro' element={<SignUp />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;