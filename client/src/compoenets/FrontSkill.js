import React from 'react';
import {Animated} from "react-animated-css";
import frontIcon from "../compoenets/image/icons/ket2.png";

const styles = {
    icon:{
        zIndex: '-1',
        width: '30px'
    }
}

const FrontSkills = () => (
    <Animated animationIn="fadeInLeftBig" animationOut="zoomOutDown" isVisible={true}>
        <article className="mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <h2><img src={frontIcon} style={styles.icon} alt='front-end space logo'/>
                Front-end</h2>
                    <hr className="mw3 bb bw1 b--black-10"></hr>
                </div>
                <div>
                    <a className="f4 fw6 db black link hover-green pv1">HTML</a>
                    <a className="f4 fw6 db black link hover-green pv1">CSS</a>
                    <a className="f4 fw6 db black link hover-green pv1">JavaScript (ES6)</a>
                    <a className="f4 fw6 db black link hover-green pv1">jQuery</a>
                    <a className="f4 fw6 db black link hover-green pv1">SASS</a>
                    <a className="f4 fw6 db black link hover-green pv1">Bootstrap</a>
                    <a className="f4 fw6 db black link hover-green pv1">React.js</a>
                    <a className="f4 fw6 db black link hover-green pv1">Redux</a>
                    <a className="f4 fw6 db black link hover-green pv1">Handlebars.js</a>
                </div>
        </article>
    </Animated>
)

export default FrontSkills;