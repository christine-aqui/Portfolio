import React from 'react';
// import {Animated} from "react-animated-css";
import eduList from './List/eduList';
import MyEdu from './myEdu';

const styles = {
  textStyle: {
    textAlign: 'left',
  },
  eduStyle: {
    width: '100%',
    height: '200px',
  },
};

const Story = () => (
  <div style={styles.textStyle}>
  <h1>About me!</h1>
    <p>I am a Software Developer located in Toronto with a background in industrial automation and robotics looking to make the change to into the tech industry.</p>

    <p>A childhood curiosity led to an educational focus in Engineering and Technology,
    more specifically Robotic and Automation. While working for Plexpack,
    I've gained experience developing control programs for automated packaging machinery,
    communicating directly with customers and troubleshooting electrical, mechanical and software issues both in the field and remotely.
    My work experience has been both challenging and fun working on programming
    projects with the added thrill of being able to control industrial equipment
    with a few lines of code.</p>

    <p>The logical extension of my education and work experience coupled with my passion for technology is
    my continued desire to learn and build beautiful software solutions.</p>

    <p>When I'm not coding, I like to play soccer, go rock climbing, lift weights and watch movies.</p>
    <hr />
    <h1>Education </h1>
    <div className='eduBlip' style={styles.eduStyle}>
      {eduList.map(item => (
          <MyEdu schoolName={item.schoolName} program={item.program} date={item.date} logo={item.logo} />
      ))
      }
    </div>
    <hr className='mt3'/>
    <div>
      <h1>Get in Touch</h1>
      <p>mail: aqui.christine at gmail.com</p>
      <p>Phone:416 553 5970</p>
    </div>
  </div>
);

export default Story;
