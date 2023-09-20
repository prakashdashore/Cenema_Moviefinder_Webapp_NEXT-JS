"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import VolThreeCard from "./VolThreeCard";
import { asyncOntvShows } from "@/store/Actions/onTvshowaAction";

const OntvShows = () => {
    const dispatch = useDispatch()

    const {shows} = useSelector((state) => state.OntvShows)

    useEffect(()=>{

        if(shows.length === 0) dispatch(asyncOntvShows())

    },[])




  return (


    <>
      <div className="w-full h-auto mt-5">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">On TV Shows  </div>
          <div>
            <Link href="/ontv">See all</Link>
          </div>
        </div>

        <div className="relative flex items-center w-full min-h-[400px]  overflow-x-scroll scroll scroll-smooth  bg-[#032541] mt-5">
          <div className=" p-5 absolute flex gap-5 items-center justify-around w-[1600vw]  lg:w-[500vw] h-auto ">
            
            {shows &&
              shows.map((items) => (
                <VolThreeCard key={items.id} items={items}   />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OntvShows;
