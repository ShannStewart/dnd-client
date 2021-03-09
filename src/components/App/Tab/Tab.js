
import { React, Component } from 'react'
import './Tab.css'

import fakeAPI from '../../../fake-api';
import { findRace, findJob } from '../../../apiHelper';

class Tab extends Component{

    tabClick = ev => {
        //console.log('tabClick ran: ' + JSON.stringify(this.props.character));

        this.props.reopenForm(this.props.character.id);
    }

    handleDelete = ev => {

        this.props.charaDelete(this.props.character.id)
    }

    render(){
        //console.log(this.props.character);

        var theWord = '';

        var Name = this.props.character.name;
        var thisRace = findRace(fakeAPI.races, this.props.character.race);
        var thisJob = findJob(fakeAPI.classes, this.props.character.job);

        if(thisRace !== null && thisRace !== undefined){
            var Race = thisRace.name;
        }
        if(thisJob !== null && thisJob !== undefined){
            var Job = thisJob.name;
        }

        //console.log(thisRace);
        //console.log(thisJob);

        if(Name !== '' && ((thisRace !== '' && thisRace !== null && thisRace !== undefined) || (thisJob !=='' && thisJob !== null && thisJob !== undefined))){
            theWord = 'the';
        }

        if((Name == '' || Name == null) && ((thisRace !== '' && thisRace !== null) || (thisJob !== '' && thisJob !== null))){
            theWord = 'The';
        }


        return(
            <div className='tab'>
                <div onClick={this.tabClick}>
                    <h4>{Name} {theWord} {Race} {Job}</h4> 
                </div>
                <button onClick={this.handleDelete}>X</button>
            </div>
        )
    }
}

export default Tab