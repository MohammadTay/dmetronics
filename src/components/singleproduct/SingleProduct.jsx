// ProductPage.js
import React, { useEffect } from 'react';
import './SingleProduct.css';


const SingleProduct = ({item}) => {

  return (
    <div className="singleProduct-page">
      <div className="singleProduct-image">
      {item.image &&  <img src={item?.image} alt="singleProduct" />}
      </div>
      <div className="singleProduct-details">
        <h2>{item?.name}</h2>
        <p>{item?.description}</p>
       {item.price && <p className="price">${item?.price}</p>}
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
