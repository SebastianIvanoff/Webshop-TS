import products from "../Types";
import { Link } from "react-router-dom";



function ProductList() {
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
              <Link className="link-details" to={`/products/${product.id}`}>
                Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductList;
