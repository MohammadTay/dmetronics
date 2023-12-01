import React from 'react'
import SingleProduct from '../../components/singleproduct/SingleProduct'
import { wiring_diagrams } from '../../data'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/Request'

const SingleWiringDiagram = () => {
  const { id } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: ['singleWire'],
    queryFn: () =>
      newRequest
        .get(`wirings/single/${id}`).
        then((res) => {
          return res.data
        })
  })


  return (<>

    {isPending ? "pending " : error ? " something wrong" : <SingleProduct item={data} />}
  </>
  )
}

export default SingleWiringDiagram