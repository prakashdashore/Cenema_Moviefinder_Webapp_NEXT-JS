import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shows: [],
  page:1,
  errors:[]
}

export const OntvShows = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    getOntvShows: (state,action) => {
      state.shows  =   action.payload
    },
    addErrorsOntvShows:(state,action)=>{
        state.errors.push(action.payload)

    },
    removeErrorsOntvShows:(state,action)=>{
        state.errors = []

    },
    changOntvShows:(state,action)=>{
        state.page = action.payload
    }
  },
})

export const { getOntvShows,addErrorsOntvShows,removeErrorsOntvShows
,changOntvShows } = OntvShows.actions
export default OntvShows.reducer