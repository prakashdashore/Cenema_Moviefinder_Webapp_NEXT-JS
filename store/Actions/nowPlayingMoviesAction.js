const { default: axios } = require("axios");
const { getMoviesNowPlaying , addErrorsNowPlaying , removeErrorsNowPlaying , changNowPlayingPage } = require("../Reducers/nowPlayingMoviesReducer");


export  const asyncGetNowPlaying = ()=>async(dispatch , getState)=>{
    const {page}  =  getState().NowPlayingMoviesReducer
    console.log(page)
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=d02161963e1b4bbfefcbd007a5db1f32&page=${page}`);

        dispatch(getMoviesNowPlaying(data.results))

        
    } catch (error) {
        console.log(error)
        
    }

}

