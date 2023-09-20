"use client";

import React, { useEffect } from "react";
import VolTwoCard from "./VolTwoCard";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpcomingMovies } from "@/store/Actions/upComMovieAction";

const Upcomming = () => {
  const dispatch = useDispatch();
  const d = useSelector((state) => state.upComMovieReducer);
  // console.log(">>>>>>>>>..up", d);
  const { movies, page, errors } = useSelector(
    (state) => state.upComMovieReducer
  );

  useEffect(() => {
    if (movies.length === 0) dispatch(asyncUpcomingMovies());
  }, []);
  return (
    <>
      <div className="w-full h-auto mt-5">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">Upcoming movies </div>
          <div>
            <Link href="/upcommings">See all movies</Link>
          </div>
        </div>

        <div className="relative flex items-center min-w-full min-h-[400px]  overflow-x-scroll scroll scroll-smooth  bg-[#032541] mt-5">
          <div className=" p-5 absolute flex gap-5 items-center justify-evenly lg:w-[300vw] w-[1000vw] h-auto ">
            {movies &&
              movies.map((items) => (
                <VolTwoCard key={items.id} items={items} />
              ))}
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Upcomming;
