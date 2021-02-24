
import { React, Component } from 'react'
import './Sheet.css';

import fakeAPI from '../../../fake-api';

class Sheet extends Component{
        state = {
            charaName: '',
        }

    handleChange = ev => {
       // ev.preventDefault()
        console.log(ev.target.chara_name.value) 
        
    }

    render(){
        return(
            <div className='sheet'>
                <form onChange={this.handleChange}>
                <label>Name</label>
                <h3>{this.state.charaName}</h3>
                <input type='text' name='chara_name'></input>
                </form>
            </div>
        )
    }
}

export default Sheet