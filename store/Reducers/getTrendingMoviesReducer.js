import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  page: 1,
  errors:[]
}

export const getTrendingMoviesReducer = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {

    getTrendingMovies: (state, action) => {
        state.movies = action.payload;
    },
    getTrendingMoviesPage: (state, action) => {
        state.page = action.payload;
    },


  },
  
})

export const {getTrendingMovies , getTrendingMoviesPage} = getTrendingMoviesReducer.actions

export default getTrendingMoviesReducer.reducer