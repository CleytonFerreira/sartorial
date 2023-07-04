import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SingleProduct from './pages/SingleProductPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route  path="/loja" element={<ShopPage />} />
      <Route  path="/produto/:id" element={<SingleProduct />} />
    </Routes>
  )
}

export default App