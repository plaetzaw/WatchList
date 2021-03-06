import {
  TESTCASE1,
  TESTCASE_ADD,
  TESTCASE_DELETE,
  LOADING_DATA,
  SET_HOT_MOVIES,
  SET_POPULAR_MOVIES,
  SET_UPCOMING_MOVIES,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  GO_TO_MOVIE,
  FILTER_BY_GENRE,
  SET_SINGLE_MOVIE,
  BUILD_SIMILAR_MOVIES,
  BUILD_MOVIE_CREDITS,
  BUILD_MOVIE_DETAILS,
} from "../actions/actionTypes";

let templateReducer = (state, action) => {
  ///initialize state
  if (state === undefined) {
    state = {
      loading: false,
      movies: [],
      specificMovie: {
        credits: [],
        details: [],
        similar: [],
      },
      watchlist: [],
      genrelist: [],
      singleMovie: "",
    };
  }
  switch (action.type) {
    case TESTCASE1:
      return {
        ...state,
        count: state.count + action.count,
      };
    case TESTCASE_ADD:
      //adding to array
      return {
        ...state,
        someArray: state.someArray.concat(action.data),
      };
    case TESTCASE_DELETE:
      //deleting from array
      let filteredArray = state.someArray.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        someArray: filteredArray,
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_HOT_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case SET_UPCOMING_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.concat(action.payload),
      };
    case REMOVE_FROM_WATCHLIST:
      let newArray = state.watchlist.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        watchlist: newArray,
      };
    case GO_TO_MOVIE:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case FILTER_BY_GENRE:
      return {
        ...state,
        loading: false,
        genrelist: action.payload,
      };
    case SET_SINGLE_MOVIE:
      return {
        ...state,
        singleMovie: action.payload,
      };

    case BUILD_MOVIE_DETAILS:
      return {
        ...state,
        specificMovie: {
          ...state.specificMovie,
          details: action.payload,
        },
      };
    case BUILD_SIMILAR_MOVIES:
      return {
        ...state,
        specificMovie: {
          ...state.specificMovie,
          similar: action.payload,
        },
      };
    case BUILD_MOVIE_CREDITS:
      return {
        ...state,
        specificMovie: {
          ...state.specificMovie,
          credits: action.payload,
        },
      };
    default:
      return state;
  }
};

export default templateReducer;
