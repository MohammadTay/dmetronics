// ProductPage.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { softwares } from '../../data';
import SingleProduct from '../../components/singleproduct/SingleProduct'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/Request'

const SingleSoftware = () => {
  const { id } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: ['singlesoftware'],
    queryFn: () =>
      newRequest
        .get(`softwares/single/${id}`).
        then((res) => {
          return res.data
        })
  })
  return (
    <>

      {isPending ? "pending " : error ? " something wrong" : <SingleProduct item={data} />}
    </>
  );
}

export default SingleSoftware;
