import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shows: [],
  page:1,
  errors:[]
}

export const topTvReducer = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    getTopTv: (state,action) => {
      state.shows  =   action.payload
    },
    addErrortTopTv:(state,action)=>{
        state.errors.push(action.payload)

    },
    removeErrortTopTv:(state,action)=>{
        state.errors = []

    },
    chantTopTv:(state,action)=>{
        state.page = action.payload
    }
  },
})

export const { getTopTv,addErrortTopTv,removeErrortTopTv
,chantTopTv } = topTvReducer.actions
export default topTvReducer.reducer