
import './App.css';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import TokenService from '../../services/token-service'
import Home from '../App/Routes/Home/Home'
import Logform from '../App/Routes/Logform/Logform'

//import dummyStore from '../../dummy-store'
import Register from './Routes/Register/Register';
import fakeAPI from '../../fake-api';
import config from '../../config';

import { findUser, findCharacter, getCharasForUser } from '../../helper';


class App extends Component {
  state = {
    characters: [],
    users: [],
    //userID: 0,
    //characterID: 0,
    form: false,

    current: null,
    charaName: '',
    job: null,
    race: null,
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
    skills: []
};

componentDidMount() {
  // fake date loading from API call
  //setTimeout(() => this.setState(dummyStore), 600);

  Promise.all([
    fetch(`${config.API_ENDPOINT}/auth`),
    fetch(`${config.API_ENDPOINT}/chara`),
  ])
    .then(([ userRes, charaRes ]) => {
      if (!userRes.ok)
        return userRes.json().then(e => Promise.reject(e))
      if (!charaRes.ok)
        return charaRes.json().then(e => Promise.reject(e))
      return Promise.all([
        userRes.json(),
        charaRes.json(),
      ])
    })
    .then(([ users, characters ]) => {
      this.setState({ users, characters })
    })
    .catch(error => {
      console.error({ error })
    })
}

userReload = (data) =>{

  var newUserItem = { "id": data.id, "name": data.name, "password": data.password };
  var newUserList = this.state.users.concat(newUserItem);
  this.setState({ users: newUserList });

  TokenService.saveAuthToken(data.id);

  window.location.reload();

}

userSubmit = (u, p) => {
  var newUser = { "name": u, "password": p };

  var postUser = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }
      
  fetch(`${config.API_ENDPOINT}/auth`, postUser)  
  .then(response => response.json())
  .then(data => this.userReload(data))

}

charaLoad = (data) => {
  var newCharaItem = { "id": data.id,  "name": data.name, "job": data.job, "race": data.race, "str": data.str, "dex": data.dex, "con": data.con, "int": data.int, "wis": data.wis, "cha": data.cha, "skills": data.skills, "userid": data.userid};

  var newCharaList = this.state.characters.concat(newCharaItem);

  this.setState({ characters: newCharaList, form : false });
}

charaReload = (chara, id) => {
  var newCharaItem = chara;
  newCharaItem.id = id;

  var charaList = this.state.characters.filter(chara => chara.id !== id);
  var newCharaList = charaList.concat(newCharaItem);

  this.setState({ characters: newCharaList, form : false });
}

charaSubmit = (id, name, job, race, str, dex, con, int, wis, cha, skills) => {
 // console.log('charaSubmit ran: ' + id);

console.log('job: ' + job);
console.log('race: ' + race);

 var prof = [];
 prof = prof.concat(skills);

  if (id == null || id == undefined){
    var userToken = TokenService.getAuthToken();

    var newChara = { "name": name, "job": job, "race": race, "str": str, "dex": dex, "con": con, "int": int, "wis": wis, "cha": cha, "skills": prof, "userid": userToken }

    var postChara = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newChara)
    }

    console.log(JSON.stringify(postChara));
        
    fetch(`${config.API_ENDPOINT}/chara`, postChara)  
    .then(response => response.json())
    .then(data => this.charaLoad(data))
   
  }
  else{
    var userToken = TokenService.getAuthToken();
    var chara = { "name": name, "job": job, "race": race, "str": str, "dex": dex, "con": con, "int": int, "wis": wis, "cha": cha, "skills": prof, "userid": userToken };
   
    var patchChara = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(chara)
    }

    console.log(JSON.stringify(patchChara));


    fetch(`${config.API_ENDPOINT}/chara/${id}`, patchChara)
    .then(this.charaReload(chara, id))
  }
  

}

deleteCharaReload = (id) =>{
  var list = this.state.characters;
  var newList = list.filter(character => character.id !== id);

  this.setState({ characters : newList }, () => {
    //  console.log(this.state.quizzes)
    }  
    );
}

charaDelete = (id) =>{

  var deleteChara = {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(id)
  }

  fetch(`${config.API_ENDPOINT}/chara/${id}`, deleteChara)
            .then(this.deleteCharaReload(id))

}

newForm = () =>{
  //console.log('openForm ran');

  this.setState({ current: null, form : false }, () => {
    this.setState({ 
      current: null,
      charaName: '',
      job: null,
      race: null,
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      skills: [],
      form : true });
  });
 

}

reopenForm = (id) =>{

  //console.log(id);

  var chara = findCharacter(this.state.characters, id);

  //console.log(JSON.stringify(chara));

 this.setState({ 
  current: id,
  charaName: chara.name,
  job: chara.class,
  race: chara.race,
  str: chara.str,
  dex: chara.dex,
  con: chara.con,
  int: chara.int,
  wis: chara.wis,
  cha: chara.cha,
  skills: chara.skills, 
  form : false }, () => {
  this.setState({ 
    form : true });
});

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
              reopenForm={this.reopenForm}
              closeForm={this.closeForm}
              charaSubmit={this.charaSubmit}
              charaDelete={this.charaDelete}
              form={this.state.form}
              current={this.state.current}
              charaName={this.state.charaName}
              job={this.state.job}
              race={this.state.race}
              str={this.state.str}
              dex={this.state.dex}
              con={this.state.con}
              int={this.state.int}
              wis={this.state.wis}
              cha={this.state.cha}
              skills={this.state.skills}
              /> )}/>
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
