import React, { Component } from 'react';
// import Footer from './Footer';
// import Me from './image/Profile/Me.jpeg';
import { Animated } from 'react-animated-css';
import ChrisProfile from './ChrisProfile';
import Story from './Story';
import './aboutStyle.css';

const styles = {
  layout: {
    display: 'flex',
    margin: 'auto',
  },
  center: {
    margin: 'auto',
  },
};
class About extends Component {
  render() {
    return (
      <div className="aboutpager" style={styles.layout}>
        <Animated
          animationIn="fadeInLeftBig"
          animationOut="zoomOutDown"
          isVisible={true}
          animationInDelay={10}
        >
          <ChrisProfile />
        </Animated>
        <article
          id="aboutPage"
          className="mw7 center br3 pa4 pa4-ns mv2"
          style={styles.center}
        >
          <Animated
            animationIn="fadeInDownBig"
            animationOut="zoomOutDown"
            isVisible={true}
            animationInDelay={10}
          >
            <Story />
          </Animated>
        </article>
      </div>
    );
  }
}

export default About;
