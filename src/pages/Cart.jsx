function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="cart-item d-flex align-items-center gap-3 mb-3 p-3"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-image"
              />

              <div className="flex-grow-1">
                <h6>{item.title}</h6>
                <p className="mb-1">Price: ${item.price}</p>
                <p className="mb-0">Quantity: {item.quantity}</p>
              </div>

              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h4 className="text-end mt-4">
            Total: ${total.toFixed(2)}
          </h4>
        </>
      )}
    </section>
  );
}

export default Cart;