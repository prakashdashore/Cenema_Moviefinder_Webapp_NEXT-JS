const {
  getTvArriving,
  addErrortTvArriving,
  removeErrortTvArriving,
  chantTvArriving,
} = require("../Reducers/tvArrivingReducer");

import axios from "axios";

export const asyncTvArriving = () => async (dispatch, getState) => {
//   const { page } = getState().OntvShows;
  try {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=03f1548b65a603b16ff790d32bce2275&page=1`
    
    );
    dispatch(getTvArriving(data.results));
  } catch (error) {
    console.log(error);
    console.log(error);
  }
};
