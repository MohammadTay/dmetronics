import React from 'react'
import SingleProduct from '../../components/singleproduct/SingleProduct'
import { useParams } from 'react-router-dom'
import { electronics } from '../../data'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/Request'

const SingleHardware = () => {
  const { id } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: ['singlehardware'],
    queryFn: () =>
      newRequest
        .get(`hardwares/single/${id}`).
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

export default SingleHardware