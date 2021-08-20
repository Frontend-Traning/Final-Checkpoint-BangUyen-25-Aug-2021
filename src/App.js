import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import World from "./component/world";
import SlideShow from "./component/slides";
import Shape from "./component/shape";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <World />
        </Route>
        <Route path="/hook">
          <SlideShow />
        </Route>
        <Route path="/shape">
          <Shape />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
