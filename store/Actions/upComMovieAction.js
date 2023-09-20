import axios from "axios";
require("dotenv").config();

const { getMoviesUpcoming, addErrorsUpcoming,removeErrorsUpcoming,changUpcomingPage } = require("../Reducers/upComMoviesReducer");

export const asyncUpcomingMovies = ()=>async(dispatch,getState)=>{
    const {page} =  getState().upComMovieReducer
    // console.log("this is in action" , page)

    try {

        const {data} =  await axios.get(` https://api.themoviedb.org/3/movie/upcoming?api_key=d02161963e1b4bbfefcbd007a5db1f32&page=${page}`);
        dispatch(getMoviesUpcoming(data.results))

    } catch (error) {
        console.log(error)
        console.log(error)
        
    }

}