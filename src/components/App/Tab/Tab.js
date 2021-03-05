
import { React, Component } from 'react'
import './Tab.css'

import fakeAPI from '../../../fake-api';
import { findRace, findJob } from '../../../apiHelper';

class Tab extends Component{

    tabClick = ev => {
        //console.log('tabClick ran: ' + JSON.stringify(this.props.character));

        this.props.reopenForm(this.props.character.id);
    }

    render(){
        //console.log(this.props.character);

        var theWord = '';

        var Name = this.props.character.name;
        var thisRace = findRace(fakeAPI.races, this.props.character.race);
        var thisJob = findJob(fakeAPI.classes, this.props.character.class);

        if(thisRace !== null && thisRace !== undefined){
            var Race = thisRace.name;
        }
        if(thisJob !== null && thisJob !== undefined){
            var Job = thisJob.name;
        }


        if(Name !== '' && ((Race !== '' && Race !== null) || (Job !=='' && Job !== null))){
            theWord = 'the';
        }

        if((Name == '' || Name == null) && ((Race !== '' && Race !== null) || (Job !== '' && Job !== null))){
            theWord = 'The';
        }


        return(
            <div className='tab' onClick={this.tabClick}>
                <h4>{Name} {theWord} {Race} {Job}</h4>
            </div>
        )
    }
}

export default Tab