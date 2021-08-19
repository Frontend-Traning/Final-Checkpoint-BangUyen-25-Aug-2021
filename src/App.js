import "./App.css";
import React from "react";
import World from "./component/world";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SlideShow from "./component/slides";
import { slides } from "./consts/slides";
import Shape from "./component/shape";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <World />
        </Route>
        <Route path="/hook">
          <SlideShow slides={slides} />
        </Route>
        <Route path="/shape">
          <Shape />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
