
import './App.css';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import TokenService from '../../services/token-service'
import Home from '../App/Routes/Home/Home'
import Logform from '../App/Routes/Logform/Logform'

import dummyStore from '../../dummy-store'
import Register from './Routes/Register/Register';
import fakeAPI from '../../fake-api';


class App extends Component {
  state = {
    characters: [],
    users: [],
    userID: 0,
    characterID: 0,
    form: false,
};

componentDidMount() {
  // fake date loading from API call
  setTimeout(() => this.setState(dummyStore), 600);
}

userSubmit = (u, p) => {
  //console.log('userSubmit ran');
  //console.log('running userSubmit with: ' + u + ' and ' + p);

  var newUser = {"id": "newUser" + this.state.userID, "user_name": u, "password": p, "charas": []};

  var newUserID = this.state.userID + 1;
  this.setState({userID: newUserID});

  var newUserList = this.state.users.concat(newUser);
  this.setState({ users: newUserList });

  var ider = newUser.id;

  TokenService.saveAuthToken(ider);
}

openForm = () =>{
  console.log('openForm ran');

  this.setState({ form : true });

}

  render(){
    return (
      <div className="App">
        <Switch>
        {TokenService.hasAuthToken()
          ?<Route
            exact
            path='/'
            render={routeProps => ( <Home {...routeProps} 
              userList={this.state.users} 
              charaList={this.state.characters} 
              openForm={this.openForm} 
              form={this.state.form}/> )}/>
            :<Route
            exact
            path='/'
            render={routeProps => ( <Logform {...routeProps} existUser={this.state.users}/> )}/>
            }
          <Route
            path='/Register'
            render={routeProps => ( <Register {...routeProps} existUser={this.state.users} addNewUser={this.userSubmit}/>)}
          />
         </Switch>
      </div>
    );
  }
}

export default App;
