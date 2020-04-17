import axios from "axios";
import {
  LOADING_DATA,
  SET_HOT_MOVIES,
  SET_POPULAR_MOVIES,
  SET_UPCOMING_MOVIES,
  // GO_TO_MOVIE,
  FILTER_BY_GENRE,
  SET_SINGLE_MOVIE,
  BUILD_MOVIE_CREDITS,
  BUILD_SIMILAR_MOVIES,
  BUILD_MOVIE_DETAILS,
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
      dispatch({ type: SET_POPULAR_MOVIES, payload: movies.data.results });
      console.log(movies.data.results);
    });
};

// Upcoming
export const getUpcomingMovies = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US&page=2"
    )
    .then((movies) => {
      dispatch({ type: SET_UPCOMING_MOVIES, payload: movies.data.results });
      console.log(movies.data.results);
    });
};

//Get movie info by ID
//NOT BEING USED BECAUSE REASONS
// export const getSpecificMovie = () => (dispatch) => {
//   dispatch({ type: LOADING_DATA });
//   axios
//     .get(
//       `https://api.themoviedb.org/3/movie/${this.props.movies.title}?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US`
//     )
//     .then((thisMovie) => {
//       dispatch({ type: GO_TO_MOVIE, payload: thisMovie.data });
//       console.log(thisMovie);
//     });
// };

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

export const getSingleMovieDetail = (movieId) => (dispatch) => {
  console.log("LOOKING FOR SINGLE MOVIE DETAILS...");

  axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US`
    )
    .then((res) => {
      console.log("FOUND THE MOVIE DETAILS...UPDATING STATE...");
      console.log(res);

      dispatch({
        type: SET_SINGLE_MOVIE,
        payload: res.data,
      });
      dispatch({
        type: BUILD_MOVIE_DETAILS,
        payload: res.data,
      });

      console.log("LOOKING FOR THE SIMILAR MOVIE DETAILS...");

      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US`
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
          }
          // [...res].forEach((item) => {

          dispatch({
            type: BUILD_SIMILAR_MOVIES,
            payload: similar,
          });

          console.log(res);
          console.log(res.data);
          console.log("LOOKING FOR SINGLE MOVIE CREDITS...");

          axios
            .get(
              `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9c4a5ca1df6fbe981b6a3481d0b13dee&language=en-US`
            )

            .then((res) => {
              console.log("FOUND THE MOVIE CREDITS...UPDATING STATE...");
              console.log(res);
              dispatch({
                type: BUILD_MOVIE_CREDITS,
                payload: res.data,
                // payload: res.data,
              });
              return;
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};
