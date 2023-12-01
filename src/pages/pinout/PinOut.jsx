import React from 'react'
import ProductList from '../../components/productlist/ProductList'
import newRequest from '../../utils/Request'
import { useQuery } from '@tanstack/react-query'

const PinOut = () => {

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['pinouts'],
    queryFn: () =>
      newRequest
        .get("/pinouts").
        then((res) => {
          return res.data
        })
  })

  return (
    <>
      {isPending ? " pending " : error ? " something wrong" :
        <ProductList products={data} index={"pinout"} />}
    </>
  )
}

export default PinOut