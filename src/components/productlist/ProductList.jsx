// ProductList.js

import React from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';

const ProductList = ({ products, index}) => {
  return (

    <div className="product-list">
      {products.map(product => (
      <Link to={`/${index}/${product.id}`} key={product.id}>
        <div  className="product-item">
          <img src={product?.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {product.price && <p className="price">${product?.price}</p>}
        </div>
      </Link>
      ))}
    </div>
  );
};

export default ProductList;
