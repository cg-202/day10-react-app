import { createStore } from "@reduxjs/toolkit";

const initState = {
  counter: 100,
  todoList: [],
};

function AppReducer(state = initState, action) {
  return state;
}

const store = createStore(AppReducer);
export { store };
