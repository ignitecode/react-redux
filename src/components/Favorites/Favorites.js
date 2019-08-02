import React, { Component } from 'react';
import { List, Icon, Button, Image } from 'semantic-ui-react';
import './Favorites.css';

export default class Favorites extends Component {
  render() {
      return (
        <List divided verticalAlign='middle'>
          <List.Item>
            <List.Content floated='right'>
              <Button negative onClick={() => {}}>Remove</Button>
            </List.Content>
            <List.Content floated="left">
                <Icon name="star" color='yellow' />
            </List.Content>
            <List.Content>
              // Content Goes here
            </List.Content>
          </List.Item>
        </List>
      )
  }
}
