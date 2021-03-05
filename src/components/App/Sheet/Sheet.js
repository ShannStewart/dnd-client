
import { React, Component } from 'react'
import './Sheet.css';

import { findRace, findJob, findBonus } from '../../../apiHelper'
import { findCharacter } from '../../../helper'

class Sheet extends Component{

    state = {
        id: this.props.current,
        charaName: this.props.charaName,
        job: this.props.job,
        race: this.props.race,
        str: this.props.str,
        dex: this.props.dex,
        con: this.props.con,
        int: this.props.int,
        wis: this.props.wis,
        cha: this.props.cha,
        skills: this.props.skills,

        str_bonus: 0,
        dex_bonus: 0,
        con_bonus: 0,
        int_bonus: 0,
        wis_bonus: 0,
        cha_bonus: 0,
        ability_scores: [15, 14, 13, 12, 10, 8],
   
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
    
      if(isNaN(raceNumber) || raceNumber == null){

         raceStr = 0;
         raceDex = 0;
         raceCon = 0;
         raceInt = 0;
         raceWis = 0;
         raceCha = 0;

        this.setState({ race : null, str_bonus: raceStr, dex_bonus: raceDex, con_bonus: raceCon, int_bonus: raceInt, wis_bonus: raceWis, cha_bonus: raceCha, });
    }
    else{

        var race = findRace(this.props.fakeAPI.races, raceNumber);
        var raceBonus = race.ability;
  
        var str = findBonus(raceBonus, 'STR');
        var dex = findBonus(raceBonus, 'DEX');
        var con = findBonus(raceBonus, 'CON');
        var int = findBonus(raceBonus, 'INT');
        var wis = findBonus(raceBonus, 'WIS');
        var cha = findBonus(raceBonus, 'CHA');

        var newRace = findRace(this.props.fakeAPI.races, raceNumber);
        var skill = newRace.proficiencies

        if (str !== undefined){
            var raceStr = str.score;
          }
          else {
          raceStr = 0;}

          if (dex !== undefined){
            var raceDex = dex.score;
          }
          else {
            raceDex = 0;}

          if (con !== undefined){
            var raceCon = con.score;
          } else
           raceCon = 0;}

          if (int !== undefined){
            var raceInt = int.score;
          }
          else{
          raceInt = 0;}
          
          if (wis !== undefined){
            var raceWis = wis.score;
          } else {
          raceWis = 0;}

          if (cha !== undefined){
            var raceCha = cha.score;
          } else {
          raceCha = 0;}

        this.setState({ race : newRace.id, str_bonus: raceStr, dex_bonus: raceDex, con_bonus: raceCon, int_bonus: raceInt, wis_bonus: raceWis, cha_bonus: raceCha });
        }


    handleJobChange = ev =>{
        // console.log('handleRaceChange ran ' + ev.target.value);
  
        var jobNumber = ev.target.value;

        if(isNaN(jobNumber) || jobNumber == null){
            this.setState({ job : null });
        }
        else{
          var newJob = findJob(this.props.fakeAPI.classes, jobNumber);

          this.setState({ job : newJob.id, skills: [] });
        }
  
      }

    handleProficiencies = () =>{
        var jobNumber = this.state.job;
        console.log(jobNumber);

        var newJob = findJob(this.props.fakeAPI.classes, jobNumber);
        var jobBonus = 0;

        if (newJob == undefined){

        }
        else {
            jobBonus = newJob.proficiencies_choice;
        }

        return jobBonus;
    }

    handleDecision = () => {
        var jobNumber = this.state.job;

        var newJob = findJob(this.props.fakeAPI.classes, jobNumber);
        var jobProficiencies = [];

        if (newJob == undefined){

        }
        else {
            jobProficiencies = newJob.proficiencies;

            var i;
            for (i = 0; i < this.state.skills.length; i++){
                var jobProficiencies = jobProficiencies.filter(job => job !== this.state.skills[i]);
               // console.log(jobProficiencies);
            }
        }
    
        return jobProficiencies
    }

