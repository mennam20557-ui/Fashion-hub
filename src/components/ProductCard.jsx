function ProductCard({ product, addToCart }) {
  return (
    <div className="col-12 col-sm-6 col-lg-3 mb-4">
      <div className="card product-card h-100">
        <img
          src={product.thumbnail}
          className="card-img-top product-image"
          alt={product.title}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.title}</h6>

          <p className="product-price">${product.price}</p>

          <button
            className="btn btn-dark mt-auto"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;