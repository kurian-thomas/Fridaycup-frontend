import React, { Component } from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";

class Sidebar_nav extends Component {
  state = { activeItem: "home" };

  render() {
    const { activeItem } = this.state;
    const { visible, onChange } = this.props;
    return (
      <div>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => onChange("visible", false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a" href="/test">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Segment basic></Segment>
        </Sidebar.Pusher>
      </div>
    );
  }
}

class Header_nav extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { visible, onChange } = this.props;
    const titleStyle = {
      bottom: "0px"
    };
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            active={activeItem === "home"}
            onClick={() => onChange("visible", true)}
          >
            <Icon name="bars" size="large" />
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              name="FRIDAY CUP"
              active={activeItem === "FRIDAY CUP"}
              onClick={this.handleItemClick}
            >
              <div>
                <h2 style={titleStyle}>FRIDAY CUP</h2>
              </div>
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right"></Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export { Header_nav, Sidebar_nav };
