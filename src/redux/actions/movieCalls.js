import axios from "axios";
import { LOADING_DATA, SET_HOT_MOVIES } from "./actionTypes";

export const getMovies = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US&page=1"
      // "https://api.themoviedb.org/3/movie/550?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee"
    )
    .then((movies) => {
      dispatch({ type: SET_HOT_MOVIES, payload: movies.data });
      console.log(movies);
    });
};

// export const getBadMovies = () => (dispatch) => {
//   dispatch({ type: LOADING_DATA });
//   axios.get("URLSTUFF").then();
// };
