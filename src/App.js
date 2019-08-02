import React, { Component } from 'react';
import { Container, Form, Button, Grid } from 'semantic-ui-react';
import Favorites from './components/Favorites/Favorites';
import All from './components/All/All';
import Navbar from './components/Navbar/Navbar';
import './App.css';

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
              <Button type='submit' primary onClick={() => {}}>Submit</Button>
            </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
