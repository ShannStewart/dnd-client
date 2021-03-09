
import { React, Component } from 'react'
import './Sidebar.css';
import Tab from '../Tab/Tab'

import TokenService from '../../../services/token-service'

class SideBar extends Component{
    handleLogOut = () => {
        TokenService.clearAuthToken()

        window.location.reload()
    }

    handelAddition = () =>{
       // console.log('handleAddition ran');

        this.props.newForm();
    }

    render(){

        var user = TokenService.getAuthToken();
        //console.log(user);

        var allChara = this.props.charaList;
        var newList = allChara.filter(chara => chara.userid == user)
        
        return(
            <div className='sidebar'>
                 <button onClick={this.handleLogOut}>Log Out</button>
                 <button onClick={this.handelAddition}>Add Character</button>
                 <div className='charaTabs'>
                    {newList.map((chara, index) => <Tab key={index} character={chara} reopenForm={this.props.reopenForm} charaDelete={this.props.charaDelete}/>)}
                 </div>
            </div>
        )
    }
    
}

export default SideBar