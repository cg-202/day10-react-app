import { useDispatch, useSelector } from "react-redux";
import { incrementAction } from "../redux/store";

export function Page2() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

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
        className="btn btn-secondary w-100 mb-1"
      />

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        odio blanditiis ratione quaerat deleniti possimus iusto quo? Quos iure
        voluptatibus eveniet debitis repellat corrupti quis error quisquam cum.
        Cupiditate, mollitia!
      </p>
    </div>
  );
}
