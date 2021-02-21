
import './App.css';
import { Component } from 'react';


import TokenService from '../../services/token-service'
import Home from '../App/Routes/Home/Home'
import Logform from '../App/Routes/Logform/Logform'

import dummyStore from '../../dummy-store'


class App extends Component {
  state = {
    characters: [],
    users: [],
    userID: 0,
    characterID: 0,
};

componentDidMount() {
  // fake date loading from API call
  setTimeout(() => this.setState(dummyStore), 600);
}

  render(){
    return (
      <div className="App">
         {TokenService.hasAuthToken()
          ?<Home userList={this.state.users} charaList={this.state.characters}/>
          :<Logform existUser={this.state.users}/>
         }
      </div>
    );
  }
}

export default App;
