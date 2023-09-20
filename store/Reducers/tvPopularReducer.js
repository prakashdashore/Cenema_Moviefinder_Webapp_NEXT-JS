import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shows: [],
  page:1,
  errors:[]
}

export const tvPopularReducer = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    getPopSHows: (state,action) => {
      state.shows  =   action.payload
    },
    addErrorsPopSHows:(state,action)=>{
        state.errors.push(action.payload)

    },
    removeErrorsPopSHows:(state,action)=>{
        state.errors = []

    },
    changPopSHows:(state,action)=>{
        state.page = action.payload
    }
  },
})

export const { getPopSHows,addErrorsPopSHows,removeErrorsPopSHows
,changPopSHows } = tvPopularReducer.actions
export default tvPopularReducer.reducer