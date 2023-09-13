import { useParams } from "react-router-dom";

import products from "../Types";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams<{ id: string }>(); // Define the type directly in useParams

  if (!id) {
    return <div>Product ID not provided</div>;
  }

  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { addToCart } = useContext(CartContext);

  return (
    <div className="details-container">
      <div className="details-wrapper">
        <h2>{product.name}</h2>
        <p>Price: {product.price} kr</p>
        <img className="details-img" src={product.imgURL} alt={product.name} />
        <p>{product.description}</p>
        <button
                onClick={() => addToCart(product)} // Add the product to the cart on button click
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
      </div>
    </div>
  );
}

export default ProductDetails;
