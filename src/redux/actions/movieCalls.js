import axios from "axios";
import {
  LOADING_DATA,
  SET_HOT_MOVIES,
  GO_TO_MOVIE,
  FILTER_BY_GENRE,
} from "./actionTypes";

//Now Playing
export const getMovies = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US&page=1"
    )
    .then((movies) => {
      dispatch({ type: SET_HOT_MOVIES, payload: movies.data.results });
      console.log("GET MOVIE REQUEST");
      console.log(movies.data.results);
    });
};

// Popular Movies
export const getPopularMovies = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US&page=1"
    )
    .then((movies) => {
      dispatch({ type: "", payload: movies.data.results });
      console.log(movies.data.results);
    });
};

// Upcoming
export const getUpcomingMovies = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US&page=1"
    )
    .then((movies) => {
      dispatch({ type: "", payload: movies.data.results });
      console.log(movies.data.results);
    });
};

//Get movie info by ID
export const getSpecificMovie = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      "https://api.themoviedb.org/3/movie/{movie_id}?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US"
    )
    .then((thisMovie) => {
      dispatch({ type: GO_TO_MOVIE, payload: thisMovie.data });
      console.log(thisMovie);
    });
};

//Movie Genres
export const filterByGenre = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US"
    )
    .then((sortMovies) => {
      dispatch({ type: FILTER_BY_GENRE, payload: sortMovies.data });
      console.log(sortMovies);
    });
};
