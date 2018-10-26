import React from 'react';
import {Animated} from "react-animated-css";

const MyEdu = ({logo, schoolName, program, date}) => (
  <main className="mw6 center ">
    <Animated animationIn="flipInX" animationOut="zoomOutDown" isVisible={true}>
    <article>
        <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
          <div className="dtc w3">
            <img src={logo} className="db w-100" alt='education logo'/>
          </div>
          <div className="dtc v-top pl2">
            <h1 className="f6 f5-ns fw6 lh-title black mv0">{schoolName}</h1>
            <h2 className="f6 fw4 mt2 mb0 black-60">{program}</h2>
            <dl className="mt2 f6">
              <dt className="clip">Price</dt>
              <dd className="ml0">{date}</dd>
            </dl>
          </div>
        </a>
      </article>
    </Animated>
  </main>
)

export default MyEdu;