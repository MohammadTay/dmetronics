import React from 'react'
import ProductList from '../../components/productlist/ProductList'
import { pinouts } from '../../data'

const PinOut = () => {
  return (
    <ProductList products={pinouts} index={"pinout"} />
  )
}

export default PinOut