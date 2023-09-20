"use client";


import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '@/app/Components/MovieCard';
import { getTrendingMoviesPage } from '@/store/Reducers/getTrendingMoviesReducer';
import {Pagination} from "@nextui-org/react";
import { asyncGetTrendingMovies } from '@/store/Actions/getTrendingMoviesAction';


const page = () => {
    const dispatch = useDispatch()
    const {movies,page, errors} = useSelector(state => state.getTrendingMoviesReducer)

    useEffect(()=>{
        dispatch(asyncGetTrendingMovies())
    },[page])

    

    const funky = (e)=>{
        dispatch(getTrendingMoviesPage(e))
    }


  return (
    <>
     <div className="mt-10 w-[100vw] min-h-[100vh]">
      
        <div className=" min-h-[100vh] mx-auto sm:w-[80vw] mt-5">
          <div className=" text-black text-3xl font-bold p-10">Trending Movies</div>

        <Suspense
        fallback={
          <div className="text-3xl text-black">loading</div>
        }
        />
    
          <div className=" w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5
           ">
      
            {movies && movies.map((items) => <MovieCard key={items.id} items={items} />)}

          </div>




          <div className="p-10 flex items-center justify-center ">
            <div className="">
            <Pagination total={10} initialPage={1} 
             onChange={funky}
            />
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default page