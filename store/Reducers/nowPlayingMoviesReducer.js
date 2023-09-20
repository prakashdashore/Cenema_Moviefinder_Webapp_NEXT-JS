import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  page: 1,
  errors: [],
};

export const NowPlayingMoviesReducer = createSlice({
  name: "NowPlayingMoviesReducer",
  initialState,
  reducers: {
    getMoviesNowPlaying: (state, action) => {
      state.movies = action.payload;
    },
    addErrorsNowPlaying: (state, action) => {
      state.errors.push(action.payload);
    },
    removeErrorsNowPlaying: (state, action) => {
      state.errors = [];
    },
    changNowPlayingPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  getMoviesNowPlaying,
  addErrorsNowPlaying,
  removeErrorsNowPlaying,
  changNowPlayingPage,
} = NowPlayingMoviesReducer.actions;

export default NowPlayingMoviesReducer.reducer;
