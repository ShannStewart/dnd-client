
import { React, Component } from 'react'
import './Sidebar.css';

import TokenService from '../../../services/token-service'

class SideBar extends Component{
    handleLogOut = () => {
        TokenService.clearAuthToken()

        window.location.reload()
    }
    render(){
        return(
            <div className='sidebar'>
                 <button onClick={this.handleLogOut}>Log Out</button>
                 <p>Sidebar</p>
            </div>
        )
    }
    
}

export default SideBar