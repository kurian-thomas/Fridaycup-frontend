import React, { Component } from "react";
import { Sidebar_nav, Header_nav } from "./sidebar_head";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  onChange = (key, value) => {
    this.setState({ [key]: value });
    console.log(key, value);
  };
  render() {
    const { visible } = this.state;

    return (
      <div>
        <Header_nav visible={visible} onChange={this.onChange} />
        <Sidebar_nav visible={visible} onChange={this.onChange} />
      </div>
    );
  }
}

export default Navbar;