    handleMod = (x) =>{
        var mod = '';

        //console.log(x);

        if (x == 0 || isNaN(x)){
            mod = '0';
        }
        else if 
            (x > 0 && x < 8){
                mod = '-2';
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
        (x > 0 && x < 8){
            mod = '-2';
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

    addSkill = ev =>{
        ev.preventDefault();

        var prof = document.getElementById('prof');
        var skills = this.state.skills;
        var newSkills;

        if (prof.value !== 'select' && prof.value !== 'Select' && prof.value !== null && prof.value !== undefined){
            newSkills = skills.concat(prof.value);
            this.setState({ skills : newSkills });
        }
    }

    removeSkill = (ev, skill) =>{
        ev.preventDefault();

        var skills = this.state.skills;
        var newSkills = skills.filter(prof => prof !== skill);

        this.setState({ skills : newSkills });
    }

    submitChara = ev =>{
        ev.preventDefault();
        console.log('submitChara ran');

        var name = ''; 
        var job = null;
        var race = null; 
        var str = 0; 
        var dex = 0 
        var con = 0; 
        var int = 0; 
        var wis = 0;
        var cha = 0; 
        var skills = [];

        var require = document.getElementById("requirements");
        require.classList.add("hidden");

        if( this.state.charaName == (undefined || null) && this.state.job == (undefined || null) && this.state.race == (undefined || null)){
            require.classList.remove("hidden");
            return console.log("no name, class and race"); 
        }
     
        this.props.charaSubmit(
            this.state.current,
            this.state.charaName,
            this.state.job,
            this.state.race,
            this.state.str,
            this.state.dex,
            this.state.con,
            this.state.int,
            this.state.wis,
            this.state.cha,
            this.state.skills
        )
        
        //this.props.charaSubmit();
    }

    resetChara = ev =>{
    //console.log('resetChara ran');     

    this.props.closeForm();
    }

    render(){

        console.log(this.state);

        var skills = this.props.fakeAPI.skills;
        var raceSkills = [];

        var skillCheck = [];
        
       // console.log(skillCheck);

        var races = Array.from(this.props.fakeAPI.races);
        var jobs = Array.from(this.props.fakeAPI.classes);
        //console.log(races);

      //  var total = ability + this.state.cha_bonus;
      //  var mod = this.handleMod(total);

      var proficiency = 1;
      var decision = [];   
      
      var prof = [];
      var feat = [];
      var lang = [];
      var save = [];

      var charaRace = '';
      var charaJob = '';

      if(this.state.job !== null && !isNaN(this.state.job) && this.state.job !== undefined){
        proficiency = this.handleProficiencies();
        decision = this.handleDecision();

        var currentJob = findJob(this.props.fakeAPI.classes, this.state.job);
        proficiency = currentJob.proficiencies_choice;
        feat = currentJob.feat;
        save = currentJob.savingThrow;
        charaJob = currentJob.name
        //console.log(feat);
            }

        if(this.state.race !== null && !isNaN(this.state.race) && this.state.race !== undefined){

            var currentRace = findRace(this.props.fakeAPI.races, this.state.race);
           feat = feat.concat(currentRace.feat);
           prof = currentRace.proficiencies;
           lang = currentRace.language;
           charaRace = currentRace.name;
           raceSkills = currentRace.proficiencies;
            
            }

            var theWord = '';


            if(this.state.charaName !== '' && ((charaRace !== '' && charaRace !== null) || (charaJob !=='' && charaJob !== null))){
                theWord = 'the';
            }
    
            if((this.state.charaName == '' || this.state.charaName == null) && ((charaRace !== '' && charaRace !== null) || (charaJob !== '' && charaJob !== null))){
                theWord = 'The';
            }

        var i;
        for (i = 0; i < skills.length; i++){
            var skillObject = {};
            skillObject.name = skills[i];

            skillObject.proficiency = false;
            if(this.state.skills.find(skill => skill === skills[i]) || raceSkills.find(skill => skill === skills[i])){
                skillObject.proficiency = true;
            }

            skillCheck = skillCheck.concat(skillObject);
        }

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

        if (isNaN(hp)){
            hp = 0;
        }
    

      
   //     const fields: JSX.Element[] = [];
   //         for (let i = 1; i <= proficiency; i++) {
   //             fields.push(<div><select id={i} key={i} name='proficiencies'>
   //                 <option value={null}>Select</option>
   //                 {decision.map((decision, index) => <option key={index} name={decision} value={decision}>{decision}</option>)}
   //             </select></div>);
   //             }	

        return( 
            <div className='sheet'>
                <form onSubmit={this.submitChara}>
                    <div className='mainForm'>
                        <div>
                            <label>Name</label>
                            <h1>{this.state.charaName} {theWord} {charaRace} {charaJob}</h1>
                            <input type='text' name='chara_name' id='chara_name' value={this.state.charaName} onChange={this.handleNameChange}></input>
                            <label>Race</label>
                            <select name='chara_race' id='chara_race' value={this.state.race} onChange={this.handleRaceChange}>
                                <option value={null}>Select</option>
                                {races.map(race => <option key={race.id} name={race.name} value={race.id}>{race.name}</option>)}
                            </select>
                            <select name='chara_job' id='chara_job' value={this.state.job} onChange={this.handleJobChange}>
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
                                        <select name='chara_str' id='chara_str' value={this.state.str} onChange={this.handleStrChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                    <label>Strength</label>
                                </div>
                                <div>
                                    <div className='ability'>
                                        <h1>{dex_mod}</h1><h2>{dex_total}</h2><h3> = </h3><h3> {this.state.dex_bonus} </h3><h3> + </h3><h3>{this.state.dex}</h3>
                                        <select name='chara_dex' id='chara_dex' value={this.state.dex} onChange={this.handleDexChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                    <label>Dexterity</label>
                                </div>
                                <div>
                                    <div className='ability'>
                                        <h1>{con_mod}</h1><h2>{con_total}</h2><h3> = </h3><h3> {this.state.con_bonus} </h3><h3> + </h3><h3>{this.state.con}</h3>
                                        <select name='chara_con' id='chara_con' value={this.state.con} onChange={this.handleConChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                    <label>Constitution</label>
                                </div>
                                <div>
                                    <div className='ability'>
                                        <h1>{int_mod}</h1><h2>{int_total}</h2><h3> = </h3><h3> {this.state.int_bonus} </h3><h3> + </h3><h3>{this.state.int}</h3>
                                        <select name='chara_int' id='chara_int' value={this.state.int} onChange={this.handleIntChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                    <label>Intelligence</label>
                                </div>
                                <div>
                                    <div className='ability'>
                                        <h1>{wis_mod}</h1><h2>{wis_total}</h2><h3> = </h3><h3> {this.state.wis_bonus} </h3><h3> + </h3><h3>{this.state.wis}</h3>
                                        <select name='chara_wis' id='chara_wis' value={this.state.wis} onChange={this.handleWisChange}>
                                            <option value={null}>Select</option>
                                            {this.state.ability_scores.map((ability, index) => <option key={index} name={ability} value={ability}>{ability}</option>)}
                                        </select>
                                    </div>
                                    <label>Wisdom</label>
                                </div>
                                <div>   
                                    <div className='ability'>
                                        <h1>{cha_mod}</h1><h2>{cha_total}</h2><h3> = </h3><h3> {this.state.cha_bonus} </h3><h3> + </h3><h3>{this.state.cha}</h3>
                                        <select name='chara_cha' id='chara_cha' value={this.state.cha} onChange={this.handleChaChange}>
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

                        <div>
                            <div className='skills'>
                                <p>Proficiencies</p>
                                <ul>
                                    {this.state.skills.map((skill, index) => <li key={index}>{skill}<button type="button" onClick={(e) => {this.removeSkill(e,skill)}}>-</button></li>)}
                                </ul>
                                <div><select id={i} key={i} name='prof' id='prof'>
                                     <option value={null}>Select</option>
                                        {decision.map((decision, index) => <option key={index} name={decision} value={decision}>{decision}</option>)}
                                    </select>
                                    {(this.state.skills.length < proficiency)? <button type="button" onClick={this.addSkill}>+</button> : <div></div>}</div>
                            </div>
                        </div>
                        <div>
                                <div className='language'>
                                    <h4>Language</h4>
                                    <ul>
                                    {lang.map((skill, index) => <li key={index}>{skill}</li>)}
                                        </ul>
                                </div>
                                <div className='feats'>
                                    <h4>Feats</h4>
                                        <ul>
                                    {feat.map((skill, index) => <li key={index}>{skill}</li>)}
                                        </ul>
                                    <h4>Proficiencies</h4>
                                        <ul>
                                    {prof.map((skill, index) => <li key={index}>{skill}</li>)}
                                        </ul>
                                     <h4>Saving-Throw</h4>
                                        <ul>
                                    {save.map((skill, index) => <li key={index}>{skill}</li>)}
                                        </ul>
                                </div>
                            </div>
                        </div>  
                    </div>
                    </div>
                    <div className='confirm'>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={this.resetChara}>Cancel</button>
                    </div>
                </form>
                <div className='errorSpace'>
                    <p className="hidden" id="requirements">You must have at least a name, race or class selected</p>
                </div>
            </div>
        )
    }
}

export default Sheet