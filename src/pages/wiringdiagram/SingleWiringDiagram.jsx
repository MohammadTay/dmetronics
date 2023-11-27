import React from 'react'
import SingleProduct from '../../components/singleproduct/SingleProduct'
import { wiring_diagrams } from '../../data'
import { useParams } from 'react-router-dom'

const SingleWiringDiagram = () => {
    const {id}=useParams()
    const wiring=wiring_diagrams[id-1]
  return (
   <SingleProduct item={wiring}/>
  )
}

export default SingleWiringDiagram