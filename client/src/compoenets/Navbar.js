import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Astronaut from './image/astronaut.jpg'

class Navbar extends Component {

  render(){
    const styles ={
      navColor:{
        background: 'rgb(72,61,139)',
      },
      textColor:{
        color:'rgb(255,165,0)'
      }
    }
    return (
      <nav style={styles.navColor} className="db dt-l w-100 border-box pa3 ph5-l myNav">
        <Link id='home' className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" to={'/'} title="Home">
          <img src={Astronaut} className="dib w2 h2 br-100" alt="Site Name"></img>
        </Link>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <Link id='about' style={styles.textColor} className="link dim  f6 f5-l dib mr3 mr4-l" to={'/about'} title="About">About Me</Link>
        <Link to={'/'} style={styles.textColor} className="link dim  f6 f5-l dib mr3 mr4-l" to={'/skill'} title="Skills">My Skills</Link>
        <Link id='projects' style={styles.textColor} className="link dim  f6 f5-l dib mr3 mr4-l" to={'/project'} title="Projects">Projects</Link>
        <Link id='contact' style={styles.textColor} className="link dim  f6 f5-l dib" to={'/contact'} title="Contact">Contact</Link>
      </div>
    </nav>
    )
  }

}

export default Navbar;
