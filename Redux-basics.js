const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

//Reducer
//Function action
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "ADD_Counter":
      return { ...state, counter: state.counter + action.value };
    default:
      return state;
  }
};

//Store
//Main database
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
//to notify us of changes
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

//Dispatching Action
store.dispatch({ type: "INC_Counter" });
store.dispatch({ type: "ADD_Counter", value: 10 });
console.log(store.getState());
