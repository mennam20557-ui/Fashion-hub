import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand logo" to="/">
          FASHION HUB
        </Link>

        <div className="d-flex gap-3 align-items-center">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/products">Products</Link>
          <Link className="nav-link" to="/cart">
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;