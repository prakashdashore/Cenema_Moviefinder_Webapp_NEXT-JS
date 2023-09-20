import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  page:1,
  errors:[]
}

export const TopMoviesReducer = createSlice({
  name: 'top',
  initialState,
  reducers: {
    getMoviesTop: (state,action) => {
      state.movies  =   action.payload
    },
    addErrorsTop:(state,action)=>{
        state.errors.push(action.payload)

    },
    removeErrorsTop:(state,action)=>{
        state.errors = []

    },
    changTopPage:(state,action)=>{
        state.page = action.payload
    }


  },
})




export const {getMoviesTop,addErrorsTop,removeErrorsTop,changTopPage} = TopMoviesReducer.actions

export default TopMoviesReducer.reducer