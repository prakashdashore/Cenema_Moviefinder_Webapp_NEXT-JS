"use client";
import { asyncGetTrendingMovies } from "@/store/Actions/getTrendingMoviesAction";
import Link from "next/link";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { getTrendingMoviesPage } from "@/store/Reducers/getTrendingMoviesReducer";
import { waiting } from "@/fetch";


const Trending =() => {
    const dispatch = useDispatch()
    const {movies , page , errors} = useSelector((state) => state.getTrendingMoviesReducer)


    useEffect(()=>{

        dispatch(asyncGetTrendingMovies())

    },[page])
    // console.log("this is from trending" , page)

    const funky = (e)=>{
        dispatch(getTrendingMoviesPage(e))
    }




  return (
    <>
      <div className="w-full h-auto">
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">Trending movies</div>
          <div>
            <Link href="/trendings">See all movies</Link>
          </div>
        </div>

        <div className="relative flex items-center w-full min-h-[400px]  overflow-x-scroll scroll scroll-smooth">
          <div className=" p-5 absolute flex gap-5 items-center justify-evenly w-auto h-auto ">

            { (movies) ? movies.map((items) => <MovieCard key={items.id} items={items} />) : <h1 className="text-3xl text-black" > Loading..</h1>}
          </div>
        </div>
      </div>
    </>
  );
};




export default Trending;
