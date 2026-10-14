import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
       axios.get('https://dummyjson.com/products/category/womens-dresses?limit=12')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log('Error loading products:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero-subtitle">NEW COLLECTION</p>
          <h1>Discover Your Style</h1>
          <p>Find your favorite fashion pieces with FASHION HUB.</p>
          <Link to="/products" className="btn btn-dark mt-3">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-4">
          <h2>Featured Products</h2>
          <p className="text-muted">Discover our latest collection</p>
        </div>

        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="row">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-3">
          <Link to="/products" className="btn btn-outline-dark">
            View All Products
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;