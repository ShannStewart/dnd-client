
import { React, Component } from 'react'
import './Sheet.css';

import { findRace, findJob } from '../../../apiHelper'

class Sheet extends Component{
        state = {
            charaName: '',
            charaRace: '',
            charaJob: '',
        }

    handleNameChange = ev => {

        this.setState({ charaName : ev.target.value });
        
    }

    handleRaceChange = ev =>{
      // console.log('handleRaceChange ran ' + ev.target.value);

      var raceNumber = ev.target.value;

        var newRace = findRace(this.props.fakeAPI.races, raceNumber);
        this.setState({ charaRace : newRace.name })

    }

    handleJobChange = ev =>{
        // console.log('handleRaceChange ran ' + ev.target.value);
  
        var jobNumber = ev.target.value;
  
          var newJob = findJob(this.props.fakeAPI.classes, jobNumber);
          this.setState({ charaJob : newJob.name })
  
      }

    render(){

        var races = Array.from(this.props.fakeAPI.races);
        var jobs = Array.from(this.props.fakeAPI.classes);
        //console.log(races);

        var theWord = '';

        if(this.state.charaRace !== ''){
            theWord = 'The';
        }

        if(this.state.charaName !== '' && this.state.charaRace !== ''){
            theWord = 'the';
        }

        return(
            <div className='sheet'>
                <form>
                <label>Name</label>
                <h1>{this.state.charaName} {theWord} {this.state.charaRace} {this.state.charaJob}</h1>
                <input type='text' name='chara_name' onChange={this.handleNameChange}></input>
                <label>Race</label>
                <select name='chara_race' onChange={this.handleRaceChange}>
                    <option value={null}>Select</option>
                    {races.map(race => <option key={race.id} name={race.name} value={race.id}>{race.name}</option>)}
                </select>
                <select name='chara_race' onChange={this.handleJobChange}>
                    <option value={null}>Select</option>
                    {jobs.map(job => <option key={job.id} name={job.name} value={job.id}>{job.name}</option>)}
                </select>
                </form>
            </div>
        )
    }
}

export default Sheet