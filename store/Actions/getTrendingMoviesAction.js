import { waiting } from "@/utils/fetch";

const { default: axios } = require("axios");
const { getTrendingMovies } = require("../Reducers/getTrendingMoviesReducer");



export const asyncGetTrendingMovies  = ()=> async (dispatch , getState)=>{

    const {page} = getState().getTrendingMoviesReducer
    // console.log( "From state", page)

    const {data} =  await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d02161963e1b4bbfefcbd007a5db1f32&page=${page}`);
    dispatch(getTrendingMovies(data.results));

}