import React, { Component } from 'react';
import FrontSkills from './FrontSkill';
import BackSkills from './BackSkills';
import OtherSkills from './OtherSkill';

const styles = {
  layout:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // alignItems: 'center',
    margin: 'auto'
  }
}
class Skill extends Component {

  render(){
    return (
      <div style={styles.layout} >
        <FrontSkills  />  
        <BackSkills  />  
        <OtherSkills  /> 
      </div>
    )
  }
}

export default Skill;
