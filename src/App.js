import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import { addItem } from './actions/index';
import { Container, Form, Button, Grid } from 'semantic-ui-react';
import Favorites from './components/Favorites/Favorites';
import All from './components/All/All';
import Navbar from './components/Navbar/Navbar';
import './App.css';


const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (payload) => dispatch(addItem(payload))
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFavorites: false,
      value: '',
    }
  }

  render() {
    return (
      <div>
        <Navbar
          homeActive={this.state.showFavorites === false}
          onHomeClick={() => this.setState({ showFavorites: false })}
          onFavoriteClick={() => this.setState({ showFavorites: true })}
         />
        {
          this.state.showFavorites ?
          <Container>
            <Favorites />
          </Container> :
          <Container>
            <All />
          </Container>
        }
        <Grid columns={4} style={{ paddingLeft: 20 }}>
          <Grid.Row>
            <Grid.Column>
            <Form>
              <Form.Field>
                <label>You're To Do</label>
                <input
                  value={this.state.value}
                  placeholder='Enter To do'
                  onChange={e => this.setState({ value: e.target.value })}
                 />
              </Form.Field>
              <Button type='submit' primary onClick={() => this.props.addItem({ value: this.state.value, favorite: false, id: uuidv4()  })}>Submit</Button>
            </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
