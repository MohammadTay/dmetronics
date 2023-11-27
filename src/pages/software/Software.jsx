import React from 'react';
import ProductList from '../../components/productlist/ProductList'
import { softwares } from '../../data';

 

const Software = () => {
  return (
    <ProductList products={softwares} index={"software"}/>
  );
};

export default Software;
