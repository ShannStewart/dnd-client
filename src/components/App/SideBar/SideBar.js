
import { React, Component } from 'react'
import './Sidebar.css';

import TokenService from '../../../services/token-service'

class SideBar extends Component{
    handleLogOut = () => {
        TokenService.clearAuthToken()

        window.location.reload()
    }

    handelAddition = () =>{
        console.log('handleAddition ran');

        this.props.openForm();
    }

    render(){
        return(
            <div className='sidebar'>
                 <button onClick={this.handleLogOut}>Log Out</button>
                 <button onClick={this.handelAddition}>Add Character</button>
                 <p>Sidebar</p>
            </div>
        )
    }
    
}

export default SideBar