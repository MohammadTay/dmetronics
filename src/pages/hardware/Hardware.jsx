import React from 'react'
import ProductList from '../../components/productlist/ProductList'
import { electronics } from '../../data'

const Hardware = () => {
  return (
   <ProductList products={electronics} index={"hardware"}/>
  );
};

export default Hardware;