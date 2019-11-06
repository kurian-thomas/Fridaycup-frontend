import React, { Component } from "react";
import { Sidebar_nav, Header_nav } from "./shared/header/Header";

class Test extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header_nav />
        <Sidebar_nav />
      </div>
    );
  }
}

export default Test;
