
import { React, Component } from 'react'
import './Sheet.css';

import { findRace, findJob } from '../../../apiHelper'

class Sheet extends Component{
        state = {
            charaName: '',
            charaRace: '',
            charaJob: '',
            ability_scores: [15, 14, 13, 12, 10, 8],
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0,
            str_bonus: 0,
            dex_bonus: 0,
            con_bonus: 0,
            int_bonus: 0,
            wis_bonus: 0,
            cha_bonus: 0,
             str_total: 0,
             dex_total: 0,
             con_total: 0,
             int_total: 0,
             wis_total: 0,
             cha_total: 0,
             str_mod: 0,
             dex_mod: 0,
             con_mod: 0,
             int_mod: 0,
             wis_mod: 0,
             cha_mod: 0,
            hp: 0,
            skills: {}
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

          var health = Number(newJob.hp + this.state.con_mod); 

          this.setState({ charaJob : newJob.name, hp : health })
  
      }

    handleMod = (x) =>{
        var mod = '';

        if (x == 8 || x == 9){
            mod = '-1';
        }
        else if (x == 10 || x == 11){
            mod = '0';
        }
        else if (x == 12 || x == 13){
            mod = '+1';
        }
        else if (x == 14 || x == 15){
            mod = '+2';
        }
        else if (x == 16 || x == 17){
            mod = '+3';
        }
        else if (x == 18 || x == 19){
            mod = '+4';
        }
        else{
            mod = '+5'
        }

        return mod;
    }

    handleStrChange = ev =>{
        var ability = Number(ev.target.value);
        var total = ability + this.state.str_bonus;
        var mod = this.handleMod(total);

        this.setState({ str : ability, str_total : total, str_mod : mod })
    }
    handleDexChange = ev =>{
        var ability = Number(ev.target.value);
        var total = ability + this.state.dex_bonus;
        var mod = this.handleMod(total);

        this.setState({ dex : ability, dex_total : total, dex_mod : mod })
    }
    handleConChange = ev =>{
        var ability = Number(ev.target.value);
        var total = ability + this.state.con_bonus;
        var mod = this.handleMod(total);

        this.setState({ con : ability, con_total : total, con_mod : mod })
    }
    handleIntChange = ev =>{
        var ability = Number(ev.target.value);
        var total = ability + this.state.int_bonus;
        var mod = this.handleMod(total);

        this.setState({ int : ability, int_total : total, int_mod : mod })
    }
    handleWisChange = ev =>{
        var ability = Number(ev.target.value);
        var total = ability + this.state.wis_bonus;
        var mod = this.handleMod(total);

        this.setState({ wis : ability, wis_total : total, wis_mod : mod })
    }
    handleChaChange = ev =>{
        var ability = Number(ev.target.value);
        var total = ability + this.state.cha_bonus;
        var mod = this.handleMod(total);
    
        this.setState({ cha : ability, cha_total : total, cha_mod : mod })
    }

    handleHP = ev =>{
        var hp = Number(ev.target.value);
        this.setState({ hp : hp})
    }

    render(){

        var skills = this.props.fakeAPI.skills;

        var skillCheck = [];

        var i;
        for (i = 0; i < skills.length; i++){
            var skillObject = {};
            skillObject.name = skills[i];
            skillObject.proficiency = false;

            skillCheck = skillCheck.concat(skillObject);
        }
        
        console.log(skillCheck);

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
                    <div className='mainForm'>
                        <div>
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
                        </div>
                    <div>
                        <div className='columns'>
                            <div className='abilityList'>
                                <div className='ability'>
                                    <h1>{this.state.str_mod}</h1><h2>{this.state.str_total}</h2><h3> = </h3><h3> {this.state.str_bonus} </h3><h3> + </h3><h3>{this.state.str}</h3>
                                    <select name='chara_str' onChange={this.handleStrChange}>
                                        <option value={null}>Select</option>
                                        {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                    </select>
                                </div>
                                <div className='ability'>
                                    <h1>{this.state.dex_mod}</h1><h2>{this.state.dex_total}</h2><h3> = </h3><h3> {this.state.dex_bonus} </h3><h3> + </h3><h3>{this.state.dex}</h3>
                                    <select name='chara_dex' onChange={this.handleDexChange}>
                                        <option value={null}>Select</option>
                                        {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                    </select>
                                </div>
                                <div className='ability'>
                                    <h1>{this.state.con_mod}</h1><h2>{this.state.con_total}</h2><h3> = </h3><h3> {this.state.con_bonus} </h3><h3> + </h3><h3>{this.state.con}</h3>
                                    <select name='chara_con' onChange={this.handleConChange}>
                                        <option value={null}>Select</option>
                                        {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                    </select>
                                </div>
                                <div className='ability'>
                                    <h1>{this.state.int_mod}</h1><h2>{this.state.int_total}</h2><h3> = </h3><h3> {this.state.int_bonus} </h3><h3> + </h3><h3>{this.state.int}</h3>
                                    <select name='chara_int' onChange={this.handleIntChange}>
                                        <option value={null}>Select</option>
                                        {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                    </select>
                                </div>
                                <div className='ability'>
                                    <h1>{this.state.wis_mod}</h1><h2>{this.state.wis_total}</h2><h3> = </h3><h3> {this.state.wis_bonus} </h3><h3> + </h3><h3>{this.state.wis}</h3>
                                    <select name='chara_wis' onChange={this.handleWisChange}>
                                        <option value={null}>Select</option>
                                        {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                    </select>
                                </div>
                                <div className='ability'>
                                    <h1>{this.state.cha_mod}</h1><h2>{this.state.cha_total}</h2><h3> = </h3><h3> {this.state.cha_bonus} </h3><h3> + </h3><h3>{this.state.cha}</h3>
                                    <select name='chara_cha' onChange={this.handleChaChange}>
                                        <option value={null}>Select</option>
                                        {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <div className='hp'>
                                    <h1>{this.state.hp}</h1>
                                    <label>HP</label>
                                </div>
                                <p>Skills</p>
                                {skillCheck.map((stuff, index) => <p className={stuff.proficiency ? 'true' : 'false'} key={index}>{stuff.name}</p>)}
                            </div>
                            <div>
                                <p>Traits</p>
                            </div>

                        </div>  
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Sheet