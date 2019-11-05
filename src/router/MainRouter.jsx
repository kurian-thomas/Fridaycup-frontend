import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Test from "../components/Test";
import Home from "../components/home/Home";

class Mainrouter extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default Mainrouter;
