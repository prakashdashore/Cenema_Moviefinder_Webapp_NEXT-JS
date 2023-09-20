import axios from "axios";


export const getTrendingMoviesData = async (page)=>{
    const {data} =  await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=03f1548b65a603b16ff790d32bce2275&page=${page}`)
    
    await waiting(2000)
    return data.results ; 


}













export const waiting = (ms)=>{

    return new Promise((resolve)=>{setTimeout(resolve,ms)})

};