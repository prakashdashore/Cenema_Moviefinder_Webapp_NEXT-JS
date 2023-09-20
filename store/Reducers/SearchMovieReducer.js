import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    page:1,
    errors:[]
}

export const SearchMovieReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getMoviesSearch: (state,action) => {
      state.movies  =   action.payload
    },
    addErrorsSearch:(state,action)=>{
        state.errors.push(action.payload)

    },
    removeErrorsSearch:(state,action)=>{
        state.errors = []

    },
    changSearchPage:(state,action)=>{
        state.page = action.payload
    }
  }
})


export const {getMoviesSearch, addErrorsSearch , removeErrorsSearch , changSearchPage } = SearchMovieReducer.actions
export default SearchMovieReducer.reducer