import React from 'react'
import SingleProduct from '../../components/singleproduct/SingleProduct'
import { useParams } from 'react-router-dom'
import { tutorials } from '../../data'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/Request'

const SingleTutorial = () => {
  const { id } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: ['singletutorial'],
    queryFn: () =>
      newRequest
        .get(`tutorials/single/${id}`).
        then((res) => {
          return res.data
        })
  })
  return (

    <>

      {isPending ? "pending " : error ? " something wrong" : <SingleProduct item={data} />}
    </>
  )
}

export default SingleTutorial