import { useSelector } from "react-redux";

export function Page1() {
  // we are slelecting every things.
  const state = useSelector((state) => state);

  // filter out :: t-shirt :: counter
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h1>Page1</h1>

      <div className="alert alert-secondary">{state.counter}</div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        distinctio maiores labore fugit fugiat alias modi! Voluptas rerum et
        fuga vel beatae, dolores aspernatur reprehenderit sequi voluptates
        maiores, ullam iusto.
      </p>
    </div>
  );
}
