import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shows: [],
  page:1,
  errors:[]
}

export const tvArrivingReducer = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    getTvArriving: (state,action) => {
      state.shows  =   action.payload
    },
    addErrortTvArriving:(state,action)=>{
        state.errors.push(action.payload)

    },
    removeErrortTvArriving:(state,action)=>{
        state.errors = []

    },
    chantTvArriving:(state,action)=>{
        state.page = action.payload
    }
  },
})

export const { getTvArriving,addErrortTvArriving,removeErrortTvArriving
,chantTvArriving } = tvArrivingReducer.actions
export default tvArrivingReducer.reducer