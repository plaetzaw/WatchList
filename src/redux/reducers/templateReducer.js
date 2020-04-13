import {
  TESTCASE1,
  TESTCASE_ADD,
  TESTCASE_DELETE,
  LOADING_DATA,
  SET_HOT_MOVIES,
} from "../actions/actionTypes";

let templateReducer = (state, action) => {
  ///initialize state
  if (state === undefined) {
    state = {
      count: 0,
      someArray: [
        {
          id: 1,
          name: "Zard",
          age: "Phoenix",
        },
        {
          id: 2,
          name: "Nargul",
          age: "Roar",
        },
      ], ///array of objects
      loading: false,
      movies: [],
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
        return item.id != action.id;
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
    default:
      return state;
  }
};

export default templateReducer;
