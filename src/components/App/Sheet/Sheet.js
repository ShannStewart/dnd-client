
import { React, Component } from 'react'
import './Sheet.css';

import { findRace, findJob } from '../../../apiHelper'

class Sheet extends Component{
        state = {
            id: null,
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
            skills: {},
            job: null,
        }

    handleNameChange = ev => {

        this.setState({ charaName : ev.target.value });
        
    }

    handleHealth = () =>{
        //console.log('current job is ' + this.state.job);

        var jobNumber = this.state.job;

        var jobBonus = 0;

        if(jobNumber == null){
            return 0;
        }
        else{
            var newJob = findJob(this.props.fakeAPI.classes, jobNumber);
            jobBonus = newJob.hp;
            return jobBonus;
        }

    }

    handleRaceChange = ev =>{
      // console.log('handleRaceChange ran ' + ev.target.value);

      var raceNumber = ev.target.value;

      var raceStr = 0;
      var raceDex = 0;
      var raceCon = 0;
      var raceInt = 0;
      var raceWis = 0;
      var raceCha = 0;

      if(isNaN(raceNumber) || raceNumber == null){
        this.setState({ charaRace : null });
    }
    else{
        var newRace = findRace(this.props.fakeAPI.races, raceNumber);
        this.setState({ charaRace : newRace.name })
        }

    }

    handleJobChange = ev =>{
        // console.log('handleRaceChange ran ' + ev.target.value);
  
        var jobNumber = ev.target.value;

        if(isNaN(jobNumber) || jobNumber == null){
            this.setState({ charaJob : null, job : null });
        }
        else{
          var newJob = findJob(this.props.fakeAPI.classes, jobNumber);

          this.setState({ charaJob : newJob.name, job : newJob.id });
        }
  
      }

    handleProficiencies = () =>{
        var jobNumber = this.state.job;

        var newJob = findJob(this.props.fakeAPI.classes, jobNumber);
        var jobBonus = newJob.proficiencies_choice;
        return jobBonus;
    }

    handleDecision = () => {
        var jobNumber = this.state.job;

        var newJob = findJob(this.props.fakeAPI.classes, jobNumber);
        var jobProficiencies = [];
        var jobProficiencies = newJob.proficiencies;

        return jobProficiencies
    }

