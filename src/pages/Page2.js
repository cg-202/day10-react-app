import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, incrementAction } from "../redux/store";

export function Page2() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [inputText, setInputText] = useState("");
  const updateInputText = (e) => {
    setInputText(e.target.value);
  };

  const addNewTodo = () => {
    dispatch(addTodoAction(inputText));
    setInputText("");
  };

  const increment = () => {
    dispatch(incrementAction());
  };

  return (
    <div>
      <h1>Page2</h1>
      <div className="alert alert-secondary">{state.counter}</div>

      <input
        type="button"
        value="Increment"
        onClick={increment}
        className="btn btn-secondary w-100 mb-2"
      />

      <input
        type="text"
        value={inputText}
        onChange={updateInputText}
        placeholder="Enter Todo"
        className="form-control form-control-lg mb-1"
      />
      <input
        type="button"
        value="Add New Todo"
        onClick={addNewTodo}
        className="btn btn-secondary w-100 mb-1"
      />

      <h1>All Todos</h1>
      {state.todoList.map((item, index) => (
        <div key={index} className="alert alert-secondary">
          {item}
        </div>
      ))}
    </div>
  );
}
