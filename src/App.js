import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";

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

export default App;
