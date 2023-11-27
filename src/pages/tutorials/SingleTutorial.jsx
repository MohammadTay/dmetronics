import React from 'react'
import SingleProduct from '../../components/singleproduct/SingleProduct'
import { useParams } from 'react-router-dom'
import { tutorials } from '../../data'

const SingleTutorial = () => {
    const {id}=useParams()
    const tut= tutorials[id-1]
  return (
  
   <SingleProduct item={tut}/>
  )
}

export default SingleTutorial