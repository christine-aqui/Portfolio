import React, { Component } from 'react';
import RocketGirl from './image/rocket1.gif';
import {Animated} from "react-animated-css";

const style = {
landing: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  margin: 'auto'
}
}

class Landing extends Component {

  // isLoaded = false;
    componentDidMount() {
    this.isLoaded = true;
  }

  render(){
    return(
        <div id="introPage" className="mw7 br3 pa2 mv2" style={style.landing}>
        <Animated animationIn="shake">
          <img id='loadImg' src={RocketGirl} alt=""></img>
        </Animated>
          <div className='landingtext animated fadeIn'>
          <Animated animationIn="fadeInRight" isVisible={this.isLoaded} animationInDelay={500}>
            <h1>Christine Aqui</h1>
          </Animated>
          <Animated animationIn="fadeInLeft" isVisible={this.isLoaded} animationInDelay={1000}>
            <h3>Software Developer</h3>
          </Animated>
          </div>
        </div>
    )
  }
}
export default Landing;
