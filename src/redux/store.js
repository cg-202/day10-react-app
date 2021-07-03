import { createStore } from "@reduxjs/toolkit";

const initState = {
  counter: 100,
  todoList: [],
};

function AppReducer(state = initState, action) {
  switch (action.type) {
    case "INCREMENT":
      const newCounter = state.counter + 100;
      return { ...state, counter: newCounter };
    case "DECREMENT":
      const newCounter1 = state.counter - 10;
      return { ...state, counter: newCounter1 };
    default:
      return state;
  }
}

const store = createStore(AppReducer);
export { store };
