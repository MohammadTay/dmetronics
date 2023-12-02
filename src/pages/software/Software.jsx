import React from 'react';
import ProductList from '../../components/productlist/ProductList'
import newRequest from '../../utils/Request';
import { useQuery } from '@tanstack/react-query';



const Software = () => {

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['softwares'],
    queryFn: () =>
      newRequest
        .get("/softwares").
        then((res) => {
          return res.data
        })
  })
  return (
    <>
      <span className="breadcrumbs">Software  </span>
      <h1>please choose your software</h1>
      <p>     Explore the         </p>
      {isPending ? "pending " : error ? "something wrong " :
        <ProductList products={data} index={"software"} />}
    </>
  );
};

export default Software;
