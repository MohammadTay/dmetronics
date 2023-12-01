import React from 'react'
import SingleProduct from '../../components/singleproduct/SingleProduct'
import { pinouts } from '../../data'
import { useParams } from 'react-router-dom'

const SinglePinOut = () => {
  const { id } = useParams()
  const pinout = pinouts[id - 1]
  return (
    <SingleProduct item={pinout} />
  )
}

export default SinglePinOut