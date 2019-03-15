import * as actionTypes from "../actions";
const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULTS:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result
        })
      };
    case actionTypes.DELETE_RESULTS:
      const newArray = [...state.results];
      newArray.splice(action.resultsElID, 1);
      return { ...state, results: [...newArray] };
    /*       const newArray = state.results.filter(
        results => results.id !== action.resultsElID
      );
      return { ...state, results: [...newArray] }; */
    default:
      return state;
  }
};

export default reducer;
