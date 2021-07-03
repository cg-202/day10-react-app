import { useSelector } from "react-redux";

export function Page3() {
  const state = useSelector((state) => state);

  return (
    <div>
      <h1>Page3</h1>

      <div className="alert alert-secondary">{state.counter}</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        consequatur sit libero sequi aut repellendus delectus earum tempore,
        optio beatae eveniet perferendis dolor itaque unde sunt, voluptate
        ducimus aspernatur? Dolorem!
      </p>
    </div>
  );
}
