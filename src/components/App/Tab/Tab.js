
import { React, Component } from 'react'
import './Tab.css'

class Tab extends Component{

    tabClick = ev => {
        console.log('tabClick ran: ' + JSON.stringify(this.props.character));

        this.props.reopenForm(this.props.character.id);
    }

    render(){
        return(
            <div className='tab' onClick={this.tabClick}>
                <p>Tab</p>
            </div>
        )
    }
}

export default Tab