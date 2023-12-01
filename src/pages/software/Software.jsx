import React from 'react';
import ProductList from '../../components/productlist/ProductList'
import { softwares } from '../../data';
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
      {isPending ? "pending " : error ? "something wrong " :
        <ProductList products={data} index={"software"} />}
    </>
  );
};

export default Software;
