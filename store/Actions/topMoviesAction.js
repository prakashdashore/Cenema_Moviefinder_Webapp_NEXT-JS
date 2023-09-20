import axios from "axios";

const {getMoviesTop,addErrorsTop,removeErrorsTop,changTopPage  } = require("../Reducers/topMoviesReducer");

export const asyncGetTopMovies = ()=>async(dispatch , getState)=>{

    const {page} = getState().TopMoviesReducer

    try {
         const {data} =  await axios.get(`  https://api.themoviedb.org/3/movie/top_rated?api_key=d02161963e1b4bbfefcbd007a5db1f32&page=${page}`)

         dispatch(getMoviesTop(data.results))



        
    } catch (error) {
        console.log(error)
        
    }
}