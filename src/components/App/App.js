
import './App.css';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import TokenService from '../../services/token-service'
import Home from '../App/Routes/Home/Home'
import Logform from '../App/Routes/Logform/Logform'

import dummyStore from '../../dummy-store'
import Register from './Routes/Register/Register';
import fakeAPI from '../../fake-api';

import { findUser, findCharacter, getCharasForUser } from '../../helper';


class App extends Component {
  state = {
    characters: [],
    users: [],
    userID: 0,
    characterID: 0,
    form: false,
    current: null
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

charaSubmit = (name, job, race, str, dex, con, int, wis, cha, skills) => {
  console.log('charaSubmit ran');
  var chara = { "id": "newChara" + this.state.characterID, "name": name, "class": job, "race": race, "str": str, "dex": dex, "con": con, "int": int, "wis": wis, "cha": cha, "skills": skills }

  var newCharaID = this.state.characterID + 1;
  //console.log('chara will be: ' + JSON.stringify(chara));

  var charaList = this.state.characters;
  var newCharaList = charaList.concat(chara);

  this.setState({ characterID : newCharaID, characters : newCharaList, form : false });

}

newForm = () =>{
  //console.log('openForm ran');

  this.setState({ current: null, form : true });

}

closeForm = () => {
  this.setState({ form : false });
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
              fakeAPI={fakeAPI}
              userList={this.state.users} 
              charaList={this.state.characters} 
              newForm ={this.newForm}
              closeForm={this.closeForm}
              charaSubmit={this.charaSubmit} 
              form={this.state.form}
              current={this.state.current}/> )}/>
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
