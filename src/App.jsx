import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((oldCart) => {
      const found = oldCart.find((item) => item.id === product.id);

      if (found) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((oldCart) => oldCart.filter((item) => item.id !== id));
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;