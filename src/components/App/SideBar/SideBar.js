
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
        return(
            <div className='sidebar'>
                 <button onClick={this.handleLogOut}>Log Out</button>
                 <button onClick={this.handelAddition}>Add Character</button>
                 <p>Sidebar</p>
                 <div className='charaTabs'>
                    {this.props.charaList.map((chara, index) => <Tab key={index} character={chara}/>)}
                 </div>
            </div>
        )
    }
    
}

export default SideBar