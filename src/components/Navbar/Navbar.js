import React, { Component } from 'react';
import { Menu, Image, Input, Button } from 'semantic-ui-react';
import './Navbar.css';

class Navbar extends Component {
  render() {
      return (
          <Menu stackable>
            <Menu.Item>
              <Image alt="logo" height="30" width="30" src="https://github.com/ignitecode/react-photo/blob/part_4/src/resources/images/logo.png?raw=true" />
            </Menu.Item>
            <Menu.Item name="home" active>
              Home
            </Menu.Item>
            <Menu.Item name="favorites" onClick={() => this.props.onFavoriteClick()}>
              Favorites
            </Menu.Item>
            <Menu.Item name="search">
                <Input type="text" action  placeholder='Search'>
                    <input />
                    <Button type="button">Search</Button>
                </Input>
            </Menu.Item>
          </Menu>
      )
  }
}

export default Navbar;
