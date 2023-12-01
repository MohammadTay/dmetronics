// ProductPage.js
import React from 'react';
import './SingleProduct.css';


const SingleProduct = ({ item }) => {

  return (
    <div className="singleProduct-page">
      <div className="singleProduct-image">
        <img src={item?.Image} alt="singleProduct" />
      </div>
      <div className="singleProduct-details">
        <h2>{item?.Name}</h2>
        <p>{item?.Description}</p>
        {item?.Price && <p className="price">${item?.Price}</p>}
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
