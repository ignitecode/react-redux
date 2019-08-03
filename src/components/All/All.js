import React, { Component } from 'react';
import { removeItem, addFavorite, updateFavoriteIcon } from '../../actions/index';
import { connect } from 'react-redux';
import { List, Button, Icon, Image } from 'semantic-ui-react';
import './All.css';

const mapStateToProps = (state) => {
  return {
    items: state.items.allItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (payload) => dispatch(removeItem(payload)),
    addFavorite: (payload) => dispatch(addFavorite(payload)),
    updateFavoriteIcon: (payload) => dispatch(updateFavoriteIcon(payload))
  }
}

class All extends Component {


  handleFavorite(item) {
    // Adds the item to the favorites list
    this.props.addFavorite(item); // -> favoriteReducer
    this.props.updateFavoriteIcon({ ...item, favorite: true }); // -> listReducer
  }

  render() {
      return (
        <List verticalAlign='middle'>
        {
          // Payload: { value: 'Hi', favorite: false, id: 'abc123' }
          this.props.items.map(item => {
            return (
              <List.Item key={item.id}>
                <List.Content floated='right'>
                  <Button negative onClick={() => this.props.removeItem(item.id)}>Remove</Button>
                </List.Content>
                <List.Content floated='left'>
                  <Button basic icon onClick={() => this.handleFavorite(item)}>
                    <Icon color={item.favorite ? 'yellow': 'grey'} name={item.favorite ? 'star' : 'star outline' } />
                  </Button>
                </List.Content>
                <List.Content>
                  { item.value }
                </List.Content>
              </List.Item>
            )
          })
        }
        </List>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(All);