    handleMod = (x) =>{
        var mod = '';

        //console.log(x);

        if (x == 0 || isNaN(x)){
            mod = '0';
        }
        else if
            (x == 8 || x == 9){
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

    handleNum = (x) =>{
        var mod = '';

        //console.log(x);

        if (x == 0 || isNaN(x)){
            mod = 0;
        }
        else if
            (x == 8 || x == 9){
            mod = -1;
        }
        else if (x == 10 || x == 11){
            mod = 0;
        }
        else if (x == 12 || x == 13){
            mod = +1;
        }
        else if (x == 14 || x == 15){
            mod = +2;
        }
        else if (x == 16 || x == 17){
            mod = +3;
        }
        else if (x == 18 || x == 19){
            mod = +4;
        }
        else{
            mod = +5
        }

        return mod;
    }

    handleStrChange = ev =>{
        var ability = Number(ev.target.value);

        if(isNaN(ability)){
            ability = 0;
        }
   
        this.setState({ str : ability })
    }
    handleDexChange = ev =>{
        var ability = Number(ev.target.value);

        if(isNaN(ability)){
            ability = 0;
        }

        this.setState({ dex : ability})
    }
    handleConChange = ev =>{
        var ability = Number(ev.target.value);

        if(isNaN(ability)){
            ability = 0;
        }

        this.setState({ con : ability })
    }
    handleIntChange = ev =>{
        var ability = Number(ev.target.value);

        if(isNaN(ability)){
            ability = 0;
        }

        this.setState({ int : ability })
    }
    handleWisChange = ev =>{
        var ability = Number(ev.target.value);

        if(isNaN(ability)){
            ability = 0;
        }

        this.setState({ wis : ability })
    }
    handleChaChange = ev =>{
        var ability = Number(ev.target.value);

        if(isNaN(ability)){
            ability = 0;
        }
    
        this.setState({ cha : ability})
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
        
       // console.log(skillCheck);

        var races = Array.from(this.props.fakeAPI.races);
        var jobs = Array.from(this.props.fakeAPI.classes);
        //console.log(races);

        var theWord = '';


        if(this.state.charaName !== '' && ((this.state.charaRace !== '' && this.state.charaRace !== null) || (this.state.charaJob !=='' && this.state.charaJob !== null))){
            theWord = 'the';
        }

        if((this.state.charaName == '' || this.state.charaName == null) && ((this.state.charaRace !== '' && this.state.charaRace !== null) || (this.state.charaJob !== '' && this.state.charaJob !== null))){
            theWord = 'The';
        }

      //  var total = ability + this.state.cha_bonus;
      //  var mod = this.handleMod(total);

        var str_total = this.state.str + this.state.str_bonus;
        var dex_total = this.state.dex + this.state.dex_bonus;
        var con_total = this.state.con + this.state.con_bonus;
        var int_total = this.state.int + this.state.int_bonus;
        var wis_total = this.state.wis + this.state.wis_bonus;
        var cha_total = this.state.cha + this.state.cha_bonus;
        var str_mod = this.handleMod(str_total);
        var dex_mod = this.handleMod(dex_total);
        var con_mod = this.handleMod(con_total);
        var con_num = this.handleNum(con_total);
        var int_mod = this.handleMod(int_total);
        var wis_mod = this.handleMod(wis_total);
        var cha_mod = this.handleMod(cha_total);
        var hp = Number(this.handleHealth());
        hp = Number(hp + con_num);

        var proficiency = 1;
        var decision = [];

        if(this.state.job !== null && !isNaN(this.state.job)){
            proficiency = this.handleProficiencies();
        }

        if(this.state.job !== null && !isNaN(this.state.job)){
            decision = this.handleDecision();
        }

        const fields: JSX.Element[] = [];
            for (let i = 1; i <= proficiency; i++) {
                fields.push(<select id={i} key={i} name='proficiencies'>
                    <option value={null}>Select</option>
                    {decision.map((decision, index) => <option key={index} name={decision} value={decision}>{decision}</option>)}
                </select>);
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
                                <div>
                                    <div className='ability'>
                                        <h1>{str_mod}</h1><h2>{str_total}</h2><h3> = </h3><h3> {this.state.str_bonus} </h3><h3> + </h3><h3>{this.state.str}</h3>
                                        <select name='chara_str' onChange={this.handleStrChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                    <label>Strength</label>
                                </div>
                                <div>
                                    <div className='ability'>
                                        <h1>{dex_mod}</h1><h2>{dex_total}</h2><h3> = </h3><h3> {this.state.dex_bonus} </h3><h3> + </h3><h3>{this.state.dex}</h3>
                                        <select name='chara_dex' onChange={this.handleDexChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                    <label>Dexterity</label>
                                </div>
                                <div>
                                    <div className='ability'>
                                        <h1>{con_mod}</h1><h2>{con_total}</h2><h3> = </h3><h3> {this.state.con_bonus} </h3><h3> + </h3><h3>{this.state.con}</h3>
                                        <select name='chara_con' onChange={this.handleConChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                    <label>Constitution</label>
                                </div>
                                <div>
                                    <div className='ability'>
                                        <h1>{int_mod}</h1><h2>{int_total}</h2><h3> = </h3><h3> {this.state.int_bonus} </h3><h3> + </h3><h3>{this.state.int}</h3>
                                        <select name='chara_int' onChange={this.handleIntChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                    <label>Intelligence</label>
                                </div>
                                <div>
                                    <div className='ability'>
                                        <h1>{wis_mod}</h1><h2>{wis_total}</h2><h3> = </h3><h3> {this.state.wis_bonus} </h3><h3> + </h3><h3>{this.state.wis}</h3>
                                        <select name='chara_wis' onChange={this.handleWisChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                    <label>Wisdom</label>
                                </div>
                                <div>   
                                    <div className='ability'>
                                        <h1>{cha_mod}</h1><h2>{cha_total}</h2><h3> = </h3><h3> {this.state.cha_bonus} </h3><h3> + </h3><h3>{this.state.cha}</h3>
                                        <select name='chara_cha' onChange={this.handleChaChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                <label>Charisma</label>
                                </div>
                            </div>
                            
                            <div>
                                <div className='hp'>
                                    <h1>{hp}</h1>
                                    <label>HP</label>
                                </div>
                                <p>Skills</p>
                                {skillCheck.map((stuff, index) => <p className={stuff.proficiency ? 'true' : 'false'} key={index}>{stuff.name}</p>)}
                            </div>
                            <div class='skills'>
                                <p>Skills</p>
                                {fields}
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