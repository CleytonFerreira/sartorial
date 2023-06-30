import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import ProductsContextProvider from './context/ProductsContext.jsx'
import CartContextProvider from './context/CartContext.jsx';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)