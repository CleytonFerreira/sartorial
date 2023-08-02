import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SingleProduct from './pages/SingleProductPage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import CheckoutPage from './pages/CheckoutPage';
import Success from './components/StripeCheckout/Success';
import Canceled from './components/StripeCheckout/Canceled';
import SignUp from './components/SignUp';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/loja" element={<ShopPage />} />
      <Route path="/loja/produto/:id" element={<SingleProduct />} />
      <Route path="/carrinho" element={<CartPage />} />
      <Route path="/pedido" element={<CheckoutPage />} />
      <Route path="/success" element={<Success />} />
      <Route path="/canceled" element={<Canceled />} />
      <Route path="/cadastro" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;