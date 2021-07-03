import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/** Common Navitation */}
      <div className="bg-dark text-light p-2 d-flex justify-content-between">
        <Link to="/page1">
          <h3>Page1</h3>
        </Link>
        <Link to="/page2">
          <h3>Page2</h3>
        </Link>
        <Link to="/page3">
          <h3>Page3</h3>
        </Link>
      </div>

      <Route exact path="/" component={Page1} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
      <Route exact path="/page3" component={Page3} />
    </Router>
  );
}

function Page1() {
  return (
    <div>
      <h1>Page1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        distinctio maiores labore fugit fugiat alias modi! Voluptas rerum et
        fuga vel beatae, dolores aspernatur reprehenderit sequi voluptates
        maiores, ullam iusto.
      </p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1>Page2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        odio blanditiis ratione quaerat deleniti possimus iusto quo? Quos iure
        voluptatibus eveniet debitis repellat corrupti quis error quisquam cum.
        Cupiditate, mollitia!
      </p>
    </div>
  );
}

function Page3() {
  return (
    <div>
      <h1>Page3</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
        consequatur sit libero sequi aut repellendus delectus earum tempore,
        optio beatae eveniet perferendis dolor itaque unde sunt, voluptate
        ducimus aspernatur? Dolorem!
      </p>
    </div>
  );
}

export default App;
