import React from 'react'
import ProductList from '../../components/productlist/ProductList'
import { electronics } from '../../data'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/Request';

const Hardware = () => {

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['hardwares'],
    queryFn: () =>
      newRequest
        .get("/hardwares").
        then((res) => {
          return res.data
        })
  })


  return (
    <>
      <span className="breadcrumbs">Hardware</span>
      <h1>please choose your product</h1>
      <p>    Explore the         </p>
      {isPending ? " pending" : error ? "something wrong " :
        <ProductList products={data} index={"hardware"} />}
    </>
  );
};

export default Hardware;