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

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <>
      <div className="container">
        <span className="breadcrumbs">wiring  {">"}</span>
        <h1>please choose your wire pic</h1>
        <p>
          Explore the         </p>
        <div className="menu">
          <div className="left">
            <span>for free </span>

          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>

      </div>
      {
        isPending ? "pending" : error ? " something wrong" :
          (<ProductList products={data} index={"wiringdiagram"} />)
      }
    </>
  )
}

export default WiringDiagram