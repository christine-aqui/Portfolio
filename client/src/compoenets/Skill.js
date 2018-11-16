import React, { Component } from 'react';
import FrontSkills from './FrontSkill';
import BackSkills from './BackSkills';
import OtherSkills from './OtherSkill';
import flyingRocket from './image/FlyingRocket.png';

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // alignItems: 'center',
    margin: 'auto',
  },
  topSkill: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  backgroundimg: {
    backgroundImage: `url(${flyingRocket})`,
  },
};
class Skill extends Component {
  render() {
    return (
      <div className="pt5">
        <article
          className="mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 center tc w-90"
          style={styles.backgroundimg}
        >
          <h2>Top 5 Skills</h2>
          <hr className="mw3 bb bw1 b--black-10" />
          <div style={styles.topSkill} className="pa1 w-100">
            <a className="f4 db black link hover-blue pv1 ph2">JavaScript</a>
            <a className="f4 db black link hover-blue pv1 ph2">React.js</a>
            <a className="f4 db black link hover-blue pv1 ph2">Node.js</a>
            <a className="f4 db black link hover-blue pv1 ph2">CSS</a>
            <a className="f4 db black link hover-blue pv1 ph2">HTML</a>
          </div>
        </article>
        <div style={styles.layout}>
          <FrontSkills />
          <BackSkills />
          <OtherSkills />
        </div>
      </div>
    );
  }
}

export default Skill;
