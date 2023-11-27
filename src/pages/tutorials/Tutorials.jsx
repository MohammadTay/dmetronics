import React from 'react'
import ProductList from '../../components/productlist/ProductList'
import { tutorials } from '../../data'

const Tutorials = () => {
  return (
    <ProductList products={tutorials} index={"tutorials"}/>
  )
}

export default Tutorials