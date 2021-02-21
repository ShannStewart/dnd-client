
import './App.css';
import { Component } from 'react';


import TokenService from '../../services/token-service'
import Home from '../App/Routes/Home/Home'


class App extends Component() {

  render(){
    return (
      <div className="App">
         {TokenService.hasAuthToken()
          ?<Home/>
          :<Home/>
         }
      </div>
    );
  }
}

export default App;
