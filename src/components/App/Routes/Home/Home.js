import './Home.css'
import { Component } from "react";

import TokenService from '../../../../services/token-service'

import SideBar from '../../SideBar/SideBar'
import Sheet from '../../Sheet/Sheet'

class Home extends Component{
    
    render(){
        return(
            <div className='Home'>
                <SideBar 
                charaList={this.props.charaList} 
                userList={this.props.userList} 
                openForm={this.props.openForm} 
                form={this.props.form}
                />
            {this.props.form
                ?<Sheet charaList={this.props.charaList}/>
                :<div></div>}        
            </div>
        )
    }

}

export default Home