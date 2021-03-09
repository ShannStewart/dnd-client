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
                reopenForm={this.props.reopenForm}
                form={this.props.form}
                charaList={this.props.charaList}
                charaDelete={this.props.charaDelete}
                />
            {this.props.form
                ?<Sheet
                fakeAPI={this.props.fakeAPI} 
                charaList={this.props.charaList}
                closeForm={this.props.closeForm}
                charaSubmit={this.props.charaSubmit}
                current={this.props.current}
                charaName={this.props.charaName}
                job={this.props.job}
                race={this.props.race}
                str={this.props.str}
                dex={this.props.dex}
                con={this.props.con}
                int={this.props.int}
                wis={this.props.wis}
                cha={this.props.cha}
                skills={this.props.skills}
                />
                :<div></div>}        
            </div>
        )
    }

}

export default Home