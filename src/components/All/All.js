import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Button, Icon, Image } from 'semantic-ui-react';
import './All.css';

const mapStateToProps = (state) => {
  return {
    items: state.items.allItems
  }
}

class All extends Component {
  render() {
      return (
        <List verticalAlign='middle'>
        {
          this.props.items.map(item => {
            return (
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
            )
          })
        }
        </List>
      )
  }
}

export default connect(mapStateToProps)(All);
