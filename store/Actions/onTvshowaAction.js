import axios from "axios";

const { getOntvShows,addErrorsOntvShows,removeErrorsOntvShows
    ,changOntvShows } = require("../Reducers/onTvShowsReducer");

export const asyncOntvShows = ()=>async(dispatch,getState)=>{
    const {page} = getState().OntvShows
    try {

        const {data} =  await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=d02161963e1b4bbfefcbd007a5db1f32&page=${page}`);
        dispatch(getOntvShows(data.results))

        
    } catch (error) {
        console.log(error)
        dispatch(addErrorsOntvShows(error.response.data.status_message))
        
    }

}