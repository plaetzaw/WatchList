import axios from "axios";
import { apiKey } from "../../components/apiKey";
import {
  LOADING_DATA,
  SET_HOT_MOVIES,
  SET_POPULAR_MOVIES,
  SET_UPCOMING_MOVIES,
  FILTER_BY_GENRE,
  SET_SINGLE_MOVIE,
  BUILD_MOVIE_CREDITS,
  BUILD_SIMILAR_MOVIES,
  BUILD_MOVIE_DETAILS,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
} from "./actionTypes";

//Add to WatchList
export const addToWatchList = (id) => (dispatch) => {
  dispatch({ type: ADD_TO_WATCHLIST, payload: id });
  console.log("Dispatching Watchlist Add Toggle");
  console.log(id);
};

//Remove from WatchList
export const removeFromWatchList = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_WATCHLIST, payload: id });
  console.log("Dispatching Watchlist Remove Toggle");
};

//Now Playing
export const getMovies = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
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
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
    .then((movies) => {
      dispatch({ type: SET_POPULAR_MOVIES, payload: movies.data.results });
      console.log(movies.data.results);
    });
};

// Upcoming
export const getUpcomingMovies = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=2`
    )
    .then((movies) => {
      dispatch({ type: SET_UPCOMING_MOVIES, payload: movies.data.results });
      console.log(movies.data.results);
    });
};

//Movie Genres
export const filterByGenre = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    )
    .then((sortMovies) => {
      dispatch({ type: FILTER_BY_GENRE, payload: sortMovies.data });
      console.log(sortMovies);
    });
};

export const getSingleMovieDetail = (movieId) => async (dispatch) => {
  console.log("LOOKING FOR SINGLE MOVIE DETAILS...");
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    )
    .then((res) => {
      dispatch({
        type: SET_SINGLE_MOVIE,
        payload: res.data,
      });
      dispatch({
        type: BUILD_MOVIE_DETAILS,
        payload: res.data,
      });
    });
  console.log("LOOKING FOR THE SIMILAR MOVIE DETAILS...");
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}&language=en-US`
    )
    .then((res) => {
      console.log("FOUND THE SIMILAR MOVIES...UPDATING STATE...");
      res.data = JSON.parse(JSON.stringify(res.data));
      let similar = [];
      console.log(res.data.results);
      let missing = "No Movies Found";
      if (!res.data.results) {
        console.log("NOTHING FOUND :'(");
        dispatch({
          type: BUILD_SIMILAR_MOVIES,
          payload: missing,
        });
      } else if (res.data.results) {
        console.log("Found Similar Movie ");
        let info = res.data.results;
        info.forEach((item) => {
          similar.push(item);
        });
        dispatch({
          type: BUILD_SIMILAR_MOVIES,
          payload: similar,
        });
      }
    });
  console.log("vero: dispatch called");
  console.log("LOOKING FOR SINGLE MOVIE CREDITS...");
  await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
    )
    .then((res) => {
      console.log("vero: credit response");
      dispatch({
        type: BUILD_MOVIE_CREDITS,
        payload: res.data,
      });
    });
};
