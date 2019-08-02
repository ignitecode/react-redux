import React, { Component } from 'react';
import { List, Button, Icon, Image } from 'semantic-ui-react';
import './All.css';

export default class All extends Component {
  render() {
      return (
        <List verticalAlign='middle'>
          <List.Item>
            <List.Content floated='right'>
              <Button negative onClick={() => {}}>Remove</Button>
            </List.Content>
            <List.Content floated='left'>
              <Button basic icon onClick={() => {}}>
                <Icon name="star outline" />
              </Button>
            </List.Content>
            <List.Content>
              // Content goes here
            </List.Content>
          </List.Item>
        </List>
      )
  }
}
