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
                newForm={this.props.newForm} 
                form={this.props.form}
                />
            {this.props.form
                ?<Sheet
                fakeAPI={this.props.fakeAPI} 
                charaList={this.props.charaList}
                closeForm={this.props.closeForm}
                />
                :<div></div>}        
            </div>
        )
    }

}

export default Home