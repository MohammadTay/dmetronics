import React, { useEffect, useState, useRef } from 'react'
import ProductList from '../../components/productlist/ProductList'
import newRequest from '../../utils/Request'
import { useQuery } from '@tanstack/react-query'
import { useLocation } from "react-router-dom";


const WiringDiagram = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['wirings'],
    queryFn: () =>
      newRequest
        .get("/wirings").
        then((res) => {
          return res.data
        })
  })



  return (
    <>
      {
        isPending ? "pending" : error ? " something wrong" :
          (<ProductList products={data} index={"wiringdiagram"} />)
      }
    </>
  )
}

export default WiringDiagram