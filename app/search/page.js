"use client";

import React, { use } from "react";
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
        <div className=" min-h-[100vh] mx-auto sm:w-[80vw] bg-white">
          <div className=" font-black text-2xl font-bold ">Here's your search..</div>

          <div className=" mt-10 w-full h-full grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-10 justify-evenly  px-24">
            {d}
            {waiting(500)}
            {movies &&
              movies.map((items) => <MovieCard key={items.id} items={items} />)}
          </div>

          <div className="p-10 flex items-center justify-center ">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
