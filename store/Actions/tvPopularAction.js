import axios from "axios";

const { getPopSHows,addErrorsPopSHows,removeErrorsPopSHows
    ,changPopSHows } = require("../Reducers/tvPopularReducer");


    export const asyncTvpopular = ()=>async(dispatch,getState)=>{
        const {page} = getState().OntvShows
        try {
    
            const {data} =  await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=03f1548b65a603b16ff790d32bce2275&page=1`);
            dispatch(getPopSHows(data.results))
    
            
        } catch (error) {
            console.log(error)
            console.log(error)
        }
    
    }