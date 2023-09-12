import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../Types'; // Import the entire 'products' array
import Product from '../Types'; // Import the 'Product' type

function ProductDetails() {
  const { id } = useParams<{ id?: string }>(); // Notice the "?" to indicate the parameter is optional

  if (!id) {
    return <div>Product ID not provided</div>;
  }

  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product'>
      <h2>{product.name}</h2>
          <p>Price: {product.price} kr</p>
          <img className='product-img' src={product.imgURL} alt={product.name} />
          <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
