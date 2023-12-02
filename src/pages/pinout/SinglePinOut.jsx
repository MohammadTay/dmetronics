import React from 'react'
import SingleProduct from '../../components/singleproduct/SingleProduct'
import { pinouts } from '../../data'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/Request'

const SinglePinOut = () => {
  const { id } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: ['singlepinout'],
    queryFn: () =>
      newRequest
        .get(`pinouts/single/${id}`).
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

export default SinglePinOut