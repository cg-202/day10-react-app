import { useDispatch, useSelector } from "react-redux";

export function Page1() {
  const dispatch = useDispatch();
  // we are slelecting every things.
  const state = useSelector((state) => state);

  // filter out :: t-shirt :: counter
  const counter = useSelector((state) => state.counter);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Page1</h1>

      <div className="alert alert-secondary">{state.counter}</div>
      <input
        type="button"
        value="Increment"
        onClick={increment}
        className="btn btn-secondary w-100 mb-1"
      />
      <input
        type="button"
        value="Decrement"
        onClick={decrement}
        className="btn btn-info w-100"
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        distinctio maiores labore fugit fugiat alias modi! Voluptas rerum et
        fuga vel beatae, dolores aspernatur reprehenderit sequi voluptates
        maiores, ullam iusto.
      </p>
    </div>
  );
}
