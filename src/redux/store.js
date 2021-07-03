import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initState = {
  counter: 100,
  todoList: [],
};

// DEFINE YOUR REUSABLE ACTIONS
const INCREMENT_ACTION_TYPE = "INCREMENT";
const DECREMENT_ACTION_TYPE = "DECREMENT";
const ADD_TODO_ACTION_TYPE = "ADD_TODO";

export function incrementAction() {
  // WE ARE ONLY UPDTING THE UI
  return { type: INCREMENT_ACTION_TYPE };
}

export function decrementAction() {
  // WE ARE ONLY UPDTING THE UI
  return { type: DECREMENT_ACTION_TYPE };
}

export function addTodoAction(payload) {
  // WE ARE ONLY UPDTING THE UI
  return { type: ADD_TODO_ACTION_TYPE, payload: payload };
}

// ACTION :: TYPE & PAYLOAD
function AppReducer(state = initState, action) {
  switch (action.type) {
    case INCREMENT_ACTION_TYPE:
      const newCounter = state.counter + 100;
      return { ...state, counter: newCounter };
    case DECREMENT_ACTION_TYPE:
      const newCounter1 = state.counter - 10;
      return { ...state, counter: newCounter1 };

    case ADD_TODO_ACTION_TYPE:
      const newtodoList = [action.payload, ...state.todoList];
      return { ...state, todoList: newtodoList };

    default:
      return state;
  }
}

// const store = createStore(AppReducer);
const store = createStore(AppReducer, applyMiddleware(thunk));
export { store };
