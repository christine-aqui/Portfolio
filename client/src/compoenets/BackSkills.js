import React from 'react';
import {Animated} from "react-animated-css";
import backIcon from "../compoenets/image/icons/ket1.png";

const styles = {
    icon:{
        zIndex: '-1',
        width: '30px'
    }
}

const BackSkills = () => (
    <Animated animationIn="fadeInUpBig" animationOut="zoomOutDown" isVisible={true}>
        <article className="mw5 mh2 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <h2><img src={backIcon} style={styles.icon} alt='backend logo'/>
                Back-end</h2>
                    <hr className="mw3 bb bw1 b--black-10"></hr>
                </div>
                <div>
                    <a className="f4 fw6 db black link hover-red pv1">Node.js</a>      
                    <a className="f4 fw6 db black link hover-red pv1">MySQL</a>          
                    <a className="f4 fw6 db black link hover-red pv1">Sequelize.js</a>          
                    <a className="f4 fw6 db black link hover-red pv1">MongoDB</a>          
                    <a className="f4 fw6 db black link hover-red pv1">Mongoose.js</a>          
                    <a className="f4 fw6 db black link hover-red pv1">Java</a>          
                    <a className="f4 fw6 db black link hover-red pv1">Python</a>          
                    <a className="f4 fw6 db black link hover-red pv1"> </a>          
                </div>
        </article>
    </Animated>
)

export default BackSkills;