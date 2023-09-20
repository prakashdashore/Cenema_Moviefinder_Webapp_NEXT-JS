import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  page:1,
  errors:[]
}

export const upComMovieReducer = createSlice({
  name: 'upcoming',
  initialState,
  reducers: {
    getMoviesUpcoming: (state,action) => {
      state.movies  =   action.payload
    },
    addErrorsUpcoming:(state,action)=>{
        state.errors.push(action.payload)

    },
    removeErrorsUpcoming:(state,action)=>{
        state.errors = []

    },
    changUpcomingPage:(state,action)=>{
        state.page = action.payload
    }


  },
})




export const { getMoviesUpcoming, addErrorsUpcoming,removeErrorsUpcoming,changUpcomingPage } = upComMovieReducer.actions

export default upComMovieReducer.reducer