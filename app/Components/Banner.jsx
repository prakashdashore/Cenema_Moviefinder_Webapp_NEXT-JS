"use client";

import React, { useState } from "react";
import { SearchIcon } from "./SearchIcon";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesSearch } from "@/store/Reducers/SearchMovieReducer";
import { GetSearchMovies } from "@/utils/fetch";
import { useRouter } from "next/navigation";
import { asyncGetMoviesSearch } from "@/store/Actions/SearchMovieAction";

const Banner = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const {movies}= useSelector(state => state.SearchMovieReducer)
  console.log("movisss" , movies)
  const [input, setInput] = useState('')
  const searchHandler = async(e)=>{
    e.preventDefault()
    if(!input  || input.trim().length <=1 ){
       return alert("please enter valid input !!")
    }
    const d = await GetSearchMovies(input)
    dispatch(getMoviesSearch(d))
    router.push('/search')
    
  
  }



  return (
    <>
      <div className=" mt-14 w-[90vw] h-[50vh] bg-pink-500 mx-auto ">
        <div className="relative w-full h-full bg-pink-400">
          <img
            className="absolute object-fill w-[100%] h-[100%]  "
            src="https://static.vecteezy.com/system/resources/previews/014/634/862/non_2x/cinema-cartoon-web-banner-young-girl-with-pop-corn-free-vector.jpg"
            alt=""
          />

          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[85%]">
            {/* <h1 className="text-6xl font-bold text-white">TMDB</h1>
          <p className="text-2xl font-semibold text-white">
          Millions of movies, TV shows and people to discover. Explore now.
          </p> */}
            <div className="mt-10 bg-[#E4E4E7] flex items-center justify-between w-full px-5  rounded-2xl">
              <form onSubmit={searchHandler} className="w-full flex items-center">
                <SearchIcon />
                <input
                  type="text"
                  name="search"
                  value={input}
                  onChange={(e)=>setInput(e.target.value)}
                  placeholder="Search movies , persons & more "
                  className=" bg-[#E4E4E7] relative w-full h-fit flex gap-4 font-normal px-5 py-5 outline-none border-none text-lg "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
