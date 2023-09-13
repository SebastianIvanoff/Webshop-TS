
import { CartContext , useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleIncreaseQuantity = (productId: number) => {
    // Implement a function to increase quantity
    const updatedQuantity = cart.find((item) => item.product.id === productId)?.quantity + 1;
    if (updatedQuantity !== undefined) {
      updateQuantity(productId, updatedQuantity);
    }
  };

  const handleDecreaseQuantity = (productId: number) => {
    // Implement a function to decrease quantity
    const existingItem = cart.find((item) => item.product.id === productId);
    if (existingItem && existingItem.quantity > 1) {
      const updatedQuantity = existingItem.quantity - 1;
      updateQuantity(productId, updatedQuantity);
    } else {
      removeFromCart(productId);
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        <ul className="cart-list">
          {cart.map((item) => (
            <li className="cart-item" key={item.product.id}>
              <h3>{item.product.name}</h3>
              <p>Price: {item.product.price} kr</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleIncreaseQuantity(item.product.id)}>+</button>
              <button onClick={() => handleDecreaseQuantity(item.product.id)}>-</button>
              <button onClick={() => handleRemoveFromCart(item.product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
