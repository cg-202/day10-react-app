import { createStore } from "@reduxjs/toolkit";

const initState = {
  counter: 100,
  todoList: [],
};

// DEFINE YOUR REUSABLE ACTIONS
export function incrementAction() {
  return { type: "INCREMENT" };
}

export function decrementAction() {
  return { type: "DECREMENT" };
}

export function addTodoAction(payload) {
  return { type: "ADD_TODO", payload: payload };
}

// ACTION :: TYPE & PAYLOAD
function AppReducer(state = initState, action) {
  switch (action.type) {
    case "INCREMENT":
      const newCounter = state.counter + 100;
      return { ...state, counter: newCounter };
    case "DECREMENT":
      const newCounter1 = state.counter - 10;
      return { ...state, counter: newCounter1 };

    case "ADD_TODO":
      const newtodoList = [action.payload, ...state.todoList];
      return { ...state, todoList: newtodoList };

    default:
      return state;
  }
}

const store = createStore(AppReducer);
export { store };
