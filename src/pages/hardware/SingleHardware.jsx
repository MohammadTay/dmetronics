import React from 'react'
import SingleProduct from '../../components/singleproduct/SingleProduct'
import { useParams } from 'react-router-dom'
import { electronics } from '../../data'

const SingleHardware = () => {
    const{id}=useParams()
    const hardware =electronics[id-1]
  return (
   <SingleProduct item={hardware}/>
  )
}

export default SingleHardware