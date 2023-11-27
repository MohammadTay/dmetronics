import React from 'react'
import SingleProduct from '../../components/singleproduct/SingleProduct'
import { useParams } from 'react-router-dom'
import { pinouts } from '../../data'


const SinglePinOut = () => {
    const {id}=useParams()
    const pins = pinouts[id-1]
  return (
    <SingleProduct item={pins}/>
  )
}

export default SinglePinOut