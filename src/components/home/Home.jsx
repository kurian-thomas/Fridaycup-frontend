import React, { Component } from "react";
import Header from "../shared/header/Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Home;
