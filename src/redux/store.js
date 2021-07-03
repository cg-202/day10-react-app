import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  counter: 100,
  todoList: [],
  serverTodoList: [],
};

// DEFINE YOUR REUSABLE ACTIONS
const INCREMENT_ACTION_TYPE = "INCREMENT_ACTION_TYPE";
const DECREMENT_ACTION_TYPE = "DECREMENT_ACTION_TYPE";
const ADD_TODO_ACTION_TYPE = "ADD_TODO_ACTION_TYPE";
const GET_SERVER_TODO_ACTION_TYPE = "GET_SERVER_TODO_ACTION_TYPE";

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

// THIS ACTION WILL GET YOU THE DATA FROM THE SERVER.
// NETWORK CALL :: RETURNS ARROW FUNCTION.
export function getTodoListAction() {
  return async (dispatch) => {
    // API CALL
    const url = `https://jsonplaceholder.typicode.com/todos`; // THIS WILL BE OUR SERVIER API
    const response = await axios.get(url); // this is a nework call.

    // UPDATE THE UI
    // console.log(response.data);
    dispatch({ type: GET_SERVER_TODO_ACTION_TYPE, payload: response.data });
  };
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

    case GET_SERVER_TODO_ACTION_TYPE:
      return { ...state, serverTodoList: action.payload };

    default:
      return state;
  }
}

// const store = createStore(AppReducer);
const store = createStore(AppReducer, applyMiddleware(thunk));
export { store };
