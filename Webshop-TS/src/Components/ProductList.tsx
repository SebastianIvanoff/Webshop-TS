import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; 
import products from "../Types";

function ProductList() {
  const { addToCart } = useContext(CartContext); // Use the addToCart function from your CartContext
  //addToCart is red but the function still works

  return (
    <>
      <h1>Product List</h1>
      <div className="product-container">
        <ul className="product-list">
          {products.map((product) => (
            <li className="product" key={product.id}>
              <h2>{product.name}</h2>
              <p>Price: {product.price} kr</p>
              <img
                className="product-img"
                src={product.imgURL}
                alt={product.name}
              />
              <p>{product.description}</p>
              <div className="List-btns">
                <button
                onClick={() => addToCart(product)} // Add the product to the cart on button click
                className="add-to-cart"
              >
                Add to Cart
              </button>
              <Link className="link-details" to={`/products/${product.id}`}>
                Details
              </Link>
              </div>
              
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
