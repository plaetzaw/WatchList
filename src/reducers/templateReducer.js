import {
  TESTCASE1,
  TESTCASE_ADD,
  TESTCASE_DELETE,
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
    default:
      return state;
  }
};

export default templateReducer;
