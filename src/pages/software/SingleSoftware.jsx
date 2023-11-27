// ProductPage.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { softwares } from '../../data';
import SingleProduct from '../../components/singleproduct/SingleProduct'

const SingleSoftware = () => {
  const {id}=useParams()
 const software = softwares[id-1]
  return (
  <SingleProduct item={software}/>
  );
}

export default SingleSoftware;
