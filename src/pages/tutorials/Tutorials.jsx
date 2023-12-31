import React from 'react'
import ProductList from '../../components/productlist/ProductList'
import { tutorials } from '../../data'
import newRequest from '../../utils/Request'
import { useQuery } from '@tanstack/react-query'

const Tutorials = () => {

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['tutorials'],
    queryFn: () =>
      newRequest
        .get("/tutorials").
        then((res) => {
          return res.data
        })
  })

  return (
    <>
      <span className="breadcrumbs">Tutorials  </span>
      <h1>please choose your tutorial</h1>
      <p>     Explore the         </p>
      {isPending ? "pending" : error ? " something wrong" : <ProductList products={data} index={"tutorials"} />}
    </>
  )
}

export default Tutorials