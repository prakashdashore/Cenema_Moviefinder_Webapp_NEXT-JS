import { configureStore } from '@reduxjs/toolkit'
import getTrendingMoviesReducer from './Reducers/getTrendingMoviesReducer'
import SearchMovieReducer from './Reducers/SearchMovieReducer'
import upComMovieReducer  from './Reducers/upComMoviesReducer'
import OntvShows from './Reducers/onTvShowsReducer'
import NowPlayingMoviesReducer from './Reducers/nowPlayingMoviesReducer'
import TopMoviesReducer from './Reducers/topMoviesReducer'
import tvPopularReducer from './Reducers/tvPopularReducer'
import tvArrivingReducer from './Reducers/tvArrivingReducer'
import topTvReducer from './Reducers/toptvReducer'
export const store = configureStore({
  reducer: {
    getTrendingMoviesReducer,
    SearchMovieReducer,
    upComMovieReducer,
    OntvShows,
    NowPlayingMoviesReducer,
    TopMoviesReducer,
    tvPopularReducer,
    tvArrivingReducer,
    topTvReducer
  },
})