import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route  path="/loja" element={<ShopPage />} />
    </Routes>
  )
}

export default App