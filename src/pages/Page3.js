import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "../redux/store";

export function Page3() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const increment = () => {
    dispatch(incrementAction());
  };

  return (
    <div>
      <h1>Page3</h1>

      <div className="alert alert-secondary">{state.counter}</div>

      <input
        type="button"
        value="Increment"
        onClick={increment}
        className="btn btn-secondary w-100 mb-1"
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        consequatur sit libero sequi aut repellendus delectus earum tempore,
        optio beatae eveniet perferendis dolor itaque unde sunt, voluptate
        ducimus aspernatur? Dolorem!
      </p>
    </div>
  );
}
