import React from 'react'
import ProductList from '../../components/productlist/ProductList'
import { wiring_diagrams } from '../../data'

const WiringDiagram = () => {
  return (
    <ProductList products={wiring_diagrams} index={"wiringdiagram"} />
  )
}

export default WiringDiagram