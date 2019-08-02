import React, { Component } from 'react';
import Favorites from './components/Favorites/Favorites';
import All from './components/All/All';
import Navbar from './components/Navbar/Navbar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFavorites: false,
    }
  }


  render() {
    return (
      <div>
        <Navbar
          onFavoriteClick={() => this.setState({ showFavorites: true })}
         />
        {
          this.state.showFavorites ?
            <Favorites />
           : <All />
        }
      </div>
    );
  }
}

export default App;
