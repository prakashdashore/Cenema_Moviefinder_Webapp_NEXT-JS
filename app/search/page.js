"use client";

import React, { Suspense, use } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Components/MovieCard";
import { waiting } from "@/fetch";


const page = () => {
  const { movies } = useSelector((state) => state.SearchMovieReducer);

  const d =
    !movies ? (
      <h1 className="text-2xl font-bold "> No movies found !! </h1>
    ) : (
      ""
    );
    
  return (
    <>
      <div className="w-[100vw] min-h-[100vh]">
      <div className=" min-h-[100vh] mx-auto sm:w-[80vw] mt-5">
          <div className=" text-black text-3xl font-bold p-10">Your Searchings...</div>

        <Suspense
        fallback={
          <div className="text-3xl text-black">loading</div>
        }
        />
    
          <div className=" w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5
           ">
            {d}
            {waiting(1000)}
      
            {movies && movies.map((items) => <MovieCard key={items.id} items={items} />)}

          </div>


        </div>
      </div>
    </>
  );
};

export default page;
