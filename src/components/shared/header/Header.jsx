import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Friday Cup
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
