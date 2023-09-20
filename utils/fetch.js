
import axios from "axios"

export const GetSearchMovies =async (movieName)=>{
    try {
        const {data} = await  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=03f1548b65a603b16ff790d32bce2275&query=${movieName}`);
    
        await waiting(2000)
        return data.results;
        
    } catch (error) {
        console.log(error)
        
    }




}











export const waiting = ms => new Promise((res)=> setTimeout(res , ms))
