import React, { Component } from 'react';
import FrontSkills from './FrontSkill';
import BackSkills from './BackSkills';
import OtherSkills from './OtherSkill';
import flyingRocket from './image/FlyingRocket.png'

const styles = {
  layout:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // alignItems: 'center',
    margin: 'auto'
  },
  topSkill:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent : 'center',
  },
  backgroundimg:{
    backgroundImage: `url(${flyingRocket})`,
  }
}
class Skill extends Component {

  render(){
    return (
      <div className='pt5' >
        <article className="mw7 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 tc" style={styles.backgroundimg} >
          <h2>Top 5 Skills</h2>
          <hr className="mw3 bb bw1 b--black-10"></hr>
          <div style={styles.topSkill} className='pa1 white'>
            <a className="f4 fw6 db black link hover-blue pv1 ph2">JavaScript</a>
            <a className="f4 fw6 db black link hover-blue pv1 ph2">React.js</a>
            <a className="f4 fw6 db black link hover-blue pv1 ph2">Node.js</a>
            <a className="f4 fw6 db black link hover-blue pv1 ph2">CSS</a>
            <a className="f4 fw6 db black link hover-blue pv1 ph2">HTML</a>
          </div>
        </article>
        <div style={styles.layout} >
          <FrontSkills  />
          <BackSkills  />
          <OtherSkills  />
        </div>
      </div>
    )
  }
}

export default Skill;
