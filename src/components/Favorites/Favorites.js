import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Icon, Button, Image } from 'semantic-ui-react';
import './Favorites.css';

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.allFavorites
  }
}

class Favorites extends Component {
  render() {
      return (
        <List divided verticalAlign='middle'>
        {
          this.props.favorites.map(favorite => {
            return (
              <List.Item key={favorite.id}>
                <List.Content floated='right'>
                  <Button negative onClick={() => {}}>Remove</Button>
                </List.Content>
                <List.Content floated="left">
                    <Icon name="star" color='yellow' />
                </List.Content>
                <List.Content>
                  { favorite.value }
                </List.Content>
              </List.Item>
            )
          })
        }
        </List>
      )
  }
}

export default connect(mapStateToProps)(Favorites);
