const {
  getTopTv,
  addErrortTopTv,
  removeErrortTopTv,
  chantTopTv,
} = require("../Reducers/toptvReducer");



import axios from "axios";

export const asuyncTopTv = () => async (dispatch, getState) => {
//   const { page } = getState().OntvShows;
  try {
    const { data } = await axios.get(
        ` https://api.themoviedb.org/3/tv/top_rated?api_key=03f1548b65a603b16ff790d32bce2275&page=1`
        
    
    );
    dispatch(getTopTv(data.results));
  } catch (error) {
    console.log(error);
    console.log(error);
  }
};
